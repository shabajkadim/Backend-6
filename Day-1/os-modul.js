const os =require("os")

console.log(os.cpus());
console.log("plateform :-",os.platform());
console.log("release :-",os.release());
console.log("hostname :-",os.hostname());
console.log("totalMemory",os.totalmem()/ 1024/ 1024,"MB");
console.log("FreeMemory",os.freemem/ 1024/ 1024,"MB");
console.log("networkInterfeces",os.networkInterfaces());
console.log("os-constant",os.constants);