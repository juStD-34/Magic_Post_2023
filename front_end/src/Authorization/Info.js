let ID = localStorage.getItem("ID") || "0";
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
  ID = ID;
  localStorage.setItem("ID", ID);
}

function getWorkerID() {
  return ID;
}

function setType(Type) {
  Type = Type;
  localStorage.setItem("Type", Type);
}

function getType() {
  return Type;
}

module.exports = { setPostOffice, getPostOffice, setWorkerID, getWorkerID, setType, getType};