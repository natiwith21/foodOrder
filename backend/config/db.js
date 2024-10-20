import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://natnaelabiy88:fenet@cluster0.vqrc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0.vqrc8.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
//"mongodb+srv://natnaelabiy88:fenet@cluster0.vqrc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0.vqrc8.mongodb.net/food-del"
