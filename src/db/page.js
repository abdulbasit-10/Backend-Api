import mongoose from 'mongoose';

export async function connectDB(uri) {
  const connectionString = uri || process.env.MONGO_URI;
  if (!connectionString) throw new Error('MONGO_URI not set');
  mongoose.set('strictQuery', true);
  await mongoose.connect(connectionString);
  console.log('✅ MongoDB connected');
}

export async function disconnectDB() {
  await mongoose.connection.close();
  console.log('🛑 MongoDB disconnected');
}
