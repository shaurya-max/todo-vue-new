import { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  phoneNo: string;
  password: string;
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  password: { type: String, required: true },
});

export default UserSchema;
