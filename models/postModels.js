import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  sponsored: Boolean,
  rating: String,
  Image: [String],
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
