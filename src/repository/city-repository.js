const {Op} = require("sequelize");
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
            //APPROACH WORKS BUT DOESN'T RETURN THE UPDATED DATA
            //   const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     },
            //     returning:true,
            //     plain:true
            //   });
              const city = await City.findByPk(cityId)
              city.name = data.name;
              await city.save();
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
    async getAllCities(filter){  //can be empty also
      
        try {
            if(filter.name){
                const cities = await City.findAll({
                   where:{
                    name:{
                        [Op.startsWith]: filter.name
                    }
                   }  
                })
                return cities
            }
            const cities = await City.findAll()
            return cities;
        } catch (error) {
            console.log(`error from repo layer: ${error}`)
            throw error;
        }
    }
}





module.exports=CityRepository