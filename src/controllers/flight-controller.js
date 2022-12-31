const {FlightService} = require("../services/index");
const {SuccessCodes} = require('./../utils/error-codes')

const flightService = new FlightService();


const create = async(req,res)=>{
 
    try {
        let flightReqData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
        }

        const flight = await flightService.createFlight(flightReqData);
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"successfully fetched the flights",
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

const get = async(req,res)=>{

    try {
        const flight = await flightService.getFlight(req.params.id)
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"successfully fetched the flight",
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

const update = async(req,res)=>{
    try {
        const response = await flightService.updateFlight(req.params.id,req.body)
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"successfully updated the flight",
            err:{}
        })
        
    } catch (error) {
        console.log(`error from flight-controller level :${error}`);
        return res.status(500).json({
         data:{},
         success:false,
         message:'not able to update the flight',
         err:error
        })
    }
}


module.exports={
create,
getAll,
get,
update
}