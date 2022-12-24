const {AirportRepository} = require("../repository/index");

const CrudService = require("./crud-service")

// class AirportService{

//     constructor(){
//         this.AirportRepository= new AirportRepository();
//     }

//     async createAirport(data){
//         try {
            
//             const airport = await this.AirportRepository.createAirport(data);
//             return airport;

//         } catch (error) {
//            console.log(`error from airport-service level :${error}`);
//            throw error; 
//         }
//     }

//     async bulkCreateAirport(data){
//         try {
            
//             const airports = await this.AirportRepository.bulkCreateAirport(data);
//             return airports;

//         } catch (error) {
//             console.log(`error from airport-service level :${error}`);
//            throw error; 
//         }
//     }

//     async deleteAirport(airportId){
//         try {
//             const response = await this.AirportRepository.deleteAirport(airportId);

//             return response;
            
//         } catch (error) {
//             console.log(`error from airport-service level :${error}`);
//             throw error; 
//         }
//     }

//     async updateAirport(airportId,data){
//         try {
//             const airport = await this.AirportRepository.updateAirport(airportId,data);

//             return airport;
//         } catch (error) {
//             console.log(`error from airport-service level :${error}`);
//            throw error; 
//         }
//     }

//     async getAirport(airportId){
//         try {
//             const airport = await this.AirportRepository.getAirport(airportId);

//             return airport;
//         } catch (error) {
//             console.log(`error from airport-service level :${error}`);
//            throw error; 
//         }
//     }

//     async getAllAirports(filter){
//         try {
//             const airports = await this.AirportRepository.getAllAirports({
//                 cityId:filter.cityId
//             })
//             return airports;
//         } catch (error) {
//             console.log(`error from airport-service level :${error}`);
//            throw error; 
//         }
//     }
// }

class AirportService extends CrudService{
     constructor(){
        
        const airportRepository = new AirportRepository()
        super(airportRepository)
     }
}

module.exports=AirportService;