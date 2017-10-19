
var log = require('loglevel');

exports.promise = function (req,res) { // '/' 위치에 'get'요청을 받는 경우,
	
	//Promise 선언
	var _promise = function (param) {

		return new Promise(function (resolve, reject) {

			// 비동기를 표현하기 위해 setTimeout 함수를 사용 
			// 파라메터가 참이면, 
			// if (param) {

			// 	// 해결됨 
			// 	resolve("해결 완료");
			// }

			// // 파라메터가 거짓이면, 
			// else {

			// 	// 실패 
			// 	reject(Error("실패!!"));
			// }
			resolve("해결 완료");
		});
	};

	var result = [];

	var func1 = function(callback) {
		result.push("func1 done");
		log.debug("func1 done");
		var f = callback || false;
		if(f) f("func1 callback done");
	};

	var func2 = function(param) {
		result.push("func2 param : " + param);
		result.push("func2 done");
		log.debug("func2 done");
	};

	// var func3 = function(callback) {
	// 	result.push("func3 done");
	// 	log.debug("func3 done");
	// 	var f = callback || false;
	// 	f("func3 callback done");
	// };

	var func3 = callback => {
		result.push("func3 done");
		log.debug("func3 done");
		var f = callback || false;
		f("func3 callback done");
	};

	// var func4 = function(param) {
	// 	result.push("func4 param : " + param);
	// 	result.push("func4 done");
	// 	log.debug("func4 done");
	// };

	var func4 = param => {
		result.push("func4 param : " + param);
		result.push("func4 done");
		log.debug("func4 done");
	};
	


	var list;
	var result3;

	//Promise 실행
	_promise(true)
	.then(func1 (function(data) {
		list = data;
	}))
	.then(func2(list))
	.then(func3 (function (data) {
		result3 = data;
	}))
	.then(func4(result3))
	.catch(function(err) {
		res.send("error가 발생하였습니다.");
	});

	log.debug("all done");

	res.send(result.toString());

	// res.send('{"json":"text", "jsonObj":[{"text":1}, {"text":2}], "hero":[{"idx":1, "name":"batman"}]}'); // "Hello World!"를 보냅니다.
};