const express = require('express');
const router = express.Router();
const {addUser, showAllusers, showSpecifiedUser, modifyUser, removeUser} = require("../controller/userController")
router.route("/")
.post(addUser)
.get(showAllusers)

router.route("/:id")
.get(showSpecifiedUser)
.put(modifyUser)
.delete(removeUser)

module.exports = router;