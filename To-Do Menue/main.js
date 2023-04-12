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

  async function getTasks() {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET"
    })
    const json = await response.json()
  
    renderTasks(json)
  }

  getTasks()
})

/*let NewObject = document.createElement("li");
  const newTaskElementInput = document.createElement("input")
  newTaskElementInput.value = Input;
  newTaskElementInput.readOnly = true
  NewObject.append(newTaskElementInput)
  let edit_button = document.createElement("button");
  edit_button.title = "Bearbeiten";
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



  //Das Inputfeld wird geleert
  InputElement.value = "";
  Add.disabled = true;

  edit_button.addEventListener("click", () => {
    //debugger
    document.getElementById("edit_div").style.display = "block";
    document.getElementById("edit_input").value = newTaskElementInput.value.trim();
    let Save = document.getElementById("Save");
    let x = NewObject;
    

    Save.onclick = () => {
      let UpdatedText = document.getElementById("edit_input").value;
      newTaskElementInput.value = UpdatedText;
      document.getElementById("edit_div").style.display = "none";
    };
  }); 
});*/

/*window.onload = function() {
    const buttonElement = document.getElementById("Add");

    buttonElement.onclick = function() {
        alert("Erfolgreich hinzugefügt!");
    };
};*/

const tasksElement = document.getElementById("tasks");

async function getTasks() {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "GET"
  })
  const json = await response.json()

  renderTasks(json)
}

function renderTasks(tasks) {

  const tasksElement = document.getElementById("todo_ul");
  tasksElement.replaceChildren();

  Array.from(tasks).forEach(function (item) {
    const newTaskElement = document.createElement("li");
    const newTaskElementInput = document.createElement("input")
    newTaskElementInput.value = item.title;
    newTaskElementInput.readOnly = true
    newTaskElement.append(newTaskElementInput)

    const taskList = document.getElementById("todo_ul");
    taskList.append(newTaskElement);

    const edit_button = document.createElement("button");
    edit_button.classList.add("edit-button");
    edit_button.title = "Bearbeiten";
    edit_button.innerText = "Bearbeiten";
    newTaskElement.appendChild(edit_button);

    const delete_button = document.createElement("button");
    delete_button.classList.add("delete-button");
    delete_button.title = "Bearbeiten";
    delete_button.innerText = "x";
    newTaskElement.appendChild(delete_button);
    
    todo_ul.appendChild(newTaskElement);

    delete_button.addEventListener("click", () => {
      newTaskElement.remove();
      alert("Erfolgreich gelöscht")
    });

    edit_button.addEventListener("click", () => {
      //debugger
      document.getElementById("edit_div").style.display = "block";
      document.getElementById("edit_input").value = newTaskElementInput.value.trim();
      const Save = document.getElementById("Save");
      

      Save.onclick = () => {
        const updatedText = document.getElementById("edit_input").value;
        newTaskElementInput.value = updatedText;
        document.getElementById("edit_div").style.display = "none";
      };
    });
  })
}

getTasks();
