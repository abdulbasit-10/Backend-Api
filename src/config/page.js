import dotenv from 'dotenv';
dotenv.config();

export const PORT = Number(process.env.PORT || 4000);
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/app';
export const JWT_SECRET = process.env.JWT_SECRET || 'change_me';
