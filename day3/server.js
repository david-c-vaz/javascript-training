var http = require("http");
var url = require("url");

function startServer(route){
  http.createServer(function(request,response){
    var pathName=url.parse(request.url).pathname;
    route(pathName);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("This pathName for this request is "+pathName);
   response.end();
  }).listen(8888);
}

exports.start=startServer

