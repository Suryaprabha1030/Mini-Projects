const content = document.querySelector(".content");
const btnAdd = document.querySelector(".addbtn");

function getAppUpdate() {
  return JSON.parse(localStorage.getItem("surya") || [""]);
}

getAppUpdate().forEach((element) => {
  const textElement = createElement(element.id, element.content);
  content.insertBefore(textElement, btnAdd);
});

function createElement(id, content) {
  const textElement = document.createElement("textArea");
  textElement.classList.add("sticky");
  textElement.value = content;
  textElement.placeholder = "Enter here";
  textElement.addEventListener("change", () => {
    updateNote(id, textElement.value);
  });

  textElement.addEventListener("dblclick", () => {
    const check = confirm("Are you sure to delete");
    if (check) deleteNote(id, textElement);
  });

  return textElement;
}

function addSticky() {
  const notes = getAppUpdate();
  const noteOfObject = {
    id: Math.floor(Math.random() * 10000),
    content: "",
  };
  const textElement = createElement(noteOfObject.id, noteOfObject.content);
  content.insertBefore(textElement, btnAdd);
  notes.push(noteOfObject);
  saveNotes(notes);
}

btnAdd.addEventListener("click", () => addSticky());

function saveNotes(notes) {
  localStorage.setItem("surya", JSON.stringify(notes));
}

function updateNote(id, content) {
  const notes = getAppUpdate();
  const updateElement = notes.filter((note) => note.id == id)[0];
  updateElement.content = content;
  saveNotes(notes);
}

function deleteNote(id, textElement) {
  const notes = getAppUpdate().notes.filter((note) => note.id != id)[0];
  saveNotes(notes);
  content.removeChild(textElement);
}
