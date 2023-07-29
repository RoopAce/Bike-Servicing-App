export default function getFormattedReportData(transactions) {
    console.log(transactions, "\n\n\n")
  let formattedData = transactions.map((t) => {
    let newItems = 'koko'
    return {
      ...t,
      username: t.user.username,
      email: t.user.email,
      phone: t.user.phone,
      itemsFormatted: newItems,
    };
  });

  return formattedData;
}
