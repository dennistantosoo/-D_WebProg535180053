var fs=require("fs");

console.log("going to delet an existing file");
fs.unlink('input.txt',function(err){
    if(err){
        return console.error(err);
    }
    consolew.log("file delet successfully");
});