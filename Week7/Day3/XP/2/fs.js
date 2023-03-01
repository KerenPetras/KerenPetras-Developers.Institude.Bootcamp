const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//add
fs.appendFile('data.txt', '\nBuy orange juice', (err) => {
  if (err) throw err;
  console.log('Text Appended to File!');
});

//delete
fs.unlink('data.txt', (err) => {
  if (err) throw err;
  console.log('File Deleted!');
});
