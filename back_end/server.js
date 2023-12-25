const express = require('express');
const mysql = require('mysql');
const cors = require('cors');  

const app = express();
const port = 3001; 

app.use(cors()); 
app.use(express.json());

// Kết nối đến SQLite database (đường dẫn đến SQLiteOnline)
const dbPath = 'C:/Users/HP/Desktop/Magic_Post_2023/back_end/magic_post.db';
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'magic_post',
})

app.post('/register', (req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const phone = req.body.phone;
  const poWorkID = 22;
  db.query("INSERT INTO users (id, email, password, role, phone, poWorkID) VALUES (?, ?, ?, ?, ?, ?)", [id, email, password, role, phone, poWorkID], 
      (err, result) => {
          if(result){
              res.send(result);
          }else{
              res.send({message: "ENTER CORRECT ASKED DETAILS!"})
          }
      }
  )
})

app.post('/registerMP', (req, res) => {
  const OfficeID = req.body.OfficeID;
  const ManagerID = req.body.ManagerID;
  const ManagerEmail = req.body.ManagerEmail;
  const ManagerPassword = req.body.ManagerPassword;
  const ManagerPhone = req.body.ManagerPhone;
  const Type = req.body.Type;
  const role = 2;
  const Address = req.body.Address;
  db.query("INSERT INTO users (ID, email, password, role, phone, poWorkID) VALUES (?, ?, ?, ?, ?, ?)", [ManagerID, ManagerEmail, ManagerPassword, role, ManagerPhone, OfficeID], 
  (err, userResult) => {
      if (userResult) {
          con.query("INSERT INTO postoffice (OfficeID, ManagerID, ManagerPhone, Address, Type) VALUES (?, ?, ?, ?, ?)", [OfficeID, ManagerID, ManagerPhone, Address, Type], 
          (err, officeResult) => {
              if (officeResult) {
                  res.send(officeResult);
              } else {
                  res.send({message: "ENTER CORRECT ASKED DETAILS!"});
              }
          });
      } else {
          res.send({message: "ENTER CORRECT ASKED DETAILS1!"});
      }
  });
  

})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], 
      (err, result) => {
          if(err){
              req.setEncoding({err: err});
          }else{
              if(result.length > 0){
                  res.send(result);
              }else{
                  res.send({message: "WRONG USERNAME OR PASSWORD!"})
              }
          }
      }
  )
})

app.get('/packageInfor', (req, res) => {
  const postId = parseInt(req.query.postId, 10);
  const type = req.query.type;

  let query = '';
  let params = [postId];

  if (type === 'incoming') {
    query = `
      SELECT *
      FROM Package
      WHERE current_po_id = ? AND statusName = "Arriving"
    `;
  } else if (type === 'outgoing') {
    query = `
      SELECT *
      FROM Package
      WHERE current_po_id = ? AND statusName = "Pending"
    `;
  } else {
    console.log('Invalid request type');
    return res.status(400).json({ error: 'Invalid request type' });
  }

  db.query(query, params, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Packages: rows });
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
    senderAddress,
    receiverName,
    receiverPhone,
    receiverAddress,
    currentPoID,
    statusName
  } = req.body;
  console.error(req.body)
  // console.log(req.body.currentPoID, req.body.statusName,req.body.guessPath, fromPoID, toPoID);
  const query = 'INSERT INTO Package (code,weight,From_Po_id,To_Po_id,Guess_path ,senderName ,senderPhone ,senderAddress ,receiverName ,receiverPhone ,receiverAddress ,statusName ,current_po_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';

  db.query(query, [code, weight, fromPoID, toPoID, guessPath, senderName, senderPhone,senderAddress, receiverName, receiverPhone, receiverAddress, statusName, currentPoID], (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Package added successfully' });
    }
  })
})

app.put('/updatePackage', (req, res) => {
  updatedPackage = req.body;
  const sql = `
    UPDATE Package
    SET
      senderName = ?,
      senderPhone = ?,
      receiverName = ?,
      receiverPhone = ?,
      Weight = ?,
      From_Po_id = ?,
      To_Po_id = ?,
      Guess_path = ?,
      current_po_id = ?,
      statusName = ?
    WHERE id = ?
  `;

  const params = [
    updatedPackage.senderName,
    updatedPackage.senderPhone,
    updatedPackage.receiverName,
    updatedPackage.receiverPhone,
    updatedPackage.Weight,
    updatedPackage.From_Po_id,
    updatedPackage.To_Po_id,
    updatedPackage.Guess_path,
    updatedPackage.current_po_id,
    updatedPackage.statusName,
    updatedPackage.id,
  ];
  db.query(sql, params, function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error updating package' });
    } else {
      res.json({ success: true, message: 'Package updated successfully' });
    }
  });
})

app.get('/postInfo', (req, res) => {
  const postId = req.query.postId;
  const query = 'SELECT * FROM PostOffice WHERE id = ?';
  db.query(query, [postId], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Post: rows[0] });
    }
  });
})

app.get ('/packageByID', (req, res) => {
  const packageId = req.query.packageId;
  const query = 'SELECT * FROM Package WHERE id = ?';
  db.query(query, [packageId], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Package: rows[0] });
    }
  });
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
