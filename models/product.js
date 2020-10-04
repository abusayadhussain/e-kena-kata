const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
    description: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxLength: 32,
    },
    category: {
      type: objectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
