export const fetchPackages = async (postId, type) => {
  try {
    const response = await fetch(`http://localhost:3001/packageInfor?postId=${postId}&type=${type}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.Packages;
  } catch (error) {
    console.error(`Error fetching ${type} packages:`, error);
    return null;
  }
};

export const fetchIncomingPackages = async (postId) => {
  try {
    const incomingPackages = await fetchPackages(postId, 'incoming');
    // console.log("incomingPackages", incomingPackages);
    return incomingPackages;
  } catch (error) {
    // Handle or log the error if needed
    console.error("Error fetching incoming packages:", error);
    return null;
  }
};

export const fetchOutgoingPackages = async (postId) => {
  try {
    const outgoingPackages = await fetchPackages(postId, 'outgoing');
    // console.log("outgoingPackages", outgoingPackages);
    return outgoingPackages;
  } catch (error) {
    // Handle or log the error if needed
    console.error("Error fetching outgoing packages:", error);
    return null;
  }
};
