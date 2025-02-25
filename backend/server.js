require('dotenv').config()
const app = require('./src/app')


app.listen(3000,()=>{
    console.log("server is listening in port 3000 http://localhost:3000");
})