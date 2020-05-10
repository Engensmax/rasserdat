"use strict";
exports.__esModule = true;
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var db_path = 'account_balance.json';
var adapter = new FileSync(db_path);
var db = new low(adapter);
db.defaults({ balance: { 'Max': 0, 'Carine': 0 }, logs: [] }).write();
function deposit(name, amount, top_type, type, comment) {
    db.get('logs').push({ name: name, amount: amount, top_type: top_type, type: type, comment: comment, date: new Date() }).write();
    db.get('balance').set(name, db.get('balance').get(name) + amount).write();
}
exports.deposit = deposit;
function current_balance() {
    var m_to_c_balance = db.get('balance').get("Max") - db.get('balance').get("Carine");
    if (m_to_c_balance > 0) {
        return "Carine schuldet Max " + Math.round(m_to_c_balance / 2) + " Fr";
    }
    else {
        return "Max schuldet Carine " + Math.round(-m_to_c_balance / 2) + " Fr";
    }
}
exports.current_balance = current_balance;
function get_logs() {
    return db.get('logs');
}
exports.get_logs = get_logs;
//# sourceMappingURL=lowdb_access.js.map
