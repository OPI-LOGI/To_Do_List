async function checkLoggedIn() {
  const response = await fetch("http://localhost:3003/auth/cookie/status", {
    credentials: "include",
  })

  if (response.ok) {
  } else if (response.status == 401) {
    alert("Benutzername oder Passwort stimmt nicht");
  }
}

async function tryLogin() {
  const email = document.getElementById("email_input").value
  const password = document.getElementById("password_input").value
  const response = await fetch("http://localhost:3003/auth/cookie/login", {
    credentials: "include",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })

  checkLoggedIn()
}

checkLoggedIn()