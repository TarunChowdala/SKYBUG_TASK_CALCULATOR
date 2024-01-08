let inputElement = document.getElementById("display");

let inputVal = "";

function onclickButton(buttonVal) {
  console.log(buttonVal);
  if (buttonVal === "AC") {
    inputVal = "";
    inputElement.value = inputVal;
  } else if (buttonVal === "del") {
    let sliceVal = inputVal.slice(0, -1);
    inputElement.value = sliceVal;
    inputVal = sliceVal;
  } else if (buttonVal === "=") {
    let total = eval(inputVal);
    inputElement.value = total;
  } else {
    inputVal += buttonVal;
    inputElement.value = inputVal;
  }
}
