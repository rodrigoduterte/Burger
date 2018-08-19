var orm = require('../config/orm');

var burger = {
    all : (cb) => {
        orm.selectAll('burgers',(results)=>{cb(results);});
    },
    create : (col1,col2,val1,val2,cb) => {
        orm.insertOne('burgers',col1,col2,val1,val2,(results)=>{cb(results);});
    },
    modify : (col1,val1,id,cb) => {
        orm.updateOne('burgers',col1,val1,id,(results)=>{cb(results);});
    }
}

module.exports = burger;
