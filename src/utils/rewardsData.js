import { months } from "moment";
import { calculateRewardPoints } from "./calculateRewardPoints.js";

export const processTransactions = (transactions) => {
  const summary = {};

  transactions.forEach(({ customerId,name, amount, date }) => {
    const month = new Date(date).toLocaleString("default", { month: "short", year: "numeric" });
    const points = calculateRewardPoints(amount);

    if (!summary[customerId]) {
      summary[customerId] = {name,months:{}};
    }

    if (!summary[customerId].months[month]) {
      summary[customerId].months[month] = 0;
    }

    summary[customerId].months[month] += points;
  });

  return summary;
};