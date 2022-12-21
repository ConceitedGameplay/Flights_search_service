const {Op} = require("sequelize");
const {Airport} = require("../models/index");

class AirportRepository{

//constructor(){

// }

async createAirport({name,cityId}){

    try {
       
        const airport = await Airport.create({
            name,
            cityId
        })
        return airport;
    } catch (error) {
        console.log(`error from repo layer: ${error}`)
        throw error;
    }
}

async bulkCreateAirport(data){
    try {
        const airports = await Airport.bulkCreate([...data])
        return airports;
    } catch (error) {
        console.log(`error from repo layer : ${error}`)
        throw error;
    }
}

async deleteAirport(airportId){
    try {
        await Airport.destroy({
            where:{
                id:airportId
            }
        })
    } catch (error) {
        console.log(`error from repo layer: ${error}`)
        throw error;
    }
}

async updateAirport(airportId,data){

   try {
    const airport = await Airport.findByPk(airportId)
    airport.name = data.name;
    airport.cityId= data.cityId;
    await airport.save();
    return airport;
   } catch (error) {
     console.log(`error from repo layer: ${error}`)
     throw error;
   }
}

async getAirport(airportId){
    try {
        const airport = await Airport.findOne({
            where:{
                id:airportId
            }
        })
        return airport;
    } catch (error) {
        console.log(`error from repo layer: ${error}`)
        throw error;
    }
}

async getAllAirports(filter){      //can be empty also
   
    try {
         if(filter.cityId){
            const airports = await Airport.findAll({
                where:{
                    // name:{
                    //     [Op.startsWith]:filter.name
                    // },
                    cityId: filter.cityId

                }
            })
             return airports
         }
         const airports = await Airport.findAll()
         return airports;

    } catch (error) {
        console.log(`error from repo layer: ${error}`)
        throw error;
    }
}

}

module.exports = AirportRepository