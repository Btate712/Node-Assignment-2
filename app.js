const express = require("express");

const root = require("./routes/root");
// const usersRoute = require("./routes/users");

const app = express();

app.use("/", root);

// app.use(usersRoute);

app.listen(3000);