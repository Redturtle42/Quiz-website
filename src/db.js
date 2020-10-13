let service;
if (process.env.DB == 'mongo') {
    service = require('../service/mongoService');
    console.log('Use MongoDb...')
} else if (process.env.DB == 'mysql'){
    service = require('../service/mysqlService');
    console.log('Use Mysql...')
}

module.exports =service;
