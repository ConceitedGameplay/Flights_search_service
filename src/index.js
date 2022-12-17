const express =  require("express");
const {PORT} = require("./config/severConfig")
const bodyParser = require("body-parser")
const {CityRepository} = require("./repository/city-repository")

const startServer=async()=>{
    
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // const PORT =3000;
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
        const repo = new CityRepository()
        repo.deletCity(1)
    })
} 

startServer();