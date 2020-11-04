var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const sql = require('mssql');
/* const config = {
  user: 'spark',
  password: 'spark',
  server: 'MXL30INBOWHD7Y2',
  database: 'SparkDB-IND',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}
 */
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

        io.to(socket.id).emit('information', {info, good})

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

        io.to(socket.id).emit('values', {val, good})

      });
    } catch (err) {
      console.log("ERROR: La query no fue elaborada correctamente")
    }

  })

  socket.on('disconnect', () => {
    console.log('...user disconnected');
    sql.close()
  });

});

http.listen(port, () => {
  console.log(`listening on *: ${port}`);
});

/*
let max1 = .6
console.log(Array.from({length: (max1*10)+1}, (_, i) => i*.1));
console.log((max1*10)+1);

let max2 = 2
console.log(Array.from({length: (max2/.5)+1}, (_, i) => i*.5));

let max3 = 30
console.log(Array.from({length: (max3/10)+1}, (_, i) => i*10));

let max4 = 700
console.log(Array.from({length: (max4/100)+1}, (_, i) => i*100));
*/


