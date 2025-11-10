let valueElement = document.getElementById("inputElement");

function onIncrement(){
      let priviousValue = valueElement.textContent;
      let updatedValue = parseInt(priviousValue) + 1;
      valueElement.textContent = updatedValue;
      if (updatedValue > 0){
        valueElement.style.color = "green";
      }
      else if (updatedValue < 0){
        valueElement.style.color = "red";
      }
}

function onDecrement(){
    let priviousValue = valueElement.textContent;
    let updatedValue = parseInt(priviousValue) - 1;
    valueElement.textContent = updatedValue;
    if (updatedValue < 0){
        valueElement.style.color = "red";
    }
    else if (updatedValue >0) {
         valueElement.style.color = "green";
    }
}


function onReset(){
     inputElement.textContent = 0;
     valueElement.style.color = "black"

}