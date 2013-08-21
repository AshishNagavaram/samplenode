var buf = new Buffer('ashishn');

var json = JSON.stringify(buf);

console.log(json);

var copy = new Buffer(JSON.parse(json));

console.log(copy);
