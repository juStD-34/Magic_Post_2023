import axios from "axios";

export const deliPackInfor = async (allPacks) => {
    console.log(allPacks);
    const extractedInfoArray = await Promise.all(allPacks.map(async (pack) => {
        
        const packageCode = pack.code;
        const postId = pack.current_po_id;
        try {
            const response = await getDeliPackage(postId, packageCode);
            const timeAdd = response.timeArrived;
            const date = dateNormalize(timeAdd);
            // console.log("date", date);

            // Trả về một đối tượng mới chỉ chứa thông tin packageCode và currentPostId
            return { packageCode, date };
        } catch (error) {
            console.log("error", error);
            return null;
        }
    }));

    // console.log(extractedInfoArray);
    return extractedInfoArray;
}


const getDeliPackage = async (postId, packageCode) => {
    try {
        const response = await axios.get('http://localhost:3001/getDeliPackage', { params: { postId: postId, packageCode: packageCode } });
        // console.log(response.data);
        return response.data.Time;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const dateNormalize = (isoDate) => {
    const originalDate = new Date(isoDate);

    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
    const day = originalDate.getDate();
    // const hours = originalDate.getHours();
    // const minutes = originalDate.getMinutes();
    // const seconds = originalDate.getSeconds();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export const timeNormalize = (isoDate) => {
    const originalDate = new Date(isoDate);

    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
    const day = originalDate.getDate();
    const hours = originalDate.getHours();
    const minutes = originalDate.getMinutes();
    const seconds = originalDate.getSeconds();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}