// import { Router } from "express";
// const logoutRouter = Router();

// logoutRouter.get("/", (req, res) => {
//   if (req.isAuthenticated()) {
//     const name = req.session.username;
//     req.logout((error) => {
//       if (error) {
//         res.json(error);
//       }
//       res.render("pages/logout", { name: name });
//     });
//   } else {
//     res.redirect("/login");
//   }
// });

// export default logoutRouter;

//import { Router } from "express";
const { Router } = require("express");
const loginRouter = Router();
//import { loginController } from "../controller/loginController.js";
const { loginController } = require("../controller/loginController");
//import passport from "passport";
const passport = require("passport");

loginRouter.get("/login", loginController.get);
loginRouter.get("/login/faillogin", loginController.errorLogin);

loginRouter.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/login/faillogin" }),
  loginController.postLogin
);

//export default loginRouter;
module.exports = loginRouter;
