export default function getBarData(transactions) {
  let finalData = [
    {
      name: "Jan",
      "Total Sales": 0,
    },
    {
      name: "Feb",
      "Total Sales": 0,
    },
    {
      name: "Mar",
      "Total Sales": 0,
    },
    {
      name: "Apr",
      "Total Sales": 0,
    },
    {
      name: "May",
      "Total Sales": 0,
    },
    {
      name: "Jun",
      "Total Sales": 0,
    },
    {
      name: "July",
      "Total Sales": 0,
    },
    {
      name: "Aug",
      "Total Sales": 0,
    },
    {
      name: "Sep",
      "Total Sales": 0,
    },
    {
      name: "Oct",
      "Total Sales": 0,
    },
    {
      name: "Nov",
      "Total Sales": 0,
    },
    {
      name: "Dec",
      "Total Sales": 0,
    },
  ];
  try {
    transactions.map((t) => {
      let month = t.date.split("/")[0];
      let monthIdx = month - 1;
      finalData[monthIdx]["Total Sales"] += t.total;
    });
  } catch (error) {
    console.log(error)
  }
  return finalData;
}
