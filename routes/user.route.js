const express = require("express");
const {getAllUsers, getAnUser, createAnUser, updateAnUser, delteAnUser} = require("../controllers/user.controller");
const router = express.Router();


router.post("/", createAnUser)
router.get("/", getAllUsers)
router.get("/:id", getAnUser)
router.patch("/:id", updateAnUser)
router.delete("/:id", delteAnUser)


module.exports = router;