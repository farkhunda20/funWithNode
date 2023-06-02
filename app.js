// const number = 5;
// if (number > 50) {
//   console.log("large number");
// } else {
//   console.log("small number");
// }

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log("this runs every 1 second");
// }, 1000);

// const Harry = "Harry";
// const Tom = "Tom";
// const Jim = "Jim";

// const allNames = require("./names");
// const introduceYourself = require("./introductionFunction");

// introduceYourself(allNames.Harry);
// introduceYourself(allNames.Jim);
// introduceYourself(allNames.Tom);

// built in module

// const os = require("os");
// const path = require("path");

// info about current user
// console.log(os.userInfo());
// console.log("uptime is : " + os.uptime());

//practica usecase of os module
// const myOSInfo = {
//   type: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
//   arch: os.arch(),
// };
// console.log(myOSInfo);

// console.log(path.sep);

// const filepath = path.join("/content", "sub_content", "test.txt");
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absPath = path.resolve(__dirname, "content", "sub_content", "test.txt");
// console.log(absPath);

// FS module
// reading data from a particular file
// writing data into a particular file

// const fs = require("fs");
// fs.readFileSync();

// modern way to access readfilesync
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./content/firstfile.txt", "utf-8");
// console.log(first);

// const second = readFileSync("./content/sub_content/text.txt", "utf-8");
// console.log(second);

// writeFileSync(
//   "./content/sub_content/newFile.txt",
//   "this is written using writefilesync"
// );
// writeFileSync("./content/sub_content/newFile1.txt", "this is a test file");

// writeFileSync(
//   "./content/sub_content/combinedDataFile.txt",
//   `this file ${first} is combined with ${second} file`
// );

// http module used for what request has been made and waht response has been sent
const http = require("http");

// to set up a web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h1>welcome to our website!</h1>
  <p>this is an amazing website</p>`);
    res.end();
  }
  if (req.url === "/features") {
    res.write(`<ul>
    <li>feature 1</li>
    <li>feature 2</li>
    <li>feature 3</li>
    </ul>`);
    res.end();
  }
  if (req.url === "/pricing") {
    res.write(`<h1>the price for this is $10000</h1>`);
    res.end();
  }

  // res.end(`<h1>404: page not found</h1>`);
});

server.listen(4000);
// npm is a collection of many dependencies or many modules which are pre-written, some functionalities are already created
