import axios from "axios"

export const updateSuccessPackage = (packCode) => {
    console.log(packCode);
    axios.put('http://localhost:3001/updateSuccessPackage',{ code: packCode })	
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}