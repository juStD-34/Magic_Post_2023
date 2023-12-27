let login = localStorage.getItem("login") || "initialValue";

function setLogin(value) {
  login = value;
  localStorage.setItem("login", value);
}

function getLogin() {
  return login;
}

module.exports = { setLogin, getLogin };