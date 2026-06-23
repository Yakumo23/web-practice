const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", () => {
    const text = input.value;

    const li = document.createElement("li");
    li.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
});

