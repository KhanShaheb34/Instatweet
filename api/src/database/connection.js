const Sequelize = require("sequelize");

const config = {
  development: { dialect: "postgres" },
  production: { logging: false, dialect: "postgres" },
  docker: { logging: false, dialect: "postgres" },
};

const sequelize = new Sequelize(
  process.env.DB_URI,
  config[process.env.CURRENT_ENV || "development"]
);

(async () => {
  try {
    if (process.env.DB_SETUP === "true") {
      await sequelize.sync({ force: true });
      await sequelize.sync();
    }
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

module.exports = sequelize;
