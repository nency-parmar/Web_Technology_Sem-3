// const pt = require("path");

// let ext = pt.extname("c://hello.js");
// console.log("ExtensionName Method : "+ext);

// let x = pt.basename("c:/hello/world");
// console.log("BaseName Method : "+x);

// let y = pt.dirname("D:/hello/world/index.js");
// console.log("Directory Method : "+y);

// let z = pt.join("D:/hello/world/index.js","xyz.txt")
// console.log("JoinPath Method : "+z);

// let n = pt.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// console.log(n);


// File System...

// const fs = require('fs');

// let data = fs.readFile('demo.txt', (err, data) => {
//     if (err) { 
            // throw err 
        // }
//     else {
//         console.log(data.toString());
//     }
// });


const fs = require('fs');

let data1 = fs.readFileSync('demo.txt','utf-8');
console.log(data1);

// let data2 = fs.writeFileSync('demo.txt','Hello...');
// console.log("Written Successfully."+data2);

fs.appendFileSync('demo.txt','It is JavaScript Programm...');