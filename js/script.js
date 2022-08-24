const input = document.getElementById("inputText");
const btn = document.getElementById("btn");
const tasks = document.getElementById("tasks");
const notasks = document.getElementById("notasks");

function action_btn() {
  /* Если див с классом tasks не пустой(пустой возвращает false, !пустой == true), 
  тоесть мы добавили уже запись, то скрываем див notasks */
  if (!tasks.textContent) {
    notasks.classList.add("none");
  }
  console.log(tasks.textContent);
  const task = tasks.appendChild(document.createElement("div"));
  const checkbox = task.appendChild(document.createElement("input"));
  const del_btn = task.appendChild(document.createElement("button"));
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  task.classList.add("task");
  del_btn.classList.add("del-btn");
  task.append(checkbox);
  task.append(input.value);
  task.append(del_btn);
  del_btn.append("Delete");
  input.value = "";
  del_btn.onclick = function () {
    task.classList.add("none");
  };
  checkbox.onclick = function () {
    task.classList.toggle("checked");
  };
  console.log(notasks.classList);
  console.log(task.classList);
}

btn.onclick = action_btn;
