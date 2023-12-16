export const fetchPackages = (postId, type) => {
    return fetch(`http://localhost:3001/packageInfor?postId=${postId}&type=${type}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error(`Error fetching ${type} mails:`, error);
      });
  };
  
  // Trong cùng file hoặc file khác, chẳng hạn utils/mailUtils.js
  export const fetchIncomingPackages = (postId, setIncomingPackages) => {
    fetchPackages(postId, 'incoming').then(data => {
      console.log("inComingData", data);
      setIncomingPackages(data.mails);
    });
  };
  
  export const fetchOutgoingPackages = (postId, setOutgoingMails) => {
    fetchPackages(postId, 'outgoing').then(data => {
      console.log("data", data);
      setOutgoingMails(data.mails);
    });
  };