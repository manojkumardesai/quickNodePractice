function printhelp() {
    console.log("1.js");
    console.log("");
    console.log("usage:");
    console.log("--help                 prints this help");
    console.log("--file                 read the file of {Filename} and output the contents");
    console.log("");
}

var args = require('minimist')(process.argv.slice(2), { string: 'name' });

if (args.help || !args.file) {
    printhelp();
    process.exit(1);
}

var hello = require("./helloworldWithCB.js");

hello.say(args.file, function(err, contents) {
    if (err) {
        console.error("Error: ", err);
    } else {
        console.log(contents.toString());
    }
});