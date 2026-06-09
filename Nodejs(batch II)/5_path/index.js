const path = require('node:path');

const uploads = path.join("./uploads","images");
console.log(uploads)

const absoultePath = path.resolve("./views/index.js");
console.log(absoultePath);

console.log("baseName",path.basename(absoultePath));
console.log("extension: ",path.extname(absoultePath));
console.log("dirName: ",path.dirname(absoultePath));
console.log("parsed path: ",path.parse(absoultePath));