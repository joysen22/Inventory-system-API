const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name must be require."],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: [true, "Description must be require."],
    },
    imageURLs: {
      type: [String],
      validate: {
        validator: (value) => {
          if (!value || !Array.isArray(value)) {
            return false;
          }
          let allOk = true;
          value.forEach((v) => {
            if (!validator.isURL(v)) {
              allOk = false;
            }
          });
          return allOk;
        },
        message: "Provide a valid image URL",
      },
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "Unit value can't be {VALUE}, must be kg/litre/bag/pcs",
      },
    },
    category: {
      type: String,
      required: [true, "category must be require."],
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
      },
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
