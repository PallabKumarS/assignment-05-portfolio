import mongoose from "mongoose";

let isConnected = false;

async function dbConnect() {
  if (!isConnected) {
    await mongoose.connect(process.env.DATABASE_URL as string, {
      dbName: "portfolioDB",
    });
    isConnected = true;
  }
}

export default dbConnect;
