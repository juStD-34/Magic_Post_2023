let postOffice = localStorage.getItem("postOffice") || "0";
let workerID = localStorage.getItem("worker") || "0";
function setPostOffice(postOffice) {
  postOffice = postOffice;
  localStorage.setItem("postOffice", postOffice);
}

function getPostOffice() {
  return postOffice;
}

function setWorkerID(ID) {
    workerID = ID;
    localStorage.setItem("workerID", ID);
  }
  
  function getWorkerID() {
    return workerID;
  }
module.exports = { setPostOffice, getPostOffice, setWorkerID, getWorkerID};