async function logvar() {
    var eMail = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    console.log("The E-Mail typed in was: " + eMail);
    console.log("The Password typed in was: " + password);
    login(eMail, password);
  }
  async function login(eMail, password) {
try {
axios.post('http://raspisamuel.local:3004/login',{
name: eMail,  password: password
}, {
headers: {
"Content-Type": "application/x-www-form-urlencoded"
}
})
.then(function (response) {
console.log(response);
data = response["data"];
if(!(data === "wrong user or password")){
  console.log(1);
  localStorage.setItem('KEY', data);
  location.href = "/home";
}
else{
  console.log(11);
  document.getElementById("message").innerHTML = data;
}
})
}
catch{

}
}

  function openForm() {
    document.getElementById("myForm").style.display = "block";
    document
      .getElementById("ForumOpener")
      .setAttribute("onClick", "javascript: closeForm();");
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document
      .getElementById("ForumOpener")
      .setAttribute("onClick", "javascript: openForm();");
  }

