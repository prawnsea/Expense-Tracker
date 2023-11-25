document.addEventListener("DOMContentLoaded", function () {
  // button thingz
  // pang get/select ng element
  const btnAdd = document.getElementById("btn-add");
  console.log(btnAdd);
  // getting them divs
  const dataDiv = document.querySelector("#data-container");
  btnAdd.addEventListener("click", addNew);
  // button function
  let totalPrice = 0; // para sa adding later
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
    const priceElement = document.createElement("div");
    priceElement.classList.add("col");
    priceElement.innerText = priceInput;
    // total
    const totalDiv = document.createElement("div");
    totalDiv.classList.add = ("col");
    totalDiv.textContent = 
    // action
    const iconElementDiv = document.createElement("div");
    iconElementDiv.classList.add('col');
    const iconElement = document.createElement("img");
    iconElement.id = "delete-icon";
    iconElement.src = "deleteIcon.svg";
    // removing event using delete icon
    iconElement.addEventListener("click", function () {
      newDiv.remove();
    });
    // ihalo mo na insan (append)
    actionDiv.appendChild(iconElement);
    //displaying the total

    // adding the new added elements in the HTML
    newDiv.appendChild(expenseElement);
    newDiv.appendChild(priceElement);
    newDiv.appendChild(actionDiv);
    newDiv.appendChild(totalDiv);

    dataDiv.appendChild(newDiv);
  }
});
