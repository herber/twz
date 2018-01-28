const fs = require('fs');

module.exports = str => {
  const body = `return \`${str}\``;

  return data => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    return new Function(...keys, body)(...values);
  };
};

module.exports.file = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);

      resolve(module.exports(data));
    });
  });

module.exports.fileSync = path => module.exports(fs.readFileSync(path));
