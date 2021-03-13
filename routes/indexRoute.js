const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

router.get('/admin', isAdmin, (req, res) => {
  const store = req.sessionStore;
  store.all((error, sessions) => {
      if (error) {
          console.log(error);
      }
      else{
        console.log(sessions);
        var arry = sessions
      }
      res.render("admin", {
      user: req.user,
      arry:arry
    });
  });
});

//need to change below to revoke sessions
// router.post(
//   "/del_session",
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/auth/login",
//   })
// );
module.exports = router;
