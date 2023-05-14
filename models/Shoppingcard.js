import mongoose from "mongoose";

const { Schema } = mongoose;

const shoppingcardSchema = new Schema({
  email: String,
  ids: [String],
});

const ShoppingCard =
  mongoose.models.ShoppingCard ||
  mongoose.model("Shoppingcard", shoppingcardSchema);

export default ShoppingCard;
