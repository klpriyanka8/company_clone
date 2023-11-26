const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    CustomerName:String,
    CustomerNumber:{type:String,unique:true},
    City:String,
    State:String,
    Pincode:String
})
const userSchema1 = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema1);

const userData=mongoose.model("Company",userSchema)

module.exports={ User, userData };
 