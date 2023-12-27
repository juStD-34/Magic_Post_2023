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
  database: 'magicPost',
})

app.get('/packageInfor', (req, res) => {
  const postId = parseInt(req.query.postId, 10);
  const type = req.query.type;
  console.log(postId, "rq", req.query);
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
  // console.error(req.body);
  // console.log(req.body.currentPoID, req.body.statusName,req.body.guessPath, fromPoID, toPoID);
  const query = 'INSERT INTO Package (code,weight,From_Po_id,To_Po_id,Guess_path ,senderName ,senderPhone ,senderAddress ,receiverName ,receiverPhone ,receiverAddress ,statusName ,current_po_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';

  db.query(query, [code, weight, fromPoID, toPoID, guessPath, senderName, senderPhone, senderAddress, receiverName, receiverPhone, receiverAddress, statusName, currentPoID], (err) => {
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

app.get('/packageByID', (req, res) => {
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

app.get('/getPostByType', (req, res) => {
  const type = req.query.type;
  // console.log(type);
  const query = `
    SELECT
      po.id AS postOfficeID,
      po.poName AS postOfficeName,
      po.poAddress AS postOfficeAddress,
      po.managerID AS managerID,
      CONCAT(e.firstName, ' ', e.lastName) AS managerFullName,
      e.phoneNumber as managerPhone
    FROM
      postOffice po
    JOIN
      Employees e ON po.managerID = e.id
    WHERE
      po.poType = ?;
  `;
  db.query(query, [type], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Post: rows });
    }
  });
})

app.post('/packageStatus', (req, res) => {
  const status = req.body;
  console.log(req.body);
  const values = [
    status.packageCode,
    status.currentPoID,
    status.employeeAssignTimeWentID,
    status.timeArrived,
    status.description,
    status.employeeAssignTimeArrivedID ,
    status.timeWent,
  ];
  console.log(values);
  const query = `
  INSERT INTO packagestatus(packageCode, current_po_id, employeeAssignTimeWentID, timeArrived, description, employeeAssignTimeArrivedID, timeWent) 
  VALUES (?, ?, IFNULL(?, NULL), IFNULL(?, NULL), IFNULL(?, NULL), IFNULL(?, NULL), IFNULL(?, NULL));
`;
  db.query(query, values, (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json({ success: true, message: 'Package status added successfully' });
    }
  })
})

app.put('/updateStatus', (req, res) => {
  const status = req.body;
  console.log(req.body);
  const query = `
    UPDATE PackageStatus
    SET employeeAssignTimeWentID = ?,
        timeWent = ?
    WHERE packageCode = ? AND current_po_id = ?;
  `;
  db.query(query, [status.employeeAssignTimeWentID, status.timeWent, status.packageCode, status.currentPoID], (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json({ success: true, message: 'Package status updated successfully' });
    }
  })
})

app.put('/updateSuccessPackage', (req, res)=> {
  const packCode = req.body.code;
  console.log(packCode);
  const query = ` UPDATE package SET statusName = "success" WHERE code = ?;`;
  db.query(query, [packCode], (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json({ success: true, message: 'Package status updated successfully' });
    }
  })
})

app.get('/getDeliPackage', (req, res) => {
  const postId = req.query.postId;
  const packageCode = req.query.packageCode;

  const query = `Select timeArrived from packagestatus where current_po_id = ? and packageCode = ?`;	
  db.query(query, [postId, packageCode], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Time: rows[0] });
    }
  })
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
