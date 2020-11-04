const  port =3000,
http=require("http"),
httpstatus=require("http-status-code"),
fs=require("fs");

const routemap={
    "/":"view/index.html"
};
http
    .createserver((req,res)=>{
        res.writehead(httpstatus.ok,{
            "content-type":"text/html"
        });
        if(routemap [req.url]){
            fs.readfile(routemap[req.url],(error,data)=>{
                res.write(data);
                res.end();
            });
        }else{
            res.end("<h1>sorry,not found.</h1>");
        
        }
    })
    .listen(port);