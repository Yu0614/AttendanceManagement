var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var place = "iconv.txt";

var sampleText = "This text will be written down in file";
var dist = path.join(process.env.PWD || process.cwd(),place);

// Shift-JIS
fs.writeFileSync(dist,"");
var fd = fs.openSync(dist,"w");
var buf = iconv.encode(sampleText,"Shift_JIS");
fs.write( fd, buf, 0, buf.length ,function(err,written,buffer){
    if(err) throw err;
    console.log("the file is correctly written down in [ " + place +" ]");
});