import mongoose from 'mongoose';

const { Schema } = mongoose;

const notesSchema = new Schema({
  userId: String,
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
