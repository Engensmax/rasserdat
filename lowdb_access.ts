import * as low from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

const db_path:string = 'account_balance.json';
const adapter = new FileSync(db_path)
const db = new low(adapter)

db.defaults({ balance: {'Max': 0, 'Carine': 0}, logs: []}).write()

export function deposit(name: string, amount: number, top_type: string, type: string, comment: string) {
  db.get('logs').push({name:name,amount:amount, top_type:top_type, type: type, comment: comment, date:new Date()}).write();
  db.get('balance').set(name,db.get('balance').get(name)+amount).write();
}

export function current_balance(){
  var m_to_c_balance:number = db.get('balance').get("Max")-db.get('balance').get("Carine")
  if (m_to_c_balance > 0) {
    return `Carine schuldet Max ${Math.round(m_to_c_balance/2)} Fr`
  } else {
    return `Max schuldet Carine ${Math.round(-m_to_c_balance/2)} Fr`
  }
}

export function get_logs(){
  return db.get('logs')
}
