function calculateBill(costOfEachDish, totalPerson) {
    const totalBill = (costOfEachDish) =>
      costOfEachDish.reduce((acc, curr) => acc + curr, 0);
    const splitBill = totalBill / totalPerson;
    return { totalBill: totalBill, billPerPerson: splitBill };
  }
  