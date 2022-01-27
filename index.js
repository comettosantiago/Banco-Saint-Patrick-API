const express = require("express");
const app = express();
const databaseConnect = require("./network/database");
const cors = require("cors");
const { portServer } = require("./network/config");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(portServer, () => {
    databaseConnect();
    console.log("Servidor corriendo");
    console.log(portServer);
});