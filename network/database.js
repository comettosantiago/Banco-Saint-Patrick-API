const Sequelize = require("sequelize");

const connectDb = async () => {
    const sequelize = new Sequelize("banco_saint_patrick", "root", false, {
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
