const {Flights} = require("../models/index")



class FlightRepository{

 async createFlght(data){
    try {
        const flight = await Flights.create(data);
        return flight;
    } catch (error) {
        console.log(`error in flights-repo layer:${error}`)
        throw error
    }
 }

}


module.exports =FlightRepository