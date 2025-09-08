const express = require('express');
const router = express.Router();
const validateUserData = require("../middleware/middleware")
const {addUser, showAllusers, showSpecifiedUser, modifyUser, removeUser} = require("../controller/userController")
router.route("/")
.post(validateUserData, addUser)
.get(showAllusers)

router.route("/:id")
.get(showSpecifiedUser)
.put(validateUserData, modifyUser)
.delete(removeUser)

module.exports = router;