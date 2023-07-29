import Spare from "../models/sparepart.model.js";
import User from "../models/user.model.js";
import Services from "../models/service.model.js";
import Transaction from "../models/transaction.model.js";
import tryCatch from "../utils/tryCatch.js";
import { HttpStatusCode } from "../../../node_modules/axios/index.js";
import { HttpResponse } from "../utils/HttpResponse.js";

export const getDashboardData = tryCatch(async (req, res, next) => {
  const transactions = await Transaction.find();
  const totalSales = transactions.reduce((sum, curr) => sum + curr.total, 0);
  const totalUsers = await User.count(); // User's Model.count();
  const totalServices = await Services.count(); // Service's Model.count();
  const totalSpareParts = await Spare.count(); // SparePart's model.count();

  // Calculating the user deomgraphics:
  const general = await User.count({ role: 0 });
  const employee = await User.count({ role: 1 });
  const admin = await User.count({ role: 2 });

  const userDemographics = { general, employee, admin };
  const systemStats = {
    sales: totalSales,
    users: totalUsers,
    services: totalServices,
    spareParts: totalSpareParts,
  };
  const responseData = {
    userDemographics,
    systemStats,
  };
  return res.send(
    new HttpResponse(
      "Data fetched successfully",
      HttpStatusCode.Ok,
      responseData
    )
  );
});
