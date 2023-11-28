window.onload = function () {
  // Global Variables
  let expenseList = [];
  let totalAmount = 0;
  const selectCategory = document.getElementById("category-select");
  const amountInput = document.getElementById("amount-input");
  const expenseTable = document.getElementById("expense-table");
  const totalAmountHolder = document.getElementById("total-amount");

  // Button Function
  const btn = document.getElementById("add-btn");
  btn.addEventListener("click", addExpense);
  function addExpense() {
    const category = selectCategory.value;
    const amount = Number(amountInput.value);

    // Conditionals
    if (category === "") {
      alert("Please select a Category!");
      return;
    } else if (amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    const expense = { category, amount };
    expenseList.push(expense);
    totalAmount += amount;
    totalAmountHolder.textContent = "₱" + totalAmount;

    const newRow = expenseTable.insertRow();
    const cellCategory = newRow.insertCell();
    const cellAmount = newRow.insertCell();

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      const index = expenseList.indexOf(expense);
      if (index !== -1) {
        expenseList.splice(index, 1);
        totalAmount -= expense.amount;
        totalAmountHolder.textContent = "₱" + totalAmount;
        expenseTable.removeChild(newRow);
      }
    });

    cellCategory.textContent = expense.category;
    cellAmount.textContent = expense.amount;
    deleteCell.appendChild(deleteBtn);
  }
};
