const { addmsg, getallmsg, allusers } = require("../Controller/messagesController");

const router = require("express").Router()

router.post("/addmsg", addmsg);

router.post("/getallmsg", getallmsg);

router.post("/allusers/:id", allusers);


module.exports = router;