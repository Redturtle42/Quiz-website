let service;
if (process.env.DB == 'mongo') {
    service = require('../service/mongoService');
    console.log('mongo')
} else if (process.env.DB == 'mysql'){
    service = require('../service/mysqlService');
    console.log('mysql')
}

module.exports =service;