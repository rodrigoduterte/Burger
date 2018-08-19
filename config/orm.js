var connection = require('./connection');

var orm = {
    selectAll : (tbl,cb) => {
        var qs = "select * from ??;";
        connection.query(qs,[tbl],(err,results)=>{
            cb(results);
        });
    },
    insertOne : (tbl,col1,col2,val1,val2,cb) => {
        var qs = "insert into "+tbl+" ("+col1+","+col2+") values ('"+val1+"',"+val2+");";
        connection.query(qs,(err,results)=>{
            if (err) console.log(err);
            console.log(results.insertId);
            cb(results.insertId);
        });
    },
    updateOne : (tbl,col1,val1,id,cb) => {
        var qs = "update "+ tbl +" set "+col1+" = "+val1+" where id = "+id;
        connection.query(qs,(err,results)=>{
            if (err) console.log(err);
            cb(results);
        });
    }
}

module.exports = orm;