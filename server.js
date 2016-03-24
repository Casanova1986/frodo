
var express    = require("express");
 var mysql      = require('mysql');
 var bodyParser = require('body-parser');

var Product = require('./database/model/product.js');
var Users = require('./database/model/user.js');
var Order = require('./database/model/order.js');

 var app = express();
 
 app.use(express.static(__dirname + '/files'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 
 //Function
 app.get("/",function(req,res){

      res.json("Hello Get");
 });

app.post("/addOrder",function(req,res){

      var orderID=req.body.orderID;
      var orderDate=req.body.orderDate;
      var username=req.body.username;
      var customer_id=req.body.customer_id;
      var money=req.body.money;
      var details=req.body.details.replace("*","'");

      Order.addOrder(orderID,orderDate,username,customer_id,money,details,
        function(err,rows,fields)
        {
        if (!err)
          res.json("Add Order Success");
        else
          res.json(err);
        });
    });


 app.post('/login', function (req, res) {
  var username=req.body.user;
  var password=req.body.password;
  // var data = {
  //       user : username,
  //       pass : password
  //   };
  var row1;
  
  Users.checkUser(username,password,
  function(err, rows, fields) 
  {
     if (!err)
   {
     if(rows.length >0)
     {
        Product.getProducts(function(err,row1,fields)
        {
          if (!err)
          res.json(row1);
        });
      
     }
   }
   
   // console.log('The solution is: ', row1);
   
  });
  
 
  
})
 

  app.get("/getProduct",function(req,res){

      // var user = Product.getUsers();
      res.json(Product.getUsers(function(err,rows)
      {
       if(!err)
       {
        console.log('The result is: ', rows);
       }
       else
       {
        console.log('The result is: ', rows);
       }
      })
      
      );
      
      // console.log('The result is: ', user);
      // res.json(user);
 });
 
 
 // app.listen(3000);
 var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
 })