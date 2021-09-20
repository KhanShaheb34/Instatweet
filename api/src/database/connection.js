const Sequelize = require("sequelize");

const config = {
  development: { dialect: "postgres" },
  production: { logging: false, dialect: "postgres" },
  docker: { logging: false, dialect: "postgres" },
};

const sequelize = new Sequelize(
  process.env.DB_URI,
  config[process.env.NODE_ENV || "development"]
);

const connectDb = async () => {
  if (process.env.DB_SETUP === "true") {
    await sequelize.sync({ force: true });
    await sequelize.sync();
  }
  await sequelize.authenticate();
};

let retries = 5;

(async () => {
  while (retries) {
    try {
      await connectDb();
      console.log("Connection has been established successfully.");
      break;
    } catch (error) {
      console.error("Unable to connect to the database:", error.message);
      retries -= 1;
      console.log(`Retries left: ${retries}\nPlease wait 5 seconds...`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
})();

module.exports = sequelize;
