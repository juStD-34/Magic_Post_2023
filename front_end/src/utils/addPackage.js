import { getPostIDFromLocation } from "./path"
import { generatePath } from "./path"
import axios from "axios"
export const packageNormalization = (packages) => {
    const fromPoID = parseInt(getPostIDFromLocation(packages.senderAddress));
    const toPoID = parseInt(getPostIDFromLocation(packages.receiverAddress));
    const guessPath = generatePath(fromPoID, toPoID);

    return {
        code: packages.code,
        weight: packages.weight,
        fromPoID,
        toPoID,
        guessPath,
        senderName: packages.sender,
        senderPhone: packages.senderPhone,
        senderAddress: packages.senderAddress,
        receiverName: packages.receiver,
        receiverPhone: packages.receiverPhone,
        receiverAddress: packages.receiverAddress,
        currentPoID: fromPoID,
        statusName: "Pending"
    };
}


export const addPackage = (packages, userId) => {
    console.log("user", userId)
    const packageData = packageNormalization(packages);
    const packStatus = {
        packageCode : packageData.code,
        currentPoID : packageData.fromPoID,
        employeeAssignTimeWentID : null,
        timeArrived : new Date(),
        description : null,
        employeeAssignTimeArrivedID: userId,
        timeWent: null
    }
    addPackageStatus(packStatus);
    axios.post('http://localhost:3001/addPackage', packageData)
        .then(res => {
            console.log(res.data);	
        })
        .catch (err => {
            console.log(err);
        })
}

export const addPackageStatus = (packStatus) =>{
    axios.post('http://localhost:3001/packageStatus', packStatus)
        .then(res => {
            console.log(res.data);
        })
        .catch (err => {
            console.log(err);
        })
}