const mongoose = require('mongoose');
const config = require('./config');

const DBURL = config.db.url;

mongoose.connect(DBURL).then(()=>{
    console.log('Mongodb atlas is connented');
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})