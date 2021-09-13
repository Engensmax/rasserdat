var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var db_path = 'account_balance.json'
var adapter = new FileSync(db_path);
var db = new low(adapter);

logs = db.get('logs').value();
max_balance=0;
carine_balance=0;
for(let i=0; i<logs.length;i++) {
    if (logs[i].name == "Max") {
        max_balance += logs[i].amount;
    }
    if (logs[i].name == "Carine") {
        carine_balance += logs[i].amount;
    }
    
}
console.log("Max:")
console.log(max_balance)
console.log("Carine:")
console.log(carine_balance)
