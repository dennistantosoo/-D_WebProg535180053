var fs=required("fs")

console.log("going to write exiting file");
fs.writefile('input.txt','simply easy learning!',function(err){
    if(err){
        return console.error(err);
    }
    console.log("data written succesfully");
    console.log("let's read newly written data");
    fs.readfile('input.txt',function(err,data){
        if(err){
            return console.error(err);
                }
    console.log("asynchrounus read:"+data.tostring());
            });
});