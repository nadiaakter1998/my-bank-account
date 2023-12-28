document.getElementById('btn-submit').addEventListener('click', function(){
    // email field required
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // password field required
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    
    // set alert if email password do not require
    if(email === 'nadu@gmail.com' && password === 'nadu1998'){
        window.location.href = 'bank-side.html';
    } 
    else{
        alert('Please write correct password');
    }

})