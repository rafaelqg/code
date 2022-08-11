const express = require('express');
const bodyParser = require('body-parser'); //for post submits
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // POST: create application/x-www-form-urlencoded parser
const app = express();
app.listen(5333);

app.get("/", function(request, response){
    response.send("Your node.js backend is working!!");
});

app.get("/node_backend", function(request, response){
    let f1 = request.query.f1;
    let f2 = request.query.f2;
    let f3 = request.query.f3;
    response.status(200);
    response.send({method:"GET", f1,f2,f3});
  });

app.post("/node_backend",urlencodedParser, function (request, response) {
    let f1 = request.body.f1;
    let f2 = request.body.f2;
    let f3 = request.body.f3;
    response.status(200);
    response.send({method:"POST",f1,f2,f3});
});
