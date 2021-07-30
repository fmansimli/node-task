import db from "./db";
export default async function dbSync() {
  try {
    await db.sync({ alter: true });
    console.log("db synchronization successfully completed...");
  } catch (error) {
    console.error(`an error ocurred!! message::> ${error.message}`);
  }
}
