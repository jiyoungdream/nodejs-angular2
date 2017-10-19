var session = require('express-session') // session 정보

exports.getList = function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('{"json":"text", "jsonObj":[{"text":1}, {"text":2}], "hero":[{"idx":1, "name":"batman"}]}'); // "Hello World!"를 보냅니다.
};

exports.postList = function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('{"json":"text", "jsonObj":[{"text":1}, {"text":2}], "hero":[{"idx":1, "name":"batman"}]}'); // "Hello World!"를 보냅니다.
};

exports.abcd = function (req,res) { // 
	// const session = req.session;
	// session.sessionId = req.session.id;
	// session.name = "session name";
	res.send(JSON.stringify(req.session) + "<br/>" + JSON.stringify(req.protocol)); // "Hello World!"를 보냅니다.
};
