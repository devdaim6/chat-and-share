import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

const ImageSchema = new mongoose.Schema({
  imageId: { type: String, required: true, unique: true },
  message: { type: String },
  imageData: { type: String, required: true },
  scheduledForDeletion: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChatRoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  messages: [
    {
      sender: { type: String, required: true },
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Image =
  mongoose.models.Image || mongoose.model("Image", ImageSchema);
export const ChatRoom =
  mongoose.models.ChatRoom || mongoose.model("ChatRoom", ChatRoomSchema);
export { connectDB };
