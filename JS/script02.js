function showSignupForm() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
  }
  
  function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
  }
  
  function showForgotPasswordForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.remove('hidden');
  }
  
  function signup() {
    const fullname = document.getElementById('signup-fullname').value;
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    // const confirmpassword = document.getElementById('signup-confirmpassword').value;
    
    if (fullname && username && email && password) {
        alert('Signed up successfully!');
        showLoginForm();
    } else {
        alert('Please fill out all fields.');
    }
  }

  let eyeicon = document.getElementById("eyeicon");
  let password = document.getElementById("signup-password");
  
  eyeicon.onclick = function(){
    if(password.type =="password"){
      password.type = "text";
      eyeicon.src = "../assets/eye-open.png";
    }
    else{
      password.type = "password";
      eyeicon.src = "../assets/eye-close.png";
  
    }
  }
  // toggle password
  let icon = document.getElementById("icon");
  let password_2 = document.getElementById("login-password");
  
  
  icon.onclick = function(){
    if(password_2.type =="password"){
      password_2.type = "text";
      icon.src = "../assets/eye-open.png";
    }
    else{
      password_2.type = "password";
      icon.src = "../assets/eye-close.png";
  
    }
  
  }
  
  function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    if (email === "chkore@gmail.com" && password === "rishi123") {
        alert('Logged in successfully!');
        window.location.href="http://127.0.0.1:5503/html/page.html";
    }
    else if(email === "" || password ===""){
        alert("Please fill out all fields")
  
    }
    
    else {
        document.getElementById("message").innerHTML="Invalid Email or password. Please try again";
        
    }
  }
  
  function forgotPassword() {
    const email = document.getElementById('forgot-password-email').value;
  
    if (email) {
        alert('Password reset link sent to your email!');
        showLoginForm();
    } else {
        alert('Please enter your email.');
    }
  }
  
  
  
  
  