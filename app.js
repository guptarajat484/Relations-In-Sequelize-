const express=require('express')
const app=express()

app.use(express.json())

require('./src/routes/api-routes')(app)


app.listen(8000,()=>{
    console.log("Server is runing on port 8000")
})

//https://help.godaddy.com/help/create-an-account-in-webhost-manager-whm-8464

//184.168.127.124