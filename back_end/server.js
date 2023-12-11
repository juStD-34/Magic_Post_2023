const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  

const app = express();
const port = 3001; 

// Kết nối đến SQLite database (đường dẫn đến SQLiteOnline)
const dbPath = 'C:/Users/HP/Desktop/Magic_Post_2023/back_end/magic_post.db';
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Could not connect to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

app.use(cors()); 
app.use(express.json());

app.get('/employee', (req, res) => {
  const postId = req.query.postId;
  const type = req.query.type;

  let query = '';
  let params = [];

  if (type === 'incoming') {
    query = `
      SELECT m.*
      FROM "Mail" m
      
    `;
    params = [postId, postId];
    console.log("Incoming")
  } else if (type === 'outgoing') {
    query = `
      SELECT m.*
      FROM "Mail" m
      WHERE m."from_Po_id" = ? OR EXISTS (
        SELECT 1
        FROM "Mail_status" ms
        WHERE ms."start_Po_id" = ?
          AND ms."Mail_id" = m."id"
      )
    `;
    params = [postId, postId];
    console.log("outgoing")
  } else {
    console.log('Invalid request type');
    return res.status(400).json({ error: 'Invalid request type' });
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ mails: rows });
    }
  });
});

process.on('exit', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the SQLite database connection.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
