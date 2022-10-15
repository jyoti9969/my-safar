const locationInfoModel = require("../models/locationInfo");
const axios = require("axios");
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const { v4: uuidv4 } = require("uuid");

const { bing_maps_key, cache_reset_time } = require("../../configs");
require("../helpers/fareCalc")();
require("../helpers/busDesc")();

var db = new JsonDB(new Config("buses/busesCache", true, true, "/"));

var distance, time, trafficTime, baseFare;

const calculateDistance = async (startingCityName, destinationCityName) => {
  const distance_calc_api = `https://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=${startingCityName}&Waypoint.2=${destinationCityName}&key=${bing_maps_key}`;

  try {
    await axios.get(distance_calc_api).then(function (response) {
      distance = response.data.resourceSets[0].resources[0].travelDistance;
      time = response.data.resourceSets[0].resources[0].travelDuration;
      trafficTime =
        response.data.resourceSets[0].resources[0].travelDurationTraffic;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
  return distance;
};

module.exports = async function (req, res) {
  this.getLocationInfo = async function (req, res) {
    var uuid = req.body.enc_bus_id;
    var data;
    var timeNow = Date.now();
    try {
      if (db.getData(`/cache/${uuid}/expire`) < timeNow) {
        db.delete(`/cache/${uuid}`);
      }
      data = db.getData(`/cache/${uuid}/data`);
      data={
        status:true,
        msg:null,
        startingCityName: data.startingCityName,
        destinationCityName: data.destinationCityName,
        distanceBetweenCities: data.distanceBetweenCities,
        travelTimeInSeconds = data.travelTimeInSeconds
      };
    } catch (error) {
      console.error("can't find");
      data = {
        status:false,
        msg:"Id Expired, please create a new id"
      }
    }
    return data;
  };

  this.postLocationInfo = async function (req, res) {
    var locationInfo = new locationInfoModel();

    const { startingCityName, destinationCityName } = req.body;

    let busAndAmenitiesObject = await getBusDescription("B");

    locationInfo.startingCityName = startingCityName;
    locationInfo.destinationCityName = destinationCityName;
    locationInfo.baseFare = busAndAmenitiesObject.baseFare;
    locationInfo.distanceBetweenCities = await calculateDistance(
      startingCityName,
      destinationCityName
    );
    locationInfo.travelTimeInSeconds = trafficTime;
    locationInfo.totalFare = await calculateFare(
      baseFare,
      distance,
      trafficTime,
      time
    );
    locationInfo.enc_bus_id = uuidv4();

    db.push(`/cache/${locationInfo.enc_bus_id}/data`, locationInfo);
    db.push(
      `/cache/${locationInfo.enc_bus_id}/expire`,
      Date.now() + cache_reset_time * 60 * 1000,
      false
    );
    var data;
    try {
      db.getData(`/cache/${locationInfo.enc_bus_id}`)
       data= {
         status:true,
         msg:null,
         enc_bus_id:locationInfo.enc_bus_id
       }
    } catch (error) {
      console.error("Not able to find");
      data={
        status:false,
        msg:"Id Expired, please create a new id"
      }
    }

    
    //console.log(db.getData(`/cache/${locationInfo.enc_bus_id}`))
    // locationInfo.save(function (err) {
    //   if (err) console.log(err);
    // });
    return data;
  };
};
