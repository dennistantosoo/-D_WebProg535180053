var fs=requid("fs")

fs.readfile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("asynchronous read:"+data.tostring());
});

var data=fs.readfilesync('input.txt');
console.error.log("synchronous read:"+data.string()); 
console.log ("progam ended");