var express = require("express"),
  app = express();

//ejs
app.set("view engine", "ejs");


//port listening
app.listen(3000, function () {
  console.log(new Array(51).join("*"));
  console.log("\t LISTENING ON: \n\t\t localhost:3000");
  console.log(new Array(51).join("*")); 
});
