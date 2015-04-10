var express = require('express');
var faker = require('faker');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use('/update', express.static(__dirname + '/tool'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

});

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/update', function(req, res) {
    res.sendfile('/update/form.html');
});

app.post('/update', function(req, res) {
    var data = {data: []};

    for (var i = 0; i < 5; i++) {
        var item = {
            author: faker.name.findName(),
            content: faker.hacker.phrase()
        };
        data.data.push(item);
    }
    fs.writeFile('./data/data.json', JSON.stringify(data));
    res.redirect('/update');
});

// fake API to get data
app.get('/data', function(req, res) {
    var data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    res.json(data);
});
