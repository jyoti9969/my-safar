module.exports=async function(baseFare,distance,trafficTime,time){

    this.calculateFare = async function(baseFare,distance,trafficTime,time){
        baseFare=0;
        return  baseFare+Math.ceil(Math.abs(distance*(trafficTime-time)/1000))
    };
}




