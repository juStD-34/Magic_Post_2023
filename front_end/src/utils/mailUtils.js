export const fetchPackages = (postId, type) => {
    return fetch(`http://localhost:3001/packageInfor?postId=${postId}&type=${type}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error(`Error fetching ${type} packages:`, error);
      });
  };
  
  // Trong cùng file hoặc file khác, chẳng hạn utils/mailUtils.js
  export const fetchIncomingPackages = (postId, setIncomingPackages) => {
    fetchPackages(postId, 'incoming').then(data => {
      // console.log("inComingData", data);
      setIncomingPackages(data.Packages);
    });
  };
  
  export const fetchOutgoingPackages = (postId, setOutgoingPackages) => {
    fetchPackages(postId, 'outgoing').then(data => {
      // console.log("data", data);
      setOutgoingPackages(data.Packages);
    });
  };