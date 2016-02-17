
var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '123456',
   database : 'frodo'
 });
 var app = express();
 app.use(express.static(__dirname + '/files'));
 
 
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected 123 ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });
 
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})
 
 app.get("/getAllProduct",function(req,res){
 connection.query('SELECT * from products where active = 1', function(err, rows, fields) {
 // connection.end();
   if (!err)
   {
     console.log('The solution is: ', rows);
      res.json(rows);
   }
   else
     console.log(err);
     
   });
 });
 
//  app.get('/:file(*)', function(req, res, next){
//   var file = req.params.file
//     , path = __dirname + '/files/' + file;

//   res.(path);
// });
 
 
 // app.listen(3000);
 var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
 })