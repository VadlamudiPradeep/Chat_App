let User = require('../models/users');
const bcrypt = require('bcrypt');

function isStringValid(string){
    if(string == undefined ||string.length === 0){
        return true
    } else {
        return false
    }
}

const signup = async (req, res)=>{
    try{
    const { name, email , phone , password } = req.body;
    console.log('email', email)
    if(isStringValid(name) || isStringValid(email) ||isStringValid(phone)   || isStringValid(password)){
        return res.status(400).json({err: "Bad parameters . Something is missing"})
    }
    const saltrounds = 10;
    bcrypt.hash(password, saltrounds, async (err, hash) => {
        console.log(err)
        await User.create({ name, email , phone, password:hash })
        res.status(201).json({message: 'Successfully create new user'})
    })
    }catch(err) {
            res.status(500).json(err);
        }

};

let login = async(req ,res ,next)=>{
    try{
    let {email , password} = req.body ;
    if(isStringValid(email) || isStringValid(password)){
        return res.status(400).json({message: 'Email id or password is wrong' , success : false})
    };
    let response  = await User.findAll({where :{email , password}})
        if(response.length > 0 ){
            bcrypt.compare(password, response[0].password , (err , result) =>{
                if(err){
                    throw new Error('Something went wrong');
                }
                if(result === true){
                    return res.status(200).json({success :true , message: 'User logged in successfully'});
                }else{
                    return res.status(400).json({success : false , message : 'Password is incorrect'});
                }
                })
        }else{
            return res.status(500).json({success: false , message:'User is not exist'})
        }
    }catch(err){
        res.status(500).json({message: err, success: false})
    }
}



const generateAccessToken = (id, name) => {
    return jwt.sign({ userId : id, name } , 'secretkey');
}


module.exports = {
    signup,
    login,
    generateAccessToken,
}