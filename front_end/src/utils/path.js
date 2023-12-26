const postData = {
    post: {
        1: { id: 1, connectedPost: 3, location: "Quan Hoa, Cầu Giấy" },
        2: { id: 2, connectedPost: 4, location: "Hoàng Văn Thụ, Hoàng Mai" },
        5: { id: 5, connectedPost: 6, location: "Dịch Vọng, Cầu giấy" },
    },
    gatheringPost: {
        3: { id: 3 },
        4: { id: 4 },
        6: { id: 6 },
    }
};

const getGatheringPost = (postId) => {
    return postData.post[postId]?.connectedPost || null;
};

export const getPostIDFromLocation = (location) => {
    const postId = findPostIdByLocation(location);
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
    guessPath = guessPath + getGatheringPost(fromtPoID) + "-";
    guessPath = guessPath + getGatheringPost(toPoID) + "-";
    guessPath = guessPath + toPoID;

    return guessPath;
}