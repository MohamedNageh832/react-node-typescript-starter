import { createConnection } from "mysql2";

const db = createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
});

db.connect((err) => {
  if (err) throw Error(JSON.stringify(err));

  console.log(`Connected successfully.`);
});

export default db;
