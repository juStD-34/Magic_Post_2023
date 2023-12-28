import axios from "axios";
import { addPackageStatus } from "./addPackage";
export const updateFailPackage = (packCode, userId, change, setChange) => {
    console.log(userId, packCode);
    const promise = getGuesspath(packCode);
    Promise.all([promise])
        .then(Guess_path => {
            const reversedGuessPath = Guess_path[0].Guess_path.split('-').reverse().join('-');
            const currentPoID = Guess_path[0].current_po_id;
            axios.put('http://localhost:3001/updateFailedPackage', { code: packCode, Guess_path: reversedGuessPath })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })

            const status = {
                packageCode: packCode,
                currentPoID: currentPoID,
                employeeAssignTimeWentID: null,
                timeArrived: new Date(),
                description: "Đã bị hủy",
                employeeAssignTimeArrivedID: userId,
                timeWent: null,
            }
            addPackageStatus(status);

            setChange(!change);
        })
        .catch(err => {
            console.log(err);
        })
}

export const getGuesspath = async (packCode) => {
    try {
        const response = await axios.get('http://localhost:3001/getGuesspathByCode', {
            params: {
                code: packCode
            }
        });
        return response.data.Guesspath;
    } catch (error) {
        console.error(error);
        return null;
    }
}