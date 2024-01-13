const {inc,dec,getCount} = require('./src/myModule');


console.log(getCount());
inc();
inc();
inc();
console.log(getCount());
dec();
console.log(getCount());