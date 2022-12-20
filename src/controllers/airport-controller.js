const {AirportService} = require("../services/index");

const airportService = new AirportService();

const create = async(req,res)=>{
    try {

        const airport = await airportService.createAirport(req.body);

        return res.status(201).json({
            data:airport,
            success:true,
            message:"successfully created airport",
            err:{}
        })
        
    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
           return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create airport',
            err:error
           })
    }
}


const bulkCreate=async(req,res)=>{
    try {

        const airports = await airportService.bulkCreateAirport(req.body.airports);

        return res.status(201).json({
            data:airports,
            success:true,
            message:'successfully created the airports',
            err:{}
        })
        
    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to create airports',
         err:error
        })
    }
}

const destroy =async(req,res)=>{

    try {
        const response = await airportService.deleteAirport(req.params.id)

        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted airport",
            err:{}
        })
        
    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to delete airport',
         err:error
        })
    }
}

const get = async(req,res)=>{

    try {
        const airport = await airportService.getAirport(req.params.id);

        return res.status(200).json({
            data:airport,
            success:true,
            message:"successfully fetched an airport",
            err:{}
        })
        
    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to get the airport',
         err:error
        })
    }
}


const getAll=async(req,res)=>{

    try {
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data:airports,
            success:true,
            message:"successfully fetched the airports",
            err:{}
        })

    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to get the airports',
         err:error
        })
    }
}

const update=async(req,res)=>{

    try {
        const airport = await airportService.updateAirport(req.params.id,req.body);

        return res.status(200).json({
            data:airport,
            success:true,
            message:"successfully updated the airport",
            err:{}
        })

    } catch (error) {
        console.log(`error from airport-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to update the airport',
         err:error
        })
    }
}


module.exports={
    create,
    bulkCreate,
    destroy,
    update,
    get,
    getAll
}