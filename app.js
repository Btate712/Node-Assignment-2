const express = require("express");

const root = require("./routes/root");
const usersRoute = require("./routes/users");

const app = express();

app.use("/users", usersRoute);
app.use("/", root);

app.listen(3000);