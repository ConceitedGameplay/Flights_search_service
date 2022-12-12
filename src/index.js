const express =  require("express");
const {PORT} = require("./config/severConfig")


const startServer=async()=>{
    
    // create the express object
    const app = express();
    // const PORT =3000;
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })
} 

startServer();