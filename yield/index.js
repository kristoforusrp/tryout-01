const fs = require('fs');

function *readDirFile() {
  process.stdout.write(`The ${process.argv[2]} folder contains: \n`) 
  yield fs.readdir(process.argv[2], (err, list) => {
    if (err) throw err;
    list.map((item, idx) => process.stdout.write(`${idx + 1}: ${item}\n`));
  });
}

const it = readDirFile();
it.next();

