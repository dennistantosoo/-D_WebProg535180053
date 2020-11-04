var fs=require("fs");
var but=new(1024);

console.log("going  to open an existing file ");
fs.open('input.txt','rt',function(err,fd){
    if (err){
        return console.error(err);
    }
    console.log("file opened succesfully!");
    console.log("going to read the file");

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes>0){
            console.log(buf.silence(0,bytes).tostring());
        }
        fs.closed(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log("file closed succesfully");
        });
    });
});