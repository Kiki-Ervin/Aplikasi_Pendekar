import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",       // sesuaikan dengan user MySQL kamu
  password: "",       // isi password MySQL kamu
  database: "pendekar",
});
