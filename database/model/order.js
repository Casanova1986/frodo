var connection = require("../connection/mysql_connection");

module.exports = {

  addOrder: function(orderID,orderDate,user_id, customerID,total_money,callback) {

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

      var testdata =  [
                      ['test1','123456',1],
                      ['test2','123456',1]
                      ]
      var sql = "INSERT INTO User (username,password,status)  VALUES ?";

        connection.query(sql,testdata,function(err,rows,field)
        {
          if (err) { 
            connection.rollback(function() {
            callback(err,null);
            });
          }  
          connection.commit(function(err) {
          if (err) { 
            connection.rollback(function() {
            callback(err,null);
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




