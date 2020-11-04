const port=3000,
http=require("http-status-codes"),

httpstatus=require("http-status-code"),

app=http.createserver((request,response)=>{
    console.log("received an incoming request!");
    response.writehead(httpstatus.OK,{"content-type":"text/html"});
    let responsemessage="<h1>hello,universe!</h1>";
    response.write(responsemessage);
    response.end();
    console.log('sent a respon:${responsemessage}');
});
app.listen(port);

console.log('the server has started and is listening on port number:${port}');