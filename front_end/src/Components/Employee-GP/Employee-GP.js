import React from 'react'
import { useState, useEffect } from 'react'
import { fetchIncomingPackages, fetchOutgoingPackages } from '../../utils/mailUtils';
function EmployeeGP() {
    const [incomingPackage, setIncomingPackage] = useState([]);
    const [outgoingPackage, setOutgoingPackage] = useState([]);
    const postId = 1;

    useEffect(() => {
        fetchIncomingPackages(postId, setIncomingPackage);
        fetchOutgoingPackages(postId, setOutgoingPackage);
    },[postId]);


    return (
        <div className='flex'>
            <div className='flex-1'>
                <h2>Incoming Packages</h2>
                <ul>
                    {incomingPackage.map(mail => (
                        <li key={mail.id}>
                            {mail.code} - From: {mail.fromPoId} - To: {mail.toPoId}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex-1'>
                <h2>Outgoing Packages</h2>
                <ul>
                    {outgoingPackage.map(mail => (
                        <li key={mail.id}>
                            {mail.code} - From: {mail.fromPoId} - To: {mail.toPoId}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EmployeeGP
