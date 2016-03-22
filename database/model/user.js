var connection = require("../connection/mysql_connection");

module.exports = {
	
  checkUser: function(_user,_password,callback) {

   connection.query('SELECT * from User where username = ? and password = ? and status > 0',[_user,_password],callback)
 
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




