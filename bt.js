const button = document.querySelector("#button1");
const container = document.querySelector("#todu");
const input11 = document.querySelector("#input1");

button.addEventListener("click", () => {
  if (input11.value === "") {
    return;
  }

  const allTasks = container.querySelectorAll("span");
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].textContent === input11.value) {
      alert("Công việc này đã tồn tại!");
      input11.value = "";
      return;
    }
  }
  const task = document.createElement("div");

  taskText = document.createElement("span");
  taskText.textContent = input11.value
    .replaceAll("<", "*")
    .replaceAll(">", "*")
    .replaceAll(".", "*")
    .replaceAll("@", "*");

  task.appendChild(taskText);
  container.appendChild(task);
  task.style.border = "2px solid black";
  task.style.padding = "10px";
  task.style.width = "90%";
  taskText.addEventListener("click", () => {
    if (taskText.style.textDecoration === "line-through") {
      taskText.style.textDecoration = "none";
    } else {
      taskText.style.textDecoration = "line-through";
    }
  });
  task.classList.add(
    "bg-violet-500",
    "flex",
    "justify-between",
    "items-center",
    "relative"
  );

  //tạo nút thêm
  const addmore = document.createElement("img");
  addmore.style.marginLeft = "20px";
  addmore.src = "https://cdn-icons-png.flaticon.com/512/992/992651.png?w=360";
  addmore.style.width = "20px";
  addmore.style.height = "20px";
  addmore.style.cursor = "pointer";
  addmore.classList.add("absolute", "left-[70%]");
  task.appendChild(addmore);

  //tạo nut xóa
  const addmore1 = document.createElement("img");
  task.appendChild(addmore1);
  addmore1.style.marginLeft = "20px";
  addmore1.src =
    "https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=360";
  addmore1.style.width = "20px";
  addmore1.style.height = "20px";
  addmore1.style.cursor = "pointer";
  addmore1.classList.add("absolute", "left-[80%]");
  addmore1.addEventListener("click", () => {
    container.removeChild(task);
  });
  //tạo ô thêm công việc
  addmore.addEventListener("click", () => {
    const seach = document.createElement("div");

    seach.classList.add("absolute", "left-0", "z-10", "bg-white");
    seach.style.height = "100%";
    seach.style.width = "100%";
    task.appendChild(seach);
    // tạo ô nhập trong ô thêm công việc
    const inputseach = document.createElement("input");
    seach.appendChild(inputseach);
    inputseach.style.height = "100%";
    inputseach.style.width = "65%";
    inputseach.style.marginRight = "10px";
    inputseach.style.border = "none";
    inputseach.style.outline = "none";

    // tạo nút thêm trong ô thêm công việc
    const buttonseach = document.createElement("button");
    buttonseach.textContent = "Add Task";
    buttonseach.style.height = "100%";
    buttonseach.style.width = "35%";
    buttonseach.style.border = "1px solid black";
    buttonseach.classList.add("absolute", "right-0", "top-0", "bg-violet-500");
    seach.appendChild(buttonseach);
    // đặt giá trị ban đầu của input là nội dung hiện tại của taskText
    inputseach.value = taskText.textContent;

    buttonseach.addEventListener("click", () => {
      // Cập nhật lại taskText với giá trị mới từ input

      taskText.textContent = inputseach.value;
      // Sau đó mới xóa seach
      seach.remove();
    });
  });
  input11.value = "";
});
