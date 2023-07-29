import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: {
    type: Number,
    default: function () {
      return this.items.reduce((sum, current) => sum + current.price, 0);
    },
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
