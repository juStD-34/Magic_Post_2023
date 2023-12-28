import axios from "axios"
export const getPostData = async () => {
    try {
        const response = await axios.get("http://localhost:3001/getPostOffice");
        const postData = response.data.PostOffice;
        console.log(postData, "asdasd");

        const formattedData = postData.reduce((acc, post) => {
            const { id, poType, linkPoId, poAddress } = post;

            if (poType === "CP") {
                acc.gatheringPost[id] = { id, poAddress };
            } else if (poType === "TP" && linkPoId !== null) {
                acc.post[id] = { id, connectedPost: linkPoId, location: poAddress };
            }

            return acc;
        }, { post: {}, gatheringPost: {} });

        console.log(formattedData, "jhgjhj");
        return formattedData;
    } catch (err) {
        console.error(err);
        throw err; // Bạn có thể xử lý lỗi tại đây hoặc để nó lan ra nếu cần
    }
};