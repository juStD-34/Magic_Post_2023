let workerID = localStorage.getItem("worker") || "0";
let postOffice = localStorage.getItem("postOffice") || "0";
let Type = localStorage.getItem("Type") || "0";
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

function setType(Type) {
  Type = Type;
  localStorage.setItem("Type", Type);
}

function getType() {
  return Type;
}

module.exports = { setPostOffice, getPostOffice, setWorkerID, getWorkerID, setType, getType};