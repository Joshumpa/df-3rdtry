let script = require('./scripts')

let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

const sql = require('mssql');

const port = 3001

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  console.log('a user connected...');
  sql.connect("mssql://spark:spark@MXL30DB100/SparkDB-IND");

  sql.on('error', err => {
    console.log("ERROR: La conexión no fue establecida correctamente")
  })

  socket.on('getInfo', () => {

    let status = true

    setInterval(() => {

      if (status) {

        status = false
        try {
          //Query.setQuery('HydraDataL3')
          new sql.Request().query( script.setQuery('HydraDataL3'), (err, result1) => {

            if (err) { throw new Error('Failed SQL'); }

            result1 = Object.values(result1)[1];
            let info = result1.filter(obj => obj.Variable !== "Good")
            info = info.map(element => ({ ...element, MajorTicks: script.calcTicks(element["Max"]) }))
            
            let st = result1.filter(obj => obj.Variable === "Good")

            const good = st[0].Value
            const time = st[0].Time.toUTCString().substring(0, 25)

            let acc = info.reduce((acc, cur) => ({ ...acc, [cur.Variable]: cur.Value }), {})

            io.to(socket.id).emit('information', { info, good, time, acc })

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