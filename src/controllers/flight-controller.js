const {FlightService} = require("../services/index");


const flightService = new FlightService();


const create = async(req,res)=>{
 
    try {

        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            data:flight,
            success:true,
            message:"successfully created flight",
            err:{}
        })
        
    } catch (error) {
        console.log(`error from flight-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to create flight',
         err:error
        }) 
    }

}



const getAll=async(req,res)=>{
    try {
        
        const flights = await flightService.getAllFlightsData(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:"successfully fetched the flighs",
            err:{}
        })

    } catch (error) {
        
        console.log(`error from flight-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to get flights',
         err:error
        })
    }
}



module.exports={
create,
getAll
}