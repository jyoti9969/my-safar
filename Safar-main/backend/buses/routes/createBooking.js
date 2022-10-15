
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

var db = new JsonDB(new Config("buses/busesCache", true, true, "/"));

module.exports=async function(busTier){

    this.createBooking = async function(req,res){
        let obj
            obj = avail_bus_list.find(o => o.busTier === busTier);
            busAndAmenitiesModel.baseFare=obj.baseFare
            baseFare=obj.baseFare
        return  obj;
            
    };
}