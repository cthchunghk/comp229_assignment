/*
  File Name: index.js
  Student Name: Ting Hin CHUNG
  Student ID: 301287013
  Date: 27th Sept 2022
*/

var express = require("express");
var router = express.Router();
var content = "content/";

// Getting POST body by using body-parser API
// Express is already included the API, so just use it directly
router.use(express.json());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Front page" });
});

// About page defining
// router.get("/about", (req, res, next) => {
//   res.render("about", { title: "About me" });
// });

router.get("/about", (req, res, next) => {
  res.render("content", { title: "About me", content_path: content + "about" });
});

// Projects page defining
router.get("/projects", (req, res, next) => {
  res.render("content", {
    title: "Projects",
    content_path: content + "projects",
  });
});

// Services page defining
router.get("/services", (req, res, next) => {
  res.render("content", {
    title: "Services",
    content_path: content + "services",
  });
});

// Contact page defining
router.get("/contact", (req, res, next) => {
  res.render("content", {
    title: "Contact me",
    content_path: content + "contact",
  });
});

// Defining Send Message function by HTTP POST method
router.post("/sendMsg", (req, res, next) => {
  // console.log(req.body);
  var post_body = req.body;
  // Show the POST message in console
  console.log(post_body);
  // Sending the user to msg_sent page, and passing the name user input to next page and show to user
  res.render("msg_sent", { senderName: post_body.name });
});

router.get("/test", (req, res, next) => {
  res.render("partials/contents", { content_path: "../dummy" });
});

module.exports = router;
