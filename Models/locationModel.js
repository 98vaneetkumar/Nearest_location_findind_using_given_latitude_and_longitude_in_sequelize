const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;

const latilogi = sequelize.define(
  "latilogi",
  {
    location_Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name:{
      type:DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING,
    },
    lat:{   //latitude
        type:DataTypes.FLOAT,
    },
    lng:{  //Logituted
        type:DataTypes.FLOAT
    } 
  },
  {
    freezeTableName: true,
  }
);

module.exports = latilogi;
