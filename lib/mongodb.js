import mongoose from 'mongoose';

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("CONNECTED TO DB");
    } catch (error) {
        console.log("DB ERROR", error);
    }
};
