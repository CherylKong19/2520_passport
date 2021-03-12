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
      } else {
        var ary=[]
        ary.push(sessions)
        console.log(ary)
        
      }res.render("admin", {
        user: req.user,
        ary:ary,
      });
  });
});
module.exports = router;
