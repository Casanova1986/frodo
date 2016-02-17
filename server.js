
var express    = require("express");
 var mysql      = require('mysql');
 var bodyParser = require('body-parser')

 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'frodo'
 });
 var app = express();
 
 app.use(express.static(__dirname + '/files'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 

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
 
 //Check thông tin Account
 app.post('/login', function (req, res) {
  var user_name=req.body.user;
  var password=req.body.password;
  var data = {
        user : user_name,
        pass : password
    };
  
  console.log("User name = "+user_name+", password is "+password);
  res.send(data);
})
 
 
// Load tất cả sản phẩm
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