const express = require("express");
const cors = require("cors");
const databaseConnect = require("./network/database");
const { portServer, hostServer } = require("./network/config");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(portServer, () => {
    databaseConnect();
    console.log(`server running in ${hostServer}:${portServer}`);
});

