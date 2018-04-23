//Fill in vars here
var path = require('path');
var fs = require('fs');
var http = require('http');
var url = require('url');

//  = /* Missing require statment */

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;

  if (request.method === 'POST') {
    /*========YOUR CODE HERE=========*/
    if (path === '/hifive') {
      response.writeHead(200,{'Content-Type':'image/jpg'})
      response.end(fs.readFileSync(__dirname+'/assets/hifive.jpg'));
      // response.send('hifive there');
    } else if (path === '/lowfive') {
      // response.send('lowfive there');
      response.writeHead(200,{'Content-Type':'image/jpg'})
      response.end(fs.readFileSync(__dirname+'/assets/lowfive.jpg'));
    }
  } else if (request.method === 'GET') {
    if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/html'});
      fs.readFile(__dirname + '/index.html', function(err, data){
        if(err) console.log(err);
        response.end(data);
      });
    }
  } else {
    response.end(404);
  }

}).listen(8080, '127.0.0.1');

console.log('Listening...');
