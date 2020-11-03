var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const sql = require('mssql');
const config = {
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

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  console.log('a user connected...');
  let pool = sql.connect(config)

  socket.on('getInfo', () => {

    try {
      let result1 = pool.request()
        .query(`
              
          SELECT TOP 10 Machine, Variable, Max, Min, Measure, NotSat 
          FROM HydraDataL3_Catalog
              
        `)

      let info = Object.values(result1)[1];
      console.dir(result1)

      io.to(socket.id).emit('information', info)

    } catch (err) {
      // ... error checks
    }

    sql.on('error', err => {
      // ... error handler
    })

  })

  socket.on('getValues', () => {

    try {
      let result2 = pool.request()
        .query(`
              
          SELECT TOP 6 Time, Variable, Value
          FROM HydraDataL3
          WHERE Variable in('Cycle','Good','PeakPrs','Mcushion','InjTime','Recovtime')
          ORDER BY Time DESC
              
        `)

      let val = Object.values(result2)[1];
      console.dir(result2)

      io.to(socket.id).emit('values', val)

    } catch (err) {
      // ... error checks
    }

    sql.on('error', err => {
      // ... error handler
    })

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


