var connection = require("../connection/mysql_connection");

module.exports = {

  addOrder: function(orderID,orderDate,user_id, customerID,total_money,callback) {

    connection.beginTransaction(function(err) {
  if (err) { throw err; }

var order  = {order_id: orderID, order_date: orderDate, customer_id:customerID, username:user_id, money:total_money};
connection.query('INSERT INTO Order SET ?',order, function(err,rows,field)
    {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 

      var user  = {username: orderID, password: orderDate, status:1};
      var sql = "INSERT INTO user SET ?";

        connection.query(sql,order,function(err,rows,field)
        {
          if (err) { 
            connection.rollback(function() {
            throw err;
            });
          }  
          connection.commit(function(err) {
          if (err) { 
            connection.rollback(function() {
            throw err;
            });
          }
          console.log('Transaction Complete.');
          connection.end();
          return callback(null,rows);
      });
    });

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




