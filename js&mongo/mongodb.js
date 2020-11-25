var mongoclient=requid('mongodb').mongoclient;
var url="mongodb://172.0.0.1:27017/db-untar-cafe";

mongoclient.connect(url,function(err,db){
    if(err){
        throw err;
    }else{
        console.log("connected!");
    }
    db.close();
})