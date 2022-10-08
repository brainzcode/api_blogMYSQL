import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
	user: 'root',
	password: process.env.REACT_APP_PASSWORD,
	database: process.env.REACT_APP_DATABASE,
})