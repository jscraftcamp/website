var fs = require("fs");
var path = require("path");
var recursiveReaddirSync = require('recursive-readdir-sync')

var args = process.argv.slice(2);
var srcdir = args[0];
var destfile = args[1];

var array = [];
recursiveReaddirSync(srcdir)
  .filter(file => file.endsWith(".json"))
  .filter(file => file != "_template.json")
  .forEach(file => {
    var content = fs.readFileSync(file, "utf8");
    var object = JSON.parse(content);
    array.push(object);
  });


fs.writeFileSync(destfile, JSON.stringify(array), "utf8")

