var http = require('http');
var mysql = require('mysql');
var readline = require('readline');
var express = require('express');
var sorting_array = [];

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

var connection = mysql.createConnection({
    host: '35.22.100.222',
    user: 'root',
    password: 'comparison18x',
    database: 'spartahack',
});
function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    //sponse.writeHead(200, { "Context-Type": "Text/plain" });
    //sponse.write("Here is some data");

    //connection.connect();
    connection.query('SELECT * FROM searches', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0].id);
        console.log(results.length);
        /*
        for (int i = 0; i < results.length; i++){
        sorting_array[i] = results[i];
        }*/
        console.log('Hey this works!');
        //response.write('Fuckin' , function(err) { response.end(); });
       
    });
   
    //run(crawler.py, hammer)
    response.end();
}
/*
rl.on('line', function (line) {
    if (line === "right") rl.close();
    rl.prompt();
}).on('close', function () {
    process.exit(0);
});
*//*
function Servercheck() {

}
*/
//console.log('Hello world');
//connection.end();
http.createServer(onRequest).listen(8080);
console.log("Server is now running...");
//setInterval("Processing...", 10000);


