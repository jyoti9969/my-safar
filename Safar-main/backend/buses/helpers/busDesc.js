const busAndAmenitiesModel = require('../models/busAndAmenities')
var baseFare;

var avail_bus_list= [
    {
        busTier:'B',
        baseFare:200
    }
]


module.exports=async function(busTier){

    this.getBusDescription = async function(busTier){
        let obj
            obj = avail_bus_list.find(o => o.busTier === busTier);
            busAndAmenitiesModel.baseFare=obj.baseFare
            baseFare=obj.baseFare
        return  obj;
            
    };
}