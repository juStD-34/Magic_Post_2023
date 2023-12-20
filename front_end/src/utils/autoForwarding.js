import axios from "axios";
import { useEffect, useState } from "react";
export const updatePackage = (myPack, type) => {
    let {
        Code,
        From_Po_id,
        Guess_path,
        To_Po_id,
        Weight,
        current_po_id,
        id,
        receiverName,
        receiverPhone,
        senderName,
        senderPhone,
        statusName,
    } = myPack

    let guessPatharray = Guess_path.split("-");
    let position = guessPatharray.indexOf(current_po_id.toString());
    // console.log(position, guessPatharray[position + 1]);
    let newPack = {
        id,
        Code,
        From_Po_id,
        To_Po_id,
        Weight,
        statusName: type === "outGoing" ? "Arriving" : "Pending",
        receiverName,
        receiverPhone,
        senderName,
        senderPhone,
        Guess_path,
        current_po_id: type === "outGoing" ? parseInt(guessPatharray[position + 1]) : parseInt(guessPatharray[position]),
    }
    console.log(newPack);
    updatePackageOnServer(newPack);
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
