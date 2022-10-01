const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be require."],
      trim: true,
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "rajshahi",
          "chattogram",
          "sylhet",
          "khulna",
          "barishal",
          "rangpur",
          "mymensingh",
        ],
        message: "{VALUE} is not acorrect division!",
      },
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        default: "active",
      },
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
