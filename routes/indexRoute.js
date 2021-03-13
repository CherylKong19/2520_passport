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
        //console.log(sessions);
        var arry = sessions
      }
      res.render("admin", {
      user: req.user,
      arry:arry
    });
  });
});

router.post(
  "/del_session",
  (req,res) =>{
    let sesId = req.body.sessionID
    console.log("Ding, dong, ding,dong")
    console.log(sesId)
    let store = req.sessionStore

    store.destroy(sesId,(err) => {
      if (err){
        console.log(err)
      }
      else{
        store.sessionStore
        res.redirect("/admin")
      }
    })

  }
);
module.exports = router;
