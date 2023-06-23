import mongoose from 'mongoose';

const { Schema } = mongoose;

export const MongooseConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/notes');
    console.log('Connection to mongodb successfully');
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
};

const notesSchema = new Schema({
  title: String,
  tags: Array,
  body: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  refreshToken: String,
});

export const Notes = mongoose.model('Notes', notesSchema);
export const User = mongoose.model('User', userSchema);
