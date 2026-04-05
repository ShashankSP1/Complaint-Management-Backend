import app from "./app.js";
import dotenv from "dotenv";
import sequelize from "./config/sequelize.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log("PostgreSQL Connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};

startServer();
