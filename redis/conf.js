var log = require('loglevel');
var redis = require('redis');

var redisClient = redis.createClient("6379","localhost");
// redisClient.auth("", function (err) {
//     if (err) throw err;
// });
redisClient.on('error', function(err) {
    log.error('Redis error: ' + err);
});

module.exports = redisClient;
