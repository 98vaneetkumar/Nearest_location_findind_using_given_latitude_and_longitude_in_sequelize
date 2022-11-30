const Service = require("../service");
module.exports = {
  Add: async (data) => {
    let userdata = {
      name:data.name,
      address: data.address,
      lat: data.latitude,
      lng: data.logitude,
    };
    let user = await Service.locationService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add location successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add location ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.locationService.getlocation();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
  getsMethod1: async (data,req,res) => {
    let latitude=req.body.lat|| 37;
    let longitude=req.body.lng||-122;
    console.log("In controller",latitude)
    console.log(longitude)
    console.log(typeof(latitude))
    const user = await Service.locationService.getlocationallMethod1(latitude,longitude);
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
  getsMethod2: async (data,req,res) => {
    let latitude=req.body.lat|| 37;
    let longitude=req.body.lng||-122;
    const user1 = await Service.locationService.getlocationallMethod2(latitude,longitude);
    if(user1){
      return {
        status: "Success",
        user: user1,
      };
    }
  }
};
