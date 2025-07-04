import { Sequelize } from "sequelize";

// Використовуйте змінні середовища для підключення до бази даних
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

export default db;
