const CityService = require("../services/index");

const cityService = new CityService();

const create =async(req,res)=>{
    try {
        
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        })

    } catch (error) {
        console.log(`error from controller layer: ${error}`)
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a city',
            err:error
        })
            
    }

}
const destroy =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(`error from controller layer: ${error}`)
            
    }
}
const get =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(`error from controller layer: ${error}`)
            
    }
}
const update =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(`error from controller layer: ${error}`)
            
    }
}



module.exports ={
    
    create,
    destroy,
    update,
    get
}