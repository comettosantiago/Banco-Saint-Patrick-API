const Sequelize = require("sequelize");
const { dbName, userDb, userPassword } = require("./config");

const connectDb = async () => {
    const sequelize = new Sequelize(dbName, userDb, userPassword, {
        host: "localhost",
        dialect: "mysql",
    });

    try {
        await sequelize.authenticate();
        console.log("Connected to DB");
    } catch (error) {
        console.log("Unable to connect to database: " + error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
