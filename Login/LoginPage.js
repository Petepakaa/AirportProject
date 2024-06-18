document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (for demonstration purposes)
    if (username === "admin" && password === "password") {
      // Redirect to another page on successful login
      window.location.href = "./index.html";
    } else {
      alert("Invalid username or password");
    }
  });
  
