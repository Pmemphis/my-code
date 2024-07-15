document.getElementById('contactForm').addEventListener('submit',function(event)) {
    event.preventDefault();
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if(name===''|| email===''|| message===''){
        formMessage.textContent='All fields are required';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        formMessage.textContent = 'Please enter valid email address.';
        return;
    }

    formMessage.textContent = 'Thank you for your message!';
    document.getElementById('contactForm').reset();
} 