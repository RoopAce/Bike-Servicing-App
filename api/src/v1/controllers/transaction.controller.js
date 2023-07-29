import Transaction from "../models/transaction.model.js";
import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import tryCatch from "../utils/tryCatch.js";
import { HttpStatusCode } from "../../../node_modules/axios/index.js";
import { HttpResponse } from "../utils/HttpResponse.js";

export const createTransaction = tryCatch(async (req, res, next) => {
  const { items, cart_id, user_id } = req.body;
  const newItems = items.map((item) => ({
    name: item.name,
    price: item.price,
  }));

  const newTransaction = await Transaction.create({ items: newItems, user: user_id });
  await Cart.findByIdAndRemove(cart_id);

  return res.send(
    new HttpResponse(
      "Transaction processed successfully",
      HttpStatusCode.Ok,
      newTransaction
    )
  );
});

export const getTransactions = tryCatch(async (req, res, next) => {
  const transactions = await Transaction.find().populate({ path: 'user', select: 'username phone email', model: User });
  return res.send(
    new HttpResponse(
      "Fetched all the transactions",
      HttpStatusCode.Ok,
      transactions
    )
  );
});
