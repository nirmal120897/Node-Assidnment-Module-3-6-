const User = require('../Models/user')

module.exports.getUser = async (req,res) => {
  
  const user = await User.find()
  res.send(user)

}

module.exports.Register = async (req, res) => {

  const user =  await new User(req.body)
  user.save()
  res.send(user)
}

module.exports.singleUser = async (req, res) => {

  const id = req.params.id;
  const user = await User.findById({ _id: id })
  res.send(user)
}

module.exports.deletUser = async (req, res) => {

  const id = req.params.id;
  const user = await User.findByIdAndDelete({ _id: id })
  res.send(user)
}

module.exports.UpdateUser = async (req,res)=> {
 
const id = req.params.id;  
const user=await User.findByIdAndUpdate({ _id: id },req.body)
res.send(user)
}

module.exports.Login = async (req,res)=> {
const email = req.body.email
const password = req.body.passward
const verifyemail = await User.find({email : email})
if(verifyemail){

console.log("cjdncdc ladc dc")

}


}