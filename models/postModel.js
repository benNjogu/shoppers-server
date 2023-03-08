import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: String,
  discount: String,
  newPrice: String,
  sponsored: String,
  rating: String,
  images: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
