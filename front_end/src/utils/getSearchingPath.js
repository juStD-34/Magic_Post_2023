import axios from "axios"
import { PostInfo } from "./postInfor";
import { dateNormalize, timeNormalize } from "./deliPackInfor";

export const currentStatusPackage = async (packCode) => {
    try {
        const values = await Promise.all([getPackInformation(packCode)]);
        // console.log(values[0]);

        const packageInfor = values[0];
        const guessPatharray = packageInfor.Guess_path.split("-");
        const current_po_id = packageInfor.current_po_id;

        const inFo = [];

        const childPromises = guessPatharray.map(async (postId, index) => {
            try {
                const [packStatus, postName] = await Promise.all([
                    getPackageStatus(packCode, postId),
                    PostInfo(postId)
                ]);

                // console.log("postName", postName);
                // console.log("pack Status", packStatus);
                
                // Xử lý khi packStatus là null
                if (packStatus === null) {
                    inFo.push({ date: null, locate: postName, status: "" });
                } else {
                    const packageStatus = (packStatus.PackageStatus)[0];
                    console.log("packageStatus", packStatus.PackageStatus);
                    // Xử lý khi timeWent là null
                    if (packStatus.PackageStatus.timeWent === null) {
                        inFo.push({ date:dateNormalize(packStatus.PackageStatus.timeArrived), locate: postName, status: "Đang xử lý" });
                    } else {
                        inFo.push({ date: dateNormalize(packStatus.PackageStatus.timeWent), locate: postName, status: "Đang chuyển tới bưu cục tiếp theo" });
                    }
                }

            } catch (error) {
                console.error(error);
            }
        });

        await Promise.all(childPromises);
        console.log(inFo);
        return inFo;

    } catch (error) {
        console.error(error);
        // Nếu có lỗi, trả về một giá trị mặc định hoặc xử lý lỗi theo ý bạn
        return null;
    }
};


const getPackInformation = async (packCode) => {
    try {
        const response = await axios.get('http://localhost:3001/getGuesspathByCode', { params: { code: packCode } })
        // console.log("res", response.data);
        return response.data.Guesspath
    }
    catch (error) {
        console.error(error);
    }
}

const getPackageStatus = async (packCode, postId) => {
    try {
        const response = await axios.get('http://localhost:3001/getPackageStatus', { params: { code: packCode, postId: postId } })
        console.log(packCode, postId);
        console.log("res", response.data);
        if (Object.keys(response.data).length === 0) {
            console.log("postId",postId);
            return null;
        } else {
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
    }
}