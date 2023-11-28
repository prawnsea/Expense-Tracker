document.addEventListener("DOMContentLoaded", function () {
  const btnAdd = document.getElementById("btn-add");
  let total = 0;
  // Button Add function
  btnAdd.addEventListener("click", addNew);

  function addNew() {
    // Variables
    const expenseInput = document.getElementById("expense-input").value;
    const priceInput = Number(document.getElementById("price-input").value);
    const totalExpense = document.getElementById("total-expense");
    // New added div
    const newElement = document.createElement("div");

    newElement.classList.add("row", "mb-3");
    // User expense
    const addedExpense = document.createElement("div");
    addedExpense.classList.add("col", "text-center");
    addedExpense.style.marginLeft = "10%";
    addedExpense.style.marginTop = "15px";
    addedExpense.textContent = expenseInput;

    // User price
    const addedPrice = document.createElement("div");
    addedPrice.classList.add("col", "text-center");
    addedPrice.style.marginRight = "10%";
    addedPrice.style.marginTop = "15px";
    addedPrice.innerHTML = priceInput;
    // User action (delete button)
    const trashSVG = document.createElement("div");
    trashSVG.classList.add("col", "text-center");
    trashSVG.style.marginTop = "15px";
    trashSVG.style.position = "relative";
    trashSVG.style.right = "10%";

    trashSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>`;
    trashSVG.addEventListener("click", function () {
      total -= Number(newElement.dataset.price);
      totalExpense.innerHTML = total;
      newElement.remove();
    });
    // User total
    total += Number(priceInput);
    totalExpense.innerHTML = total;
    newElement.dataset.price = priceInput;

    document.body.appendChild(newElement);
    newElement.appendChild(addedExpense);
    newElement.appendChild(addedPrice);
    newElement.appendChild(trashSVG);
  }
});
