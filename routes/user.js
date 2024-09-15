const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userControllers = require("../controllers/users.js");

router.route("/signup")
.get(  userControllers.renderSignupFrom)
.post(wrapAsync(userControllers.signupUser ));

router.route("/login")
.get( userControllers.renderLoginFrom)
.post(
    saveRedirectUrl,
     passport.authenticate("local",
     {failureRedirect:"/login", failureFlash: true}),
     userControllers.loginUser );

router.get("/logout",userControllers.logoutUser );

module.exports = router;