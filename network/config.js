require("dotenv").config();
const config = {
    portServer: process.env.PORT_SERVER ?? 3001,
    hostServer: process.env.HOST_SERVER ?? "http://localhost",
};

module.exports = config;
