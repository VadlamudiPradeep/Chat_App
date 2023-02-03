

let signupUrl = 'http://localhost:3000/user'

let signupBtn = document.getElementById('sign-up-btn');


signupBtn.addEventListener('clcik',()=>{
    container.classList.add('right-panel-active')
})






signupBtn.addEventListener('click' , signUp);



function signUp(e){
    e.preventDefault();

    let name= document.getElementById('name').value;
    let email = document.getElementById('email');
    let phoneNumber = document.getElementById('phone');
    let password = document.getElementById('password');
if(name.length === '' && email.length ==='' && phoneNumber.length === '' && password.length ===''){
    alert('Please enter the valid details');
    return ;
}

else if(name.length <3 || name==''){
        alert('Enter a valid name');
        return;
    }else if(email.indexOf('@')== -1){
        alert('Enter a valid Email Id');
        return ;
    }else if(phoneNumber.length <10 || isNaN(phoneNumber)){
        alert('Enter a Valid Number');
        return;
    }
    else{
        document.getElementById('name').value ='';
        document.getElementById('email').value ='';
        document.getElementById('phoneNumber').value ='';
        document.getElementById('password').value ='';

        axios({
            methos: 'post',
            url : signupUrl,
         userdetails:{
            name:name,
            email:email,
            phone:phoneNumber,
            password:password,
         }
        })
        .then(response =>{
         if(response.userdetails[1] == false){
            alert('This email have using the account with us ! please login');
         }else{
            alert('Sign Up is Successful!');
         }
        }).catch(err =>{
            ShowError();
        });
            
        
    };
}
function ShowError(err){
    document.body.innerHTML += `<h1 style="color:red">${err}</h1>`
}