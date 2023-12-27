import axios from "axios"

export const updateSuccessPackage = (myPack) => {
    console.log("ddjdsjd")
    axios.put('http://localhost:3001/updateSuccessPackage', myPack)	
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}