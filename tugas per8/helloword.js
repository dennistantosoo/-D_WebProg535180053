var http=require("http");

http.createServer(function(request,response){
    // send the http header
    // http status :200:ok
    // content type:text/plain
    response.writeHead(200,{'content-type':'text/plain'});

    //send the response body as"hello world"
    response.end('hello world server/n');
})
console.log('server running at http://127.0.0.1:8081/');