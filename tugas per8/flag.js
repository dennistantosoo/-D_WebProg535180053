var fs =require("fs");

console.log("going to open file!");
fs.open('input.txt','rt',function(err,fd){
    if(err){
        return console.error(err);
    }
});