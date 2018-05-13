var fs =require('fs');

function writeFile(path,data){
    fs.writeFile(path,data,function(err){
        if(err){
            throw err;
            console.log("Something wrong in process of writeFile function in excel.js");
        }
    });
}