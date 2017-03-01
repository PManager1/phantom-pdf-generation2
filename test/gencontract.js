var fs = require('fs');
var pdf = require('html-pdf');

// var pdf = require('phantom');

var html = fs.readFileSync('contract.html', 'utf8');


// var options = { format: 'Letter' , "timeout": 30000 };

var options = {  "width": "16.16in", "height": "16.63in", "timeout": 100000, "zoomFactor": "1" };




// pdf.create(html, options).toFile('LETTER.pdf', function(err, res) {	
pdf.create(html, options).toFile('contract_16.16by_16.63-zoom-0.3.pdf', function(err, res) {	
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});