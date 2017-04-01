const fs = require('fs');

function *readDirFile() {
  yield fs.readdir('/etc/nginx', (err, list) => {
    if (err) throw err;
    list.map((item, idx) => process.stdout.write(`${idx + 1}: ${item}\n`));
  });
}

const it = readDirFile();
it.next();

