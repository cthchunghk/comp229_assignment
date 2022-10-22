var authRouter = require("./auth");
var staticRouter = require("./static-content");
var businessRouter = require("./business-contact");

function useRouting(app) {
  app.use("/", staticRouter);
  // app.use("/users", usersRouter);
  app.use("/auth", authRouter);
  app.use("/business", businessRouter);
}


module.exports = {
    useRouting
}