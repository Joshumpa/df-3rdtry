let script = require('./scripts')

let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

const sql = require('mssql');
const port = 3001

sql.connect("mssql://spark:spark@MXL30DB100/SparkDB-IND");
sql.on('error', err => {
  console.log("ERROR: La conexión no fue establecida correctamente")
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  console.log('a user connected...');

  socket.on('getInfo', ({table, machine}) => {

    let status = true

    setInterval(() => {

      if (status) {
        status = false

        try {
          
          new sql.Request().query(script.setQuery(table, machine), (err, result1) => {

            if (err) { throw new Error('Failed SQL'); }

            result1 = Object.values(result1)[1];

            let gaugeInfo = result1.filter(obj => obj.Variable !== "Good")
            gaugeInfo = gaugeInfo.map(element => ({ ...element, MajorTicks: script.calcTicks(element["Max"]) }))

            let st = result1.filter(obj => obj.Variable === "Good")

            let accumulatedData = gaugeInfo.reduce((accumulatedData, cur) => ({ ...accumulatedData, [cur.Variable]: cur.Value }), {})
            accumulatedData.name = st[0].Time.toLocaleTimeString('en-US')

            const time = st[0].Time.toUTCString().substring(0, 25)
            let goodData = st[0].Value

            io.to(socket.id).emit('information', { gaugeInfo, goodData, time, accumulatedData })

            status = true

          });

        } catch (err) {
          console.log("ERROR: La query no fue elaborada correctamente")
        }
      }
    }, 6000);
  })

  socket.on('getValues', () => {

    //console.log("info")
    try {
      new sql.Request().query(`
              
          SELECT TOP 6 Time, Variable, Value
          FROM HydraDataL3
          WHERE Variable in('Cycle','Good','PeakPrs','Mcushion','InjTime','Recovtime')
          ORDER BY Time DESC
              
          `, (err, result2) => {

        if (err) { throw new Error('Failed SQL'); }

        result2 = Object.values(result2)[1];
        let val = result2.filter(obj => obj.Variable !== "Good")
        let good = result2.filter(obj => obj.Variable === "Good")
        //console.dir(val)

        io.to(socket.id).emit('values', { val, good })

      });
    } catch (err) {
      console.log("ERROR: La query no fue elaborada correctamente")
    }

  })

  socket.on('disconnect', () => {
    console.log('...user disconnected');
  });

});

http.listen(port, () => {
  console.log(`listening on *: ${port}`);
});