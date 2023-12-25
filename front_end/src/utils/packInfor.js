import axios from "axios"

export const packageInfor =async (id)  => {
    console.log("id",id);
    try {
        const response = await axios.get('http://localhost:3001/packageByID', {
            params: {
                packageId: id
            }
        })
        // console.log("res",response.data);
        return response.data.Package;
    } catch (error) {
        console.error(error)
        return null
    }
}