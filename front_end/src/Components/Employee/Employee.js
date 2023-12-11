import React, { useState, useEffect } from 'react';

function Employee() {
  const [incomingMails, setIncomingMails] = useState([]);
  const [outgoingMails, setOutgoingMails] = useState([]);
  const postId = 1; // Thay thế bằng postId của Post_office cụ thể

  useEffect(() => {
    // Gọi API và lấy dữ liệu incoming mails từ backend
    fetch(`http://localhost:3001/employee?postId=${postId}&type=incoming`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIncomingMails(data.comingMails);
      })
      .catch(error => {
        console.error('Error fetching incoming mails:', error);
      });

    // Gọi API và lấy dữ liệu outgoing mails từ backend
    fetch(`http://localhost:3001/employee?postId=${postId}&type=outgoing`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("data", data);
        setOutgoingMails(data.outgoingMails);
      })
      .catch(error => {
        console.error('Error fetching outgoing mails:', error);
      });
  }, [postId]);

  useEffect(() => {
    console.log('incomingMails', incomingMails);
    console.log('outgoingMails', outgoingMails);
  }, [incomingMails, outgoingMails]);
  return (

    <div className='flex'>
      <div className='flex-1'>
        <h2>Incoming Mails</h2>
        {/* <ul>
          
          {incomingMails.map(mail => (
            <li key={mail.id}>
              {mail.code} - From: {mail.fromPoId} - To: {mail.toPoId}
            </li>
          ))}
        </ul> */}
      </div>
      <div className='flex-1'>
        <h2>Outgoing Mails</h2>
        {/* <ul>
          {outgoingMails.map(mail => (
            <li key={mail.id}>
              {mail.code} - From: {mail.fromPoId} - To: {mail.toPoId}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Employee;
