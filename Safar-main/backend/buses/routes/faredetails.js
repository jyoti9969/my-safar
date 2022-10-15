const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

var db = new JsonDB(new Config("buses/busesCache", true, true, "/"));

module.exports = async function (enc_bus_id) {
  this.getFareBreakup = async function (enc_bus_id) {
    var uuid = enc_bus_id
    var data;
    var timeNow = Date.now();
    try {
      if (db.getData(`/cache/${uuid}/expire`) < timeNow) {
        db.delete(`/cache/${uuid}`);
      }
      data = db.getData(`/cache/${uuid}/data`);
      data = {
        status: true,
        msg: null,
        startingCityName: data.startingCityName,
        destinationCityName: data.destinationCityName,
        distanceBetweenCities: data.distanceBetweenCities,
      };
    } catch (error) {
      console.error("can't find");
      data = {
        status: false,
        msg: "Id Expired, please create a new id",
      };
    }
    return data;
  };
};
