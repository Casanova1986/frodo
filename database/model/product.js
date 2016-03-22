var connection = require("../connection/mysql_connection");

module.exports = {
	
  getProducts: function(callback) {

    connection.query('SELECT * from Products where active = 1',callback);
          
    // console.log('The solution is: ', data);      
   
  },
  
  sayHelloInSpanish: function(callback) {
    connection.query('SELECT * from Products where active = 1',function(err,rows,field)
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




