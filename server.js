const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "public")));

let loggedIn = false;
let code = "";

app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

app.get("/getcode", (req, res) => {
  // res.send(code);
  // if logged in then we request another code
  if(loggedIn){
    res.send(code);
  }
});

app.get("/*", (_, res) => {
  // sample code
  //'/?code=FiZEZ78B23U_PlCoDh68xxz3vq7dpISUlF8MkXojIvQvr&state=ZW56TkR3aHZvel9BWE5iUk1FaUZLM0otR1dKY1pSfkhBN0NGYUp3eEZvaQ%3D%3D'
  const urlParams = new URLSearchParams(res.req.url);
  if(urlParams.get('/?code')){
    code = urlParams.get('/?code');
    loggedIn = true;
  }
  
  res.sendFile(join(__dirname, "index.html"));
});

process.on("SIGINT", function() {
  process.exit();
});

module.exports = app;
