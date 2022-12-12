const express =  require("express");
const {PORT} = require("./config/severConfig")


const startServer=async()=>{
    
    const app = express();
    // const PORT =3000;
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })
} 

startServer();