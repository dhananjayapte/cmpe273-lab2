
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		123456 : { name: 'dhananjay', email: 'dhananjayapte@gmail.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);
   /*
	* TODO: Remove the given sessionId from the sessionMap
	*/ 
	delete this.sessionMap['sessionId'];
};

/**
Refresh Session
*/
Login.prototype.refreshSession = function(sessionId){
	var name = this.sessionMap[sessionId].name;
	var email = this.sessionMap[sessionId].email;
	//create new session
    var newSessionId = this.login(name,email);
    //delete the old session
    this.logout(sessionId);
    console.log('Session Refreshed');
	return newSessionId;
}

// Export the Login class
module.exports = new Login();
