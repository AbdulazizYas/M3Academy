const express = require("express");
const app = express();
const db = require("./models");
const ejs = require("ejs");

const deptsRoutes = require("./routes/deptsRoutes");
const courseRoutes = require("./routes/coursesRoutes");
const folderRoutes = require("./routes/foldersRoutes");
const fileRoutes = require("./routes/filesRoutes");

db.sequelize.sync().then((_) => {
  app.listen(3000, (_) => {
    console.log("Running ...");
  });
});

// set the view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded(true));

// middleware for passing local variables for ejs templates
app.use(function (req, res, next) {
  //for specify the current section whether it was courses or departments
  res.locals.currentSection = req.originalUrl.split("/")[1];
  next();
});

app.get("/", (req, res) => {
  res.redirect("/departments");
});

app.use("/departments", deptsRoutes);
app.use("/courses", courseRoutes);
app.use("/folders", folderRoutes);
app.use("/files", fileRoutes);
