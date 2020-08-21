function say(filename, cb) {
    // return fs.readFileSync(filename); -- Synchronous way of reading files
    return fs.readFile(filename, function(err, contents) {
        if (err) { // If there is an error, immediately call back with error
            cb(err);
        } else {
            setTimeout(function() { // Simulating async ajax file call
                cb(null, contents);
            }, 1000);
        }
    }); // Asynchronous way
}

var fs = require('fs');

module.exports.say = say;