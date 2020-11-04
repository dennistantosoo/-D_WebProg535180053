const port=3000,
http=requid("https"),
httpstatus= require("http-status-code"),
app=http.createserver();

cosnt getjson=obj=> {
    return JSON.stringify(obj,null,2);
};
app.on("request",(req,res)=>{
    var body=[];

    req.on("data",(bodydata)=>{
        body.push(bodydata);
    });

    req.on("end",()=>{
        body=buffer.concat(body).toString();
        console.log('request body content:$(body)');
    });

    console.log('method:$(getjsonstring(req.method)}');
    console.log('url:${getjsonstring(req.url)}');
    console.log('header:${getjsonstring(req.headers)}');
    res.writehead(httpstatus.ok),{

    "content-type":"text/html"
});

let responsemessage="<h1>this will show on the screen.</h1>";
res.end(responsemessage);
});
app.listen(port);
