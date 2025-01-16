require('dotenv').config();

const dev = {
    app:{
       port : process.env.PORT || 2000
    },
    db:{
        url : process.env.DB_URL || "mongodb://localhost:27017/foodApp"
    },
    SMTP: {
        userName: process.env.SMTP_USERNAME || '',
        password: process.env.SMTP_PASSWORD || ''
    }

};

module.exports = dev; 