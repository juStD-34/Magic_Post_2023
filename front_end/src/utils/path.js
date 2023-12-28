import { getPostData } from "./postData";

const postData = await getPostData();
console.log('hehe', postData);

const getGatheringPost = (postId) => {
    return postData.post[postId]?.connectedPost || null;
};

export const getPostIDFromLocation = (location) => {
    const postId = findPostIdByLocation(location);
    console.log("P",postId, typeof postId);
    return postId;
}

// Hàm để tìm kiếm postId dựa trên location
const findPostIdByLocation = (location) => {
    for (const postId in postData.post) {
        if (postData.post[postId].location === location) {
            return parseInt(postId);
        }
    }
    return null;
}
export const generatePath = (fromtPoID, toPoID) => {
    let guessPath = "";
    guessPath = guessPath + fromtPoID + "-";
    if (getGatheringPost(fromtPoID) === getGatheringPost(toPoID)) {
        guessPath = guessPath + getGatheringPost(fromtPoID) + "-";
    } else {
        guessPath = guessPath + getGatheringPost(fromtPoID) + "-";
        guessPath = guessPath + getGatheringPost(toPoID) + "-";
    }
    guessPath = guessPath + toPoID;

    return guessPath;
}