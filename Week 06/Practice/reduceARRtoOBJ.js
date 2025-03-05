//USE CASE 2:

let expensesData = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expensesData.reduce((report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report
}, { Food: 0, Utilities: 0 });

console.log(expenseReport);
