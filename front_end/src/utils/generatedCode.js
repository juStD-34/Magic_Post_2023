// export 
export const generateCode = (postID) =>{
    const currentDate = new Date().toLocaleString();
    const formattedDate = currentDate.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }).replace(/,/g, '');
    let orderNumber = Math.floor(Math.random() * 1000000);
    return `${postID}${formattedDate}${orderNumber}`;
}