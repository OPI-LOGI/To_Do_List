const InputElement = document.getElementById("InputElement");
const Add = document.getElementById("Add");
const todo_ul = document.getElementById("todo_ul");

Add.disabled = true;

InputElement.addEventListener("input", () => {
  if (InputElement.value.trim() !== "") {
    Add.disabled = false;
  } else {
    Add.disabled = true;
  }
});

Add.addEventListener("click", () => {
  let Input = InputElement.value
  let NewObject = document.createElement("li")
  NewObject.innerText = Input
  let delete_button = document.createElement("button");
  delete_button.innerText = "x"
  NewObject.appendChild(delete_button)
  todo_ul.appendChild(NewObject)

  delete_button.addEventListener("click", () => {
    NewObject.remove()
    //alert("Erfolgreich gelöscht")
  })

  InputElement.value = "";
  Add.disabled = true;
  //alert("Erfolgreich hinzugefügt!")
});


/*window.onload = function() {
    const buttonElement = document.getElementById("Add");

    buttonElement.onclick = function() {
        alert("Erfolgreich hinzugefügt!");
    };
};*/