const fs = require('fs');
const readline = require('readline');

const Utils = {};

Utils.readFile = function (filename) {
  return fs.readFileSync(filename, 'utf8');
}

Utils.readLine = function (filename, onLine, onClose) {
  var rl = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  rl.on('line', onLine);

  rl.on('close', onClose);
}

module.exports = Utils;
