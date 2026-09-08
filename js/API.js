const client = google.accounts.oauth2.initCodeClient({
    client_id: "139148002063-a0o20cacq9v970l4vaocdfsitb9tsljn.apps.googleusercontent.com",
    scope: "email profile openid",
    callback: (response) => {
        console.log(response);
    }
});

document.getElementById("login").addEventListener("click", () => {
  client.requestCode();
});

function handleCredentialResponse(response) {
    console.log("Token recebido:");
    console.log(response.credential);
}

