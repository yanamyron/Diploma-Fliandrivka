import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const objectDb = {
  Date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  Name: {
    type: DataTypes.STRING,
  },
  PhoneNumber: {
    type: DataTypes.INTEGER,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Tg: {
    type: DataTypes.STRING,
  },
  Activity: {
    type: DataTypes.STRING,
  },
  formofactivity: {
    type: DataTypes.STRING,
  },
  howtocontact: {
    type: DataTypes.STRING,
  },
};
const objectMasterClasses = {
  Name: {
    type: DataTypes.STRING,
  },
  PhoneNumber: {
    type: DataTypes.INTEGER,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Tg: {
    type: DataTypes.STRING,
  },
  Activity: {
    type: DataTypes.STRING,
  },
  howtocontact: {
    type: DataTypes.STRING,
  },
};
export const MainEnrole = db.define("mainenroles", objectDb);
export const Goncharstvo = db.define("goncharstvo", objectDb);
export const Lipka = db.define("lipka", objectDb);
export const masterclasses = db.define("masterclasses", objectMasterClasses);
export const Sertificates = db.define("sertificates", objectDb);

(async () => {
  await db.sync();
})();
