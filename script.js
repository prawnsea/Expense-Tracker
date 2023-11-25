document.addEventListener("DOMContentLoaded", function () {
  // button thingz
  // pang get/select ng element
  const btnAdd = document.getElementById("btn-add");
  console.log(btnAdd);
  // getting them divs
  const dataDiv = document.querySelector("#data-container");
  btnAdd.addEventListener("click", addNew);
  // button function
  function addNew() {
    // getting them input valuez
    const expenseInput = document.getElementById("nameInput").value;
    const priceInput = document.getElementById("priceInput").value;
    // new elements (parent node)
    const newDiv = document.createElement("div");
    // new class sa parent node (child)
    newDiv.classList.add("row");
    // new element under class row (apo)
    const expenseElement = document.createElement("div");
    // new element under row (apo sa tuhod (bootstrap thingz)) expense
    expenseElement.classList.add("col");
    expenseElement.textContent = expenseInput;
    // price
    const inputElement = document.createElement("div");
    inputElement.classList.add("col");
    inputElement.innerText = priceInput;
    // action
    const actionDiv = document.createElement("div");
    const iconElement = document.createElement("img");
    iconElement.src = "/SVGs/trash.svg";

    // ihalo mo na insan (append)
    actionDiv.appendChild(iconElement);

    newDiv.appendChild(expenseElement);
    newDiv.appendChild(inputElement);
    newDiv.appendChild(actionDiv);

    dataDiv.appendChild(newDiv);
    console.log(dataDiv);
  }
});
