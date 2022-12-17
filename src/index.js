const express =  require("express");
const {PORT} = require("./config/severConfig")
const bodyParser = require("body-parser")
const ApiRoutes = require('./routes/index');

const startServer=async()=>{
    
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // const PORT =3000;
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
       
    })
} 

startServer();