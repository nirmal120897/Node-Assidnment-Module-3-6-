const mongoose = require('mongoose')
const user = require('../Models/user')
mongoose.connect("mongodb://127.0.0.1:27017/nirmaldb1",function()
{
     console.log("connectd succcesfully.......")
})



const adddata = async()=>
{
  const data = { name: 'Nirmal', email: 'nirmal@gmail.com', address: 'surat',password:'123' }
  const user2 = await new user(data)
  user2.save()
  console.log("Inserted succesfully......")

}
 adddata()