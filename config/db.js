import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connection to mongodb successfully');
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
};

export default connectDB;
