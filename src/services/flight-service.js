const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime} =require("../utils/helper")

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository()
  }
  async createFlight(data) {
    try {
        if(compareTime(data.arrivalTime,data.departureTime)){

            const airplane = await this.airplaneRepository.getAirplane(
              data.airplaneId
            );
            const flight = await  this.flightRepository.createFlight({
              ...data,
              totalSeats:airplane.capacity
            })
            return flight;
        }else{
            throw{error:`arrival time can't be less than departure time`}
        }
    } catch (error) {
      console.log(`error in flights-service layer:${error}`);
      throw error;
    }
  }

async getFlight(flightId){

  try {
    const flight = await this.flightRepository.getFlightData(flightId)

    return flight
    
  } catch (error) {
    console.log(`error in flights-service layer:${error}`);
    throw error;
  }
}

  async getAllFlightsData(data){

    try {
      
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log(`error in flights-service layer:${error}`);
      throw error;
    }
  }

  async updateFlight(flightId,data){

    try {
      const response = await this.flightRepository.updateFlights(flightId,data)
      return response

    } catch (error) {
      console.log(`error in flights-service layer:${error}`);
      throw error;
    }
  }
 
}



module.exports= FlightService
