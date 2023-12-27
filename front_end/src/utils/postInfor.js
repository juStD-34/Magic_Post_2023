import axios from "axios";



export const PostInfo = async (postID) => {
    try {
        const response = await axios.get('http://localhost:3001/postInfo', {
            params: {
                postId: postID
            }
        });
        return response.data.Post.poName;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const takeSendingPostID = (myPack) => {
    let guessPatharray = myPack.Guess_path.split("-");
    let current_po_id = myPack.current_po_id;
    if (guessPatharray.indexOf(current_po_id.toString()) === 0) {
        return -1;
    }
    return parseInt(guessPatharray[guessPatharray.indexOf(current_po_id.toString()) - 1]);
}

export const takeReceivingPostID = (myPack) => {
    let guessPatharray = myPack.Guess_path.split("-");
    let current_po_id = myPack.current_po_id;
    if (guessPatharray.indexOf(current_po_id.toString()) === guessPatharray.length - 1) {
        return -1;
    }
    return parseInt(guessPatharray[guessPatharray.indexOf(current_po_id.toString()) + 1]);
}

export const packageSentToUser = (pack) => {
    if (takeReceivingPostID(pack) === -1) {
        return true;
    }
    return false;
}

export const packageUserSend = (pack) => {
    const sendingPostID = takeSendingPostID(pack);
    if (sendingPostID === -1) {
        return true;
    }

    return false;
}