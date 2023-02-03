

async function signup(e) {
    try{
        e.preventDefault();
        console.log(e.target.email.value);
        // let name=document.getElementById('name').value
        // let email=document.getElementById('email').value
        // let phone=document.getElementById('phone').value
        // let pass=document.getElementById('password').value
       
        // if( name.length< 3 || name==""){
        //     alert('Enter a valid Name!')
        //     return
        // }else if(email.indexOf('@')==-1 ){
        //     alert('Enter a valid Email ID!')
        //     return
        // }else if(isNaN(phone) || phone.length < 10){
        //     alert("Enter a valid Phone No!")
        //     return;
        // }else if(pass.length < 5){
        //     alert('Enter a strong password')
        // }
        // console.log(signupDetails)
        const signupDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone:e.target.phone.value,
            password: e.target.password.value
        }
        const response = await axios.post('http://localhost:3000/user/signup', signupDetails)
      
         if(response.data[1] == false ){
            alert(response.data.message)
        }else{
            alert("Sign Up Successful!")
        }

    } catch(err) {
        document.body.innerHTML += `<div style="color:red">${err} </div>`
    }
};



async function login(e){
    try{
     e.preventDefault();


    //  let email = document.getElementById('email');
    //  let password = document.getElementById('password');


    //  if(email.indexOf('@')== -1 ){
    //     alert('Enter a valid Email ID !!');
    //     return ;
    //  }else if(password.length < 5){
    //     alert('Enter a valid password');
    //     return ;
    //  }else{
    //     document.getElementById('email').value ='';
    //     document.getElementById('password').value = '';
       
    //     };

        let loginDetails ={
            name : e.target.email.value ,
            password :e.target.password.value
         };

     let response = await axios.get(`http://localhost:3000/user/login` ,loginDetails )
     if(response.status === 200 ){
        alert('login is successfully');
     }else{
        throw new ErrorEvent()
     }

    }catch(err){
        showError();
    }


};

function showError(err){
    document.body.innerHTML += `<div style="color:red"> ${err}</div>`
}