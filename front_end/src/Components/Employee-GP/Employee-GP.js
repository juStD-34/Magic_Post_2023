import React from 'react'
import { useState, useEffect } from 'react'
import { fetchIncomingPackages, fetchOutgoingPackages } from '../../utils/mailUtils';
// import { updateOutgoingPackage } from '../../utils/updatePackage';
import { updatePackage } from '../../utils/autoForwarding';
import { takeReceivingPostID, PostInfo, takeSendingPostID } from '../../utils/postInfor';


function EmployeeGP() {
    const [incomingPackage, setIncomingPackage] = useState([]);
    const [outgoingPackage, setOutgoingPackage] = useState([]);
    const [receivingPostName, setReceivingPostName] = useState([]);
    const [sendingPostName, setSendingPostName] = useState([]);
    const postId = 1;


    useEffect(() => {
        fetchIncomingPackages(postId, setIncomingPackage);
        fetchOutgoingPackages(postId, setOutgoingPackage);
    }, [postId]);
    console.log(outgoingPackage);
    useEffect(() => {
        if (outgoingPackage.length > 0) {
            // Map the array of promises returned by PostInfo
            const promises = outgoingPackage.map(pack => PostInfo(takeReceivingPostID(pack)));
            
            // Use Promise.all to wait for all promises to resolve
            Promise.all(promises)
                .then(postNames => {
                    // postNames is an array of resolved post names
                    setReceivingPostName(postNames);
                })
                .catch(error => {
                    console.error('Error fetching post names:', error);
                });
        }
    }, [outgoingPackage]);

    useEffect(() => {
        if(incomingPackage.length > 0){
            const promises = incomingPackage.map(pack => PostInfo(takeSendingPostID(pack)));
            Promise.all(promises)
                .then(postNames => {
                    setSendingPostName(postNames);
                })
                .catch(error => {
                    console.error('Error fetching post names:', error);
                });
        }
    }, [incomingPackage]);

    return (
        <div className='flex'>
            <div className='flex-1'>
                <h2>Incoming Packages</h2>
                {incomingPackage && incomingPackage.length > 0 ? (
                    <ul>
                        {incomingPackage.map((pack, index) => (
                            <li key={pack.id}>
                                {pack.code} - From: {
                                    sendingPostName[index]
                                }
                                <p> To: {pack.toPoId}</p>
                                <button onClick={() => updatePackage(pack, "inComing")}> Click here</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No incoming packages</p>
                )}
            </div>
            <div className='flex-1'>
                <h2>Outgoing Packages</h2>
                {outgoingPackage && outgoingPackage.length > 0 ? (
                    <ul>
                        {outgoingPackage.map((pack, index) => (
                            <li key={pack.id}>
                                {pack.code} - From: {}
                                <p> To: {receivingPostName[index]}</p>
                                <button onClick={() => updatePackage(pack, "outGoing")}> Click here</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No outgoing packages</p>
                )}
            </div>
        </div>
    )
}

export default EmployeeGP
