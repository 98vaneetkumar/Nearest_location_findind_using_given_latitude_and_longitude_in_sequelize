const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/addlocation",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.locationController.Add,
        req.body,
        req,
        res
      );
    }
  );

router.get(
    "/getdetails",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.locationController.get,
        req.body,
        req,
        res
      );
    }
);
  

//Get record of nearest location
router.get(
    "/getsMethod1",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.locationController.getsMethod1,
        req.body,
        req,
        res
      );
    }
);

router.get(
    "/getsMethod2",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.locationController.getsMethod2,
        req.body,
        req,
        res
      );
    }
);



module.exports = router;