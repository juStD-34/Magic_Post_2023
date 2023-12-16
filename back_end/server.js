const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  

const app = express();
const port = 3001; 

app.use(cors()); 
app.use(express.json());

// Kết nối đến SQLite database (đường dẫn đến SQLiteOnline)
const dbPath = 'C:/Users/HP/Desktop/Magic_Post_2023/back_end/magic_post.db';
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Could not connect to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

app.get('/packageInfor', (req, res) => {
  const postId = parseInt(req.query.postId, 10);
  const type = req.query.type;

  let query = '';
  let params = [postId];

  if (type === 'incoming') {
    query = `
      SELECT *
      FROM Mail_status
      WHERE Current_Po_ID = ? AND Status_name = "arriving"
    `;
  } else if (type === 'outgoing') {
    query = `
      SELECT *
      FROM Mail_status
      WHERE Current_Po_ID = ? AND Status_name = "pending"
    `;
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

app.post('/addPackage', (req, res) => {
  const {
    code,
    weight,
    fromPoID,
    toPoID,
    guessPath,
    senderName,
    senderPhone,
    receiverName,
    receiverPhone,
    currentPoId,
    status
  } = req.body;
  // console.error(req.body)
  // console.log(req.body.fromPoID, req.body.toPoID,req.body.guessPath, fromPoID, toPoID);
  const query = 'INSERT INTO Mail (code,weight,From_Po_id,To_Po_id,Guess_path ,senderName ,senderPhone ,receiverName ,receiverPhone ,statusName ,current_po_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

  db.run(query, [code, weight, fromPoID, toPoID, guessPath, senderName, senderPhone, receiverName, receiverPhone, status, currentPoId], (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Package added successfully' });
    }
  })
})

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
