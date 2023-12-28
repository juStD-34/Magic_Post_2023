import axios from "axios";

export const getPackageInfor = async(postId, startDate, endDate, type) => {
    try {
        // console.log("getPackageI",postId, startDate, endDate, type);
        const response = await axios.get(`http://localhost:3001/getPackageByTime`, { params: { postId, startDate, endDate, type } });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}