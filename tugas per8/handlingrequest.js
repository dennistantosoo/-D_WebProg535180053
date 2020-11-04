const port=3000,
    http=require("http"),
    httpstatus=require("http-status-codes"),
    app=http.createServer();

app.on("request",(req,res)=>{
    res.writenhead(httpstatus.ok,{
        "content-type":"text/html"
    });
    let responsemessage="<h1>this will show on the screen.</h1>";
    res.end(responsemessage);
});
app.listen(port);

console.log('the serveral has started and is listening on port number:?${port}');
