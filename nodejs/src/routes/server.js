const newsRouter = require("./news");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const commissionRouter = require("./commission")

function route(app) {
  app.use("/news", newsRouter);

  app.use("/commission", commissionRouter)

  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/search", (req, res) => {
    console.log(req.query.p)
    res.render("search");
  });

  app.post("/search", (req, res) => {
    res.send("");
  });

  app.use("/courses", coursesRouter);

  app.use("/me", meRouter)

}
module.exports = route;
