import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);
// if modal is created it use that modal if not it create modal
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
