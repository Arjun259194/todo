import mongoose from "mongoose";

export default async function connectDB() {
  const URI = process.env.MONGO_URI;

  try {
    if (!URI || URI === undefined) {
      throw new Error("MONGO_URI environment variable not set in .env file");
    }
    await mongoose.connect(URI);
  } catch (error: any) {
    console.error(error);
  }
}
