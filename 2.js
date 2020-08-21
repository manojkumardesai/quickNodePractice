function printhelp() {
    console.log("2.js");
    console.log("");
    console.log("usage:");
    console.log("--help                 prints this help");
    console.log("--file                 read the file of {Filename} and output the contents");
    console.log("");
}

var args = require('minimist')(process.argv.slice(2));

if (args.help || !args.file) {
    printhelp();
    process.exit(1);
}

var say = require("./helloworld.js");