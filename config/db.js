import mongoose from "mongoose";

export const connectDB =async () => {
    (await mongoose.connect('mongodb+srv://vn:159753@cluster0.qfb3ujx.mongodb.net/?appName=Cluster0/food'));
    console.log("DB Connected")
}