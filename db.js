import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
	user: 'root',
	password: process.env.APP_PASSWORD,
	database: process.env.APP_DATABASE,
})