document.addEventListener("DOMContentLoaded", function () {
  // Button Functionalities

  // document.querySelector to match/select the element in the HTML
  const btnAdd = document.getElementById("btn-add");
  console.log(btnAdd);
  // Getting the div for the elements that will be added
  const dataDiv = document.querySelector("#data-container");
  btnAdd.addEventListener("click", addNew);
  // Function for button
  function addNew() {
    // Getting the input values
    const expenseInput = document.getElementById("nameInput").value;
    const priceInput = document.getElementById("priceInput").value;
    // Creating new Element

    const newDiv = document.createElement("div");
    // Creating new class under that element
    newDiv.classList.add("row");

    // Creating new elements for the input expense name
    const expenseElement = document.createElement("div");
    expenseElement.classList.add("col");
    expenseElement.textContent = expenseInput;
    // for the price input
    const inputElement = document.createElement("div");
    inputElement.classList.add("col");
    inputElement.innerText = priceInput;
    // for the action input
    const actionDiv = document.createElement("div");
    const iconElement = document.createElement("img");
    iconElement.src = "/SVGs/trash.svg";
    // appending the iconElement to actionDiv
    actionDiv.appendChild(iconElement);

    newDiv.appendChild(expenseElement);
    newDiv.appendChild(inputElement);
    newDiv.appendChild(actionDiv);

    dataDiv.appendChild(newDiv);
    console.log(dataDiv);
  }
});
