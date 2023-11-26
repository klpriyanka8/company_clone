const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const {User,userData}=require('./model')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=5000

mongoose.connect('mongodb://0.0.0.0:27017/SASTRA')
.then(()=>{
    console.log('Database is connected')
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>{
    console.log(err)
})

//GET
app.get('/displaycustomer',async (req,res)=>{
    try{
        const response=await userData.find()
        return res.status(200).json({success:true,data:response})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error : ${err}`})
    }
})

//POST
app.post('/createcustomer',async(req,res)=>{
    try{
        await userData.create(req.body)
        return res.status(200).json({success:true,msg:"Data submitted successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//PUT
app.put('/updatecustomer/:_id',async(req,res)=>{
    try{
        await userData.updateOne({_id:req.params._id},req.body)
        return res.status(200).json({success:true,msg:"Data updates successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//DELETE
app.delete('/deletecustomer/:CustomerNumber',async(req,res)=>{
    try{
        await userData.deleteOne({CustomerNumber:req.params.CustomerNumber})
        return res.status(200).json({success:true,msg:"Data deleted successfully"})
    }
    catch(err){
        return res.status(400).json({success:false,msg:`Error :${err}`})
    }
})

//SEARCH
app.get('/searchcustomer/:CustomerNumber',async(req,res)=>{
    try{
        const info=await userData.findOne({CustomerNumber:req.params.CustomerNumber})
        if(info)
        {
            return res.status(200).json({success:true,data:info})
        }
        else
        {
            return res.json({success:false,msg:"Data not found"})
        }
        
    }
    catch(err){
        return res.status(200).json({success:false,msg:`Error :${err}`})
    }
})
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});