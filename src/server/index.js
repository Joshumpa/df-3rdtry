var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const sql = require('mssql');

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  console.log('a user connected...');
  sql.connect("mssql://spark:spark@MXL30INBOWHD7Y2/SparkDB-IND");

  sql.on('error', err => {
    console.log("ERROR: La conexión no fue establecida correctamente")
  })

  socket.on('getInfo', () => {

    //console.log("info")
    try {
      new sql.Request().query(`
              
          SELECT TOP 10 Machine, Variable, Max, Min, Measure, NotSat 
          FROM HydraDataL3_Catalog
              
          `, (err, result1) => {

        if (err) { throw new Error('Failed SQL'); }

        result1 = Object.values(result1)[1];
        let info = result1.filter(obj => obj.Variable !== "Good")
        let good = 0
        //console.dir(info)
        const calcTicks = (max) => {
          if (max > 0 && max < 1.5) {
            let arr = Array.from({ length: (max * 10) + 1 }, (_, i) => i * .1);
            arr = arr.map(function (each_element) {
              return Number(each_element.toFixed(2));
            });
            return arr
          }
          if (max >= 1.5 && max < 5) {
            return Array.from({ length: (max / .5) + 1 }, (_, i) => i * .5)
          }
          if (max >= 5 && max < 10) {
            return Array.from({ length: (max) + 1 }, (_, i) => i * 1)
          }
          if (max >= 10 && max < 30) {
            return Array.from({ length: (max / 5) + 1 }, (_, i) => i * 5)
          }
          if (max >= 30 && max < 150) {
            return Array.from({ length: (max / 10) + 1 }, (_, i) => i * 10)
          }
          if (max >= 150) {
            return Array.from({ length: (max / 100) + 1 }, (_, i) => i * 100)
          }
        }

        info = info.map(element => ({ ...element, MajorTicks: calcTicks(element["Max"]) }))


        io.to(socket.id).emit('information', { info, good })

      });

    } catch (err) {
      console.log("ERROR: La query no fue elaborada correctamente")
    }
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