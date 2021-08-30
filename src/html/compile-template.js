var fs = require('fs');
var path = require('path');
var Handlebars = require("handlebars");

var templatePath = process.argv[2];
var contentPath = process.argv[3];
var outputPath = process.argv[4];

console.log("Template:", templatePath);
console.log("Content:", contentPath);
console.log("Output:", outputPath);

var content = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
compileTemplate(content);

function compileTemplate(content) {
  var template = fs.readFileSync(templatePath, "utf-8");
  var renderTemplate = Handlebars.compile(template);
  var generatedText = renderTemplate(content);

  fs.writeFile(outputPath, generatedText, err => {
    if (err) console.log(err);

    console.log("");
    console.log("Successfully generated", outputPath);
  });
}