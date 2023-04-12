const InputElement = document.getElementById("InputElement");
const Add = document.getElementById("Add");
const todo_ul = document.getElementById("todo_ul");

Add.disabled = true;

//Button wird erst aktiviert, wenn etwas im input steht
InputElement.addEventListener("input", () => {
  if (InputElement.value.trim() !== "") {
    Add.disabled = false;
  } else {
    Add.disabled = true;
  }
});

//Events der Buttons Löschen/Bearbeiten/Speichern
Add.addEventListener("click", () => {
  let Input = InputElement.value;
  let NewObject = document.createElement("li");
  NewObject.innerText = Input;
  let edit_button = document.createElement("button");
  edit_button.innerText = "Bearbeiten";
  NewObject.appendChild(edit_button);
  let delete_button = document.createElement("button");
  delete_button.innerText = "x";
  NewObject.appendChild(delete_button);
  todo_ul.appendChild(NewObject);

  //Fügt das Objekt ganz oben ein
  //todo_ul.insertBefore(NewObject, todo_ul.firstChild);

  delete_button.addEventListener("click", () => {
    NewObject.remove();
    //alert("Erfolgreich gelöscht")
  });

  const tasksElement = document.getElementById("tasks");

  async function getTasks() {
    const response = await fetch("http://localhost:5500/tasks", {
      method: "GET"
    })
    const json = await response.json()

    renderTasks(json)
  }

  function renderTasks(tasks) {
    tasksElement.replaceChildren();

    Array.from(tasks).forEach(function (item) {
      const liElement = document.createElement("li")
      liElement.innerText = item.title;
      tasksElement.append(liElement)
    })
  }

  //Das Inputfeld wird geleert
  InputElement.value = "";
  Add.disabled = true;

  edit_button.addEventListener("click", () => {
    document.getElementById("edit_div").style.display = "block";
    document.getElementById("edit_input").value = NewObject.innerText.split("x")[0].trim();
    let Save = document.getElementById("Save");
    let x = NewObject;
    

    Save.onclick = () => {
      let UpdatedText = document.getElementById("edit_input").value;
      x.innerText = UpdatedText;
      x.appendChild(delete_button);
      x.appendChild(edit_button);
      document.getElementById("edit_div").style.display = "none";
    };
  });
});

/*window.onload = function() {
    const buttonElement = document.getElementById("Add");

    buttonElement.onclick = function() {
        alert("Erfolgreich hinzugefügt!");
    };
};*/

