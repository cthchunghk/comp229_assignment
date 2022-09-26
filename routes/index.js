var express = require("express");
var router = express.Router();

// Getting POST body by using body-parser API
// Express is already included the API, so just use it directly
router.use(express.json());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Front page" });
});

// About page defining
router.get("/about", (req, res, next) => {
  res.render("about", { title: "About me" });
});

// Projects page defining
router.get("/projects", (req, res, next) => {
  res.render("projects", { title: "Projects" });
});

// Services page defining
router.get("/services", (req, res, next) => {
  res.render("services", { title: "Services" });
});

// Contact page defining
router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact me" });
});

// Defining Send Message function by HTTP POST method
router.post("/sendMsg", (req, res, next) => {
  // console.log(req.body);
  var post_body = req.body;
  // Show the POST message in console
  console.log(post_body);
  //res.send(post_body);
  res.render('msg_sent', {senderName: post_body.name});
});

module.exports = router;
