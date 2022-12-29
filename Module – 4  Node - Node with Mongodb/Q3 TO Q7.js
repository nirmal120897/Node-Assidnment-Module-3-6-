
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017/nirmaldb1',function(err,client){
console.log('created......')

})

MongoClient.connect('mongodb://127.0.0.1:27017/nirmaldb1',function(err,client){
const user = client.db('nirmaldb1')
user.createCollection('user',function(err,data){

    console.log('collection created succesfully')
})
})

MongoClient.connect('mongodb://127.0.0.1:27017/nirmaldb1',function(err,client){

const user = client.db('nirmaldb1')

const mydata = {'name' : 'nirmal','email': 'nirmal@gmail.com','address':'surat'}
user.collection('user').insertOne(mydata,function(err,data){

console.log("inserted successfully...!!")

})


})

MongoClient.connect('mongodb://127.0.0.1:27017/nirmaldb1',function(err,client){

const user = client.db('nirmaldb1')
const mydata2 = [{'name' : 'sagar','email': 'sagar@gmail.com','address':'surat'},
                 {'name' : 'dhaval','email': 'dhaval@gmail.com','address':'surat'}]
            
user.collection('user').insertMany(mydata2,function(err,client){

    console.log("data inserted successfully..!!");
})

 })

MongoClient.connect('mongodb://127.0.0.1:27017/nirmaldb1',function(err,client){


const user = client.db('nirmaldb1')
user.collection('user').find({'name' :'nirmal'}).toArray(function(err,data){

    console.log(data)
})

})
