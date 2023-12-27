import axios from "axios";

export const getPackageInfor = async(postId, startDate, endDate, type) => {
    try {
        const response = await axios.get(`http://localhost:3001/getPackageByTime`, { params: { postId, startDate, endDate, type } });
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}