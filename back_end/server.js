const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dayjs = require('dayjs')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Kết nối đến SQLite database (đường dẫn đến SQLiteOnline)
const dbPath = 'C:/Users/HP/Desktop/Magic_Post_2023/back_end/magicpost.db';
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'magic_post',
})

app.post('/editOffice', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const oldAddress = req.body.oldAddress;
  const oldName = req.body.oldName;
  const sql = `UPDATE postoffice SET poName = ?, poAddress = ? WHERE poName = ? AND poAddress = ?`;
  db.query(sql, [name, address, oldName, oldAddress], (error, results, fields) => {
    if (error) throw error;
    res.send('User updated successfully');
  });
});

app.post('/deleteOffice', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const sql = `DELETE FROM postoffice WHERE poName = ? AND poAddress = ?`;
  db.query(sql, [name, address], (error, results, fields) => {
    if (error) throw error;
    res.send('User updated successfully');
  });
});

app.post('/registerE', (req, res) => {
  const username = req.body.Username;
  const password = req.body.Password;
  const role = req.body.role;
  const phone = req.body.Phone;
  const poWorkID = req.body.poWorkID;
  const firstName = req.body.FName;
  const lastName = req.body.LName;
  db.query("INSERT INTO employees (username, password, role, phone, poWorkID, firstName, lastName) VALUES (?, ?, ?, ?, ?, ?, ?)", [username, password, role, phone, poWorkID, firstName, lastName], 
      (err, result) => {
          if(result){
              res.send(result);
          }else{
              res.send({message: "ENTER CORRECT ASKED DETAILS!"})
          }
      }
  )
})

app.get("/users", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/postOffice", (req, res) => {
  db.query("SELECT * FROM postoffice", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/registerMP', (req, res) => {
  const poName = req.body.poName;
  const managerFName = req.body.managerFName;
  const managerLName = req.body.managerLName;
  const managerUsername = req.body.managerUsername;
  const managerPassword = req.body.managerPassword;
  const managerPhone = req.body.managerPhone;
  const type = req.body.type;
  var role;
  if (type == 'CP') {
    role = 2;
  } else {
    role = 3;
  }
  const Address = req.body.Address;

  db.query("INSERT INTO employees (username, password, phone, role, firstName, lastName) VALUES (?, ?, ?, ?, ?, ?)", [managerUsername, managerPassword, managerPhone, role, managerFName, managerLName], 
  (err, userResult) => {
    if (userResult) {
      db.query("INSERT INTO postoffice (poName, poAddress, poPhoneNumber, poType) VALUES (?, ?, ?, ?)", [poName, Address, managerPhone, type], 
          (err, officeResult) => {
              if (officeResult) {
                db.query("UPDATE employees SET poWorkID = (SELECT id FROM postOffice ORDER BY id DESC LIMIT 1) WHERE id = (SELECT id FROM employees ORDER BY id DESC LIMIT 1)", (err, updateEmpResult) => {
                  if (err) {
                    return db.rollback(() => {
                      res.send({ message: "EMPLOYEES UPDATE FAILED!" });
                    });
                  } else {
                    db.query("UPDATE postoffice SET managerID = (SELECT id FROM employees ORDER BY id DESC LIMIT 1) WHERE id = (SELECT id FROM postoffice ORDER BY id DESC LIMIT 1)", (err, updateOfficeResult) => {
                      if (err) {
                        return db.rollback(() => {
                          res.send({ message: "POST OFFICE UPDATE FAILED!" });
                        });
                      } else {
                        db.commit((err) => {
                          if (err) {
                            return db.rollback(() => {
                              res.send({ message: "DATABASE COMMIT FAILED!" });
                            });
                          }
                          res.send({ message: "SUCCESSFULLY" });
                        });
                      }
                    });
                  }
                });
              } else {
                  res.send({message: "ENTER CORRECT ASKED DETAILS!"});
              }
          });
      } else {
          res.send({message: "ACCOUNT ALREADY EXISTS"});
      }
  });
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("SELECT * FROM employees WHERE username = ? AND password = ?", [username, password], 
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
  // console.error(req.body);
  // console.log(req.body.currentPoID, req.body.statusName,req.body.guessPath, fromPoID, toPoID);
  const query = 'INSERT INTO Package (code,weight,From_Po_id,To_po_id,Guess_path ,senderName ,senderPhone ,senderAddress ,receiverName ,receiverPhone ,receiverAddress ,statusName ,current_po_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';

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
      To_po_id = ?,
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
    updatedPackage.To_po_id,
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
      po.id AS id,
      po.poName AS poName,
      po.poAddress AS poAddress,
      po.managerID AS managerID,
      CONCAT(e.firstName, ' ', e.lastName) AS managerFullName,
      e.phone as phone
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
  const values = [
    status.packageCode,
    status.currentPoID,
    status.employeeAssignTimeWentID,
    status.timeArrived,
    status.description,
    status.employeeAssignTimeArrivedID,
    status.timeWent,
  ];
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

app.put('/updateSuccessPackage', (req, res) => {
  const packCode = req.body.code;
  const query = ` UPDATE package SET statusName = "Success" WHERE code = ?;`;
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

app.get('/getGuesspathByCode', (req, res) => {
  const code = req.query.code;
  // const guessPath = req.query.guessPath;
  console.log("code", code);
  const query = `SELECT * FROM Package WHERE code = ?`;
  db.query(query, [code], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Guesspath: rows[0] });
    }
  })
})
app.put('/updateFailedPackage', (req, res) => {
  const Guess_path = req.body;
  const query = `UPDATE package SET Guess_path = ? WHERE code = ?`;
  db.query(query, [Guess_path, req.body.code], (err) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json({ success: true, message: 'Package guess path updated successfully' });
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

app.get('/getPackageByTime', (req, res) => {
  const postId = req.query.postId;
  const startDate = req.query.startDate;
  const endDate = dayjs(req.query.endDate).add(1, 'day').format('YYYY-MM-DD');
  // console.log(postId, startDate, endDate);
  const type = req.query.type;
  let query = '';
  if (type == "Arrived") {
    query = `
    SELECT * FROM packagestatus
    WHERE current_po_id = ? AND timeArrived > ? AND timeArrived < ?;
  `;
  } else {
    query = `
    SELECT * FROM packagestatus
    WHERE current_po_id = ? AND timeWent > ? AND timeWent < ?;
    `;
  }
  db.query(query, [postId, startDate, endDate], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // console.log(rows);
      res.json({ Packages: rows });
    }
  })
})

app.get('/getPackageStatus', (req, res) => {
  const postId = req.query.postId;
  const packageId = req.query.code;
  // console.log(req.query);
  const query = 'SELECT * FROM packagestatus WHERE current_po_id = ? AND packageCode = ?';
  db.query(query, [postId, packageId], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ PackageStatus: rows[0] });
    }
  })
})

app.get('/getSuccessPackage', (req, res) => {
  const postId = req.query.postId.postId;
  // console.log(postId);
  const query = 'SELECT * FROM package WHERE current_po_id = ? AND statusName = "Success"';
  db.query(query, [postId], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Packages: rows });
    }
  })
})

app.get('/getFailedPackage', (req, res) => {
  const query = "Select * from packageStatus where description = 'Đã bị hủy'";
  db.query(query, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Packages: rows });
    }
  })
})

app.get('/getAllPackage', (req, res) => {
  const startDate = req.query.startDate;
  const endDate = dayjs(req.query.endDate).add(1, 'day').format('YYYY-MM-DD');
  const type = req.query.type;
  const query = `
    SELECT ps.packageCode, p.From_Po_id, p.To_po_id, ps.timeArrived,ps.timeWent, p.statusName 
    FROM packagestatus ps Join package p
    ON ps.packageCode = p.code AND ps.current_po_id = p.From_po_Id
    WHERE ps.timeArrived > ? AND ps.timeArrived < ?;
    `;
  db.query(query, [startDate, endDate], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ Packages: rows });
    }
  })
})

app.get('/getPostOffice', (req, res) => {
  const query = 'SELECT * FROM postOffice';
  db.query(query, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ PostOffice: rows });
    }
  })
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
