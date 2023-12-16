import React, { useState, useEffect } from 'react';
import { generateCode } from '../../utils/generatedCode';
import { addPackage, packageNormalization } from '../../utils/addPackage';

const Employee = ({ userID, postOfficeID }) => {
  const [sender, setSender] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [packageWeight, setPackageWeight] = useState('');
  // let orderNumber = 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    // orderNumber += 1;
    const packageData = {
      code : generateCode(postOfficeID),
      sender,
      senderPhone,
      receiver,
      receiverPhone,
      senderAddress,
      receiverAddress,
      packageWeight
    };
    addPackage(packageData);
  }
  return (
    <div>
      <h2>Package Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sender:
          <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} />
        </label>
        <br />
        <label>
          Sender Phone:
          <input type="text" value={senderPhone} onChange={(e) => setSenderPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Receiver:
          <input type="text" value={receiver} onChange={(e) => {setReceiver(e.target.value); console.log(e.target.value)}} />
        </label>
        <br />
        <label>
          Receiver Phone:
          <input type="text" value={receiverPhone} onChange={(e) => setReceiverPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Sender Address:
          <input type="text" value={senderAddress} onChange={(e) => setSenderAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Receiver Address:
          <input type="text" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Package Weight:
          <input type="text" value={packageWeight} onChange={(e) => setPackageWeight(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Employee;
