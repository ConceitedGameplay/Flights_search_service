const {City} = require("../models/index");

class CityRepository{
   
    // constructor(){

    // }
    async createCity({name}){      //{name:"new delhi"}
         
        try {
            
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log(`error from repo layer: ${error}`)
            throw error;
        }
    }

    async deleteCity(cityId){
         
        try {
             await City.destroy({
                where:{
                    id:cityId
                }
             });
             return true;
        } catch (error) {
            console.log(`error from repo layer: ${error}`)
            throw error;            
        }
    }

    async updateCity(cityId,data){

        try {
              const city = await City.update(data,{
                where:{
                    id:cityId
                }
              });
              
              return city
            
        } catch (error) {
            console.log(`error from repo layer: ${error}`)
            throw error;
        }

    }

    async getCity(cityId){
      
        try {
            const city = await City.findOne({
                where:{
                    id:cityId
                }
            });
            //const city = await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log(`error from repo layer: ${error}`)
            throw error;
        }
    }
}





module.exports=CityRepository