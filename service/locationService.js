const Model = require("../models");
const Sequelize = require("sequelize");
const { sequelize } = require("../config/connectionDB");
const Op = Sequelize.Op;
exports.addUser = (data) => {
  return Model.locationModel.create(data);
};

exports.getlocation = (data) => {
  return Model.locationModel.findAll();
};

// 37 and -122 is my location latitude and longitude

// Here static data used
exports.getlocationallMethod1 = (lo,lt) => {
  console.log(lo);
  console.log(lt);
  
  return new Promise((resolve, reject) => {
    let where = {};
let order=[Sequelize.literal("distance asc")]
    console.log(where, "cccccc");
    Model.locationModel
      .findAll({ 
        attributes: [
          "location_Id","name","address",
          [
            sequelize.literal(`(
              select (3959*acos(cos(radians(37))*cos(radians(lat))*cos(radians(lng)-radians(-122))+
              sin(radians(37))* sin(radians(lat)))) 
            )`),
            'distance'
        ] 
        ],
        order:order
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// 37 and -122 is my location latitude and longitude

exports.getlocationallMethod2 = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    console.log("this is latitude", latitude);
    console.log("this is longi", longitude);
let order=[Sequelize.literal("distance asc")]

    let where = {};
    console.log(where, "cccccc");
    Model.locationModel
      .findAll({
        where: where,
        attributes: [
          "location_Id","name","address",
          [
            sequelize.literal(`(
              SELECT SQRT(
                POW(69.1 * (lat - 37), 2) +
                POW(69.1 * (-122- lng) * COS(lat / 57.3), 2))
            )`),
            'distance'
        ] 
        ],
        order:order
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
