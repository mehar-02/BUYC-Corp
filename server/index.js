const express = require('express');
var mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
const port = 5000;

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors({
//     origin: '*', // or specify the allowed origins
//   credentials: true,
//   maxAge: 1800,
//   allowedHeaders: 'content-type'
// }));
app.use(cors("*"));
var connection = mysql.createConnection({
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: 'dDGC2c31d1H1gc3c6H3FCfgDdaGBb36g',
    database: 'railway',
    port:'26960'
});

connection.connect(function(error){
    if(error){
        console.error('Error: ', error);
    }
    else{
        console.log('Connected');
    }
});


app.get('/api/data', (req, res) => {
    var colors=req.query.color;
    const order=req.query.order;
    const mileage=req.query.mileage;

    try {
        let filter=[];
    var sql=`SELECT * FROM Marketplace_Inventory JOIN OEM_Specs ON (OEM_Specs.car_id = Marketplace_Inventory.car_id) WHERE 1=1`;
    if(colors!="All"){
        filter.push(colors);
        sql += ` AND color= "${req.query.color}"`;
    }
    if(mileage){
        filter.push(mileage);
        sql += ` AND mileage> ${req.query.mileage}`;
    }
    if(order){
        filter.push(order);
        sql += ` ORDER BY list_price ${order}`;
    }
   
    connection.query(sql, filter, (err, result) => {
    if (err) {
        console.log(err)
      res.status(500).send(err);
      return;
    }
//     res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Max-Age', '1800');
//   res.setHeader('Access-Control-Allow-Headers', 'content-type');
    console.log(result);
    res.send(result);
  });
    } catch (error) {
        console.log(error)
    }
    
    
});

app.get('/api/count', (req,res) => {
    let sql = 'SELECT COUNT(*) AS count FROM OEM_Specs';
    connection.query(sql, (error, results, fields) => {
        if(error){
            console.log(error);
            res.status(500).send(error,message);
            return;
        }
        res.json(results);
    });
});

app.get('/api/search', (req, res) => {
    const searchQuery = req.query.search;

    try {
        
    console.log("searchQuery",searchQuery);
    if(searchQuery){
    let sql = `SELECT * FROM OEM_Specs JOIN Marketplace_Inventory ON (OEM_Specs.car_id = Marketplace_Inventory.car_id) WHERE model_name LIKE "%${searchQuery}%"`;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if(error){
            console.log(error);
            res.status(500).send(error);
            return;
        }
        res.send(results);
    });
    }
    else{
        let sql = `SELECT * FROM OEM_Specs JOIN Marketplace_Inventory ON (OEM_Specs.car_id = Marketplace_Inventory.car_id)`;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
        if(error){
            console.log(error);
            res.status(500).send(error);
            return;
        }
        res.send(results);
    });
    }
    } catch (error) {
        console.log(error)
    }
    
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', function () {
    connection.end(function () {
        console.log('MySQL connection has been closed.');
        process.exit();
    });
});

// const express = require('express');
// var mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// const port = 8000;

// app.use(cors("*"));
// var connection = mysql.createConnection({
//     host: 'viaduct.proxy.rlwy.net',
//     user: 'root',
//     password: 'EAFeGFAACcaDF4ec2Bbb1D-64cgG34d4',
//     database: 'railway',
//     port:'53134'
// });

// connection.connect(function(error){
//     if(error){
//         console.log('Error');
//     }
//     else{
//         console.log('Connected');
//     }
// });

// app.get('/', (req, res) => res.send("HEllo"));
// app.get('/api/data', (req, res) => {
//     var colors=req.query.color;
//     const order=req.query.order;
//     const mileage=req.query.mileage;

//     try {
//         let filter=[];
//     var sql=`SELECT * FROM Marketplace_Inventory JOIN OEM_Specs ON (OEM_Specs.car_id = Marketplace_Inventory.car_id) WHERE 1=1`;
//     if(colors!=="All"){
//         filter.push(colors);
//         sql += ` AND color= "${req.query.color}"`;
//     }
//     if(mileage){
//         filter.push(mileage);
//         sql += ` AND mileage>${req.query.mileage}`;
//     }
//     if(order){
//         filter.push(order);
//         sql += ` ORDER BY list_price ${order}`;
//     }
   
//     connection.query(sql, filter, (err, result) => {
//     if (err) {
//         console.log(err)
//       res.status(500).send(err);
//       return;
//     }
//     res.send(result);
//   });
//     } catch (error) {
//         console.log(error)
//     }
    
    
// });

// app.get('/api/count', (req,res) => {
//     let sql = 'SELECT COUNT(*) AS count FROM OEM_Specs';
//     connection.query(sql, (error, results, fields) => {
//         if(error){
//             console.log(error);
//             res.status(500).send(error,message);
//             return;
//         }
//         res.json(results);
//     });
// });

// app.get('/api/search', (req, res) => {
//     const searchQuery = req.query.search;
    
//     console.log("searchQuery",searchQuery);
//     if(searchQuery){
//     let sql = `SELECT * FROM OEM_Specs JOIN Marketplace_Inventory ON (OEM_Specs.car_id = Marketplace_Inventory.car_id) WHERE model_name = "${searchQuery}"`;
//     console.log(sql);
//     connection.query(sql, (error, results, fields) => {
//         if(error){
//             console.log(error);
//             res.status(500).send(error);
//             return;
//         }
//         res.send(results);
//     });
//     }
//     else{
//         let sql = `SELECT * FROM OEM_Specs JOIN Marketplace_Inventory ON (OEM_Specs.car_id = Marketplace_Inventory.car_id)`;
//     console.log(sql);
//     connection.query(sql, (error, results, fields) => {
//         if(error){
//             console.log(error);
//             res.status(500).send(error);
//             return;
//         }
//         res.send(results);
//     });
//     }
// })
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// process.on('SIGINT', function () {
//     connection.end(function () {
//         console.log('MySQL connection has been closed.');
//         process.exit();
//     });
// });
