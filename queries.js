const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: '12345',
  port: 5432,
})

module.exports.enterData =async (name,email,phone,address)=>{
  const client= await pool.connect();
  const result=await pool.query('INSERT INTO corporatedir (name,email,phone,address) VALUES ($1,$2,$3,$4)',[name,email,phone,address]);
  console.log(result);
  return 1;
}
