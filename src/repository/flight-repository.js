const {Flights} = require("../models/index")
const {Op} =require('sequelize')


class FlightRepository {

#createFilter(data){
   let filter = {}
   if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
   }
   if(data.departureAirportId){
    filter.departureAirportId= data.departureAirportId
   }

   if(data.minPrice){
    Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
   }

   if(data.maxPrice){
    Object.assign(filter,{price:{[Op.lte]:data.maxPrice}})
   }

   
   if(data.minPrice && data.maxPrice){
     Object.assign(filter,{
       [Op.and]:[
         {price:{[Op.lte]:data.maxPrice}},
         {price:{[Op.gte]:data.minPrice}}
        ]
      })
    }
    // Object.assign(filter,{[Op.and]:[{price:{[Op.lte]:7000}},{price:{[Op.gte]:4000}}]})
    
    return filter;
}

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log(`error in flights-repo layer:${error}`);
      throw error;
    }
  }
  async getFlightData(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);

      return flight;
    } catch (error) {
      console.log(`error in flights-repo layer:${error}`);
      throw error;
    }
  }

  async getAllFlights(filter) {
    try {
        const filterObj = this.#createFilter(filter)
      const flights = await Flights.findAll({
        where:filterObj
      });
      return flights;
    } catch (error) {
      console.log(`error in flights-repo layer:${error}`);
      throw error;
    }
  }

  async updateFlights(flightId,data){
    try {
      await Flights.update(data,{
        where:{
          id:flightId
        }
      })
      
    } catch (error) {
      console.log(`error in flights-repo layer:${error}`);
      throw error;
    }
}


}


module.exports =FlightRepository