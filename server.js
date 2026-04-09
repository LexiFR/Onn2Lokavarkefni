const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");

const UltRoutes = require("./src/routes/ultrakill.routes")


app.set('views', path.join(__dirname, 'src/views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({  extended: true  }));

app.use("/", UltRoutes);


app.use((req, res, next) => {
  res.status(404).render('404', {title: 'Site not found'});
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Code got slimed out')
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("CTRL+C to stop");
});
