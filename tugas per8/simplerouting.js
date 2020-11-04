const routeresponsemap={
    "/info":"<h1>info page</h1>",
    "/contact":"<h1>contact us </h1>",
    "/about":  "<h1>learn more about us </h1>",
    "/hello":  "<h1>say hello by emailing us here.</h1>",
    "/error":<h1>sorry the page you are looking for is not here</h1>
};

const port = 3000,
http = require("http"),
httpstatus = require("htt-status-code"),
app = http.createserver((req,res)=>{
    res.writehead(200,{
    "content-type":"text/html"
    });
    if(routeresponsemap[req.url]){
        res.end(routeresponsemap[req.url]);
    }else{
        res.end("<h1>welcome</h1>");
    }
    
});

app.listen(port);
console.log('the server has started and is listening on port number:?$(port)');