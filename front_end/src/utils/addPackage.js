import { getPostIDFromLocation } from "./path"
import { generatePath } from "./path"
import axios from "axios"
export const packageNormalization = (packages) => {
    const fromPoID = parseInt(getPostIDFromLocation(packages.senderAddress));
    const toPoID = parseInt(getPostIDFromLocation(packages.receiverAddress));
    const guessPath = generatePath(fromPoID, toPoID);

    return {
        code: packages.code,
        weight: packages.packageWeight,
        fromPoID,
        toPoID,
        guessPath,
        senderName: packages.sender,
        senderPhone: packages.senderPhone,
        receiverName: packages.receiver,
        receiverPhone: packages.receiverPhone,
        currentPoID: fromPoID,
        statusName: "Pending"
    };
}


export const addPackage = (packages) => {
    const packageData = packageNormalization(packages);
    console.log(packageData);
    axios.post('http://localhost:3001/addPackage', packageData)
        .then(res => {
            console.log(res.data);	
        })
        .catch (err => {
            console.log(err);
        })
}