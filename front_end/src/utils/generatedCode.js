// export 
import { v4 as uuidv4 } from 'uuid';
export const generateCode = (postID) =>{
    const shortUuid = uuidv4().split('-')[0]; // Lấy 8 ký tự đầu tiên
    return `${postID}${shortUuid}`;
}