var fs=require("fs");
var buf =new(1024);

console.log("going to open an existing file");
fs.open('input.txt','rt',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened successfully!");
    console.log("going to read the file");

    fs.read(fd,but,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes+"bytes read");

        if(bytes>0){
            console.log(buf.slice(0,bytes).tostring());
        }
    });
});