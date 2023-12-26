import axios from "axios";
import { packageInfor } from "./packInfor";

export const autoForwarding = (packageId, isTrade, change, setChange) => {
    let myPack;
    const promise = packageInfor(packageId);
    Promise.all([promise])
        .then(res => {
            myPack = res[0];
            updatePackage(myPack, isTrade, change, setChange)
        })
        .catch(err => {
            console.log(err);
        })
}
export const updatePackage = (myPack, type, change, setChange) => {
    console.log("myPack", myPack);
    if (myPack) {
        let {
            code,
            From_Po_id,
            Guess_path,
            To_Po_id,
            weight,
            current_po_id,
            id,
            receiverName,
            receiverPhone,
            senderName,
            senderPhone,
            statusName,
        } = myPack;
        let guessPatharray = Guess_path.split("-");
        let position = guessPatharray.indexOf(current_po_id.toString());
        let newPack = {
            id,
            code,
            From_Po_id,
            To_Po_id,
            weight,
            statusName: type === false ? "Arriving" : "Pending",
            receiverName,
            receiverPhone,
            senderName,
            senderPhone,
            Guess_path,
            current_po_id: type === false ? parseInt(guessPatharray[position + 1]) : parseInt(guessPatharray[position]),
        }
        updatePackageOnServer(newPack);
        setChange(!change);
    } else {
        console.log('myPack is undefined or null');
    }
}


const updatePackageOnServer = (newPack) => {
    axios.put('http://localhost:3001/updatePackage', newPack)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
