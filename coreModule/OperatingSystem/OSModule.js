const { log } = require('console');
const os = require('os');

//to print CPU architecture.
console.log(os.arch());

// to print each logical CPU core
console.log(os.cpus());

//To print Total memory
const totalMem = os.totalmem();
console.log(`${totalMem} byte = ${totalMem/1024/1024/1024}GB`);

//To print Free Memory
const freeMem = os.freemem();
console.log(`${freeMem} byte = ${freeMem/1024/1024/1024}GB`);

// To Print HomeDIR
const home = os.homedir();
console.log(home);

// To Print hostname
const host = os.hostname();
console.log(host);

// To print machine type
const machineType =  os.machine();
console.log(machineType);

// To print NetworkInterfaces
const netDTL = os.networkInterfaces();
console.log(netDTL);

// To print Platform
const platform = os.platform();
console.log(platform);

// To print Type 
console.log(os.type());

console.log(os.userInfo('UTF-8'));
