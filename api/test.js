
exports.getList = function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('{"json":"text", "jsonObj":[{"text":1}, {"text":2}], "hero":[{"idx":1, "name":"batman"}]}'); // "Hello World!"를 보냅니다.
};

exports.postList = function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
 res.send('{"json":"text", "jsonObj":[{"text":1}, {"text":2}], "hero":[{"idx":1, "name":"batman"}]}'); // "Hello World!"를 보냅니다.
};
