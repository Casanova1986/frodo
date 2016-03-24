var connection = require("../connection/mysql_connection");

module.exports = {

  addOrder: function(orderID,orderDate,user_id, customerID,total_money,detail_data,callback) {

    connection.beginTransaction(function(err) {
  if (err) { throw err; }

var order  = {order_id: orderID, order_date: orderDate, customer_id:customerID, username:user_id, money:total_money};
connection.query('INSERT INTO Orders SET ?',order, function(err,rows,field)
    {
    if (err) { 
      connection.rollback(function() {
        callback(err,null);
      });
    }
 

      // var user  = {username: 'tudt', password: orderDate, status:1};

      // var testdata =  [
      //                 ['test1','123456',1],
      //                 ['test2','123456',1]
      //                 ]

      var arr = detail_data.split("#");
      if(arr.length >0)
      {
          var sql = "INSERT INTO User (username,`password`,status)  VALUES ";
          for (var i = 0; i < arr.length ; i++) {
              var data = arr[i].split(",");
              sql += "('" + data[0] + "','" + data[1] + "'," + data[2] + ")";
              if (i < arr.length -1)
                sql += ",";

          }
          
        var con = connection.query(sql,function(err,rows,field)
        {
          console.log(con.sql);
          if (err) { 
            connection.rollback(function() {
            callback(connection. query,null);
            });
          }  
          connection.commit(function(err) {
          if (err) { 
            connection.rollback(function() {
            callback(err+sql+detail_data,null);
            });
          }
          console.log('Transaction Complete.');
          connection.end();
          return callback(null,rows);
      });
    });

      }


  });
});
/* End transaction */
   
  },
  
  sayHelloInSpanish: function(callback) {
    connection.query('SELECT * from products where active = 1',function(err,rows,field)
    {
    	if(err)
    	 return callback(err);
    	else
    	{
    		if(rows.length >0)
    		{
    			return callback(null,rows);
    		}
    	} 
    	
    }
    
    );
          
  }

};




