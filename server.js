
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
 
 
 app.post('/login', function (req, res) {
  var username=req.body.user;
  var password=req.body.password;
  // var data = {
  //       user : username,
  //       pass : password
  //   };
  
connection.query('SELECT * from user where username = ? and password = ? and status > 0',
[username,password],
  function(err, rows, fields) {
 // connection.end();
 var data;
   if (!err)
   {
      if(rows.length >0)
      {
         connection.query('SELECT * from products where active = 1',
         function(err1, rows1, fields) 
         {
            if (!err)
            {
                data = 
                {
                  status:1,
                  rows1
                };
      
                console.log('The solution is: ', data);
                res.json(data);
             }
     
          })
    
       }
    
   }
   else
     console.log(err);
   });


  
})
 
 
// Load tất cả sản phẩm
app.get("/getAllProduct",function(req,res){
 connection.query('SELECT * from products where active = 1', function(err, rows, fields) {
 // connection.end();
   if (!err)
   {
     console.log('The solution is: ', rows.length);
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