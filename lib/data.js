var faker = require('faker');

var data = {data: []};

for (var i = 0; i < 5; i++) {
    var item = {
        author: faker.name.findName(),
        content: faker.hacker.phrase()
    };
    data.data.push(item);
}

module.exports = data;