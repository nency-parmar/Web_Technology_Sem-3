const cp = require('child_process');

cp.exec("ls", (err,stdout,stdin)=>{
    console.log(stdout);
});

cp.exec("Start Safari");
cp.exec("ls",(err,stdout,stdin)=>{
    console.log(stdout);
})