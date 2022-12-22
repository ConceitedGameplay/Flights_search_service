const express =  require("express");
const {PORT} = require("./config/severConfig")
const bodyParser = require("body-parser")
const ApiRoutes = require('./routes/index');
const {Airport,City,Airplane} = require("./models/index")
const db = require("./models/index")

const startServer=async()=>{
    
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // const PORT =3000;
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`)
       
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        }
        // const city = await City.findOne({
        //     where:{
        //         id:12
        //     }
        // })
        // // const newAirport = await Airport.create({name:"Jindal vijaynagar airport",cityId:5})
        // const airports = await city.getAirports();

        // // await city.addAirport({
        // //     name:" "
        // // })

        // const newAirport =  await Airport.findOne({
        //     where:{
        //         id:5
        //     }
        // })
        // await city.addAirport(newAirport)
        // console.log(airports)
    
    })
} 

startServer();