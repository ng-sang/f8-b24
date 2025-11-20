//classList

// box.className += "ahihi";

// // console.log(box.classList[0]);
// //1. add(): thêm class
// box.classList.add("box1", "box2", "box3");

// //2. remove(): xóa class
// box.classList.remove("box2");

// //3. replace(): thay thế class
// box.classList.replace("box3", "content3");

// //4. contains(): kiểm tra class có tồn tại hay không, trả về true/false
// if (box.classList.contains("box1")) {
//   console.log("Có class box1");
//   console.log(box.classList.contains("box1"));
// } else {
//   console.log("Không có class box1");
// }

// //5. toggle(): nếu có class thì xóa, không có thì thêm vào
// box.classList.toggle("box8");
// box.classList.toggle("box8");

const box = document.querySelector(".box");
const btn = document.querySelector("button");

const animateTime = box.dataset.animationTime || "1s";
console.log(animateTime);

btn.addEventListener("click", () => {
  //   box.classList.toggle("show");
  btn.innerText = box.classList.contains("show") ? "Hide" : "Show";
  setTimeout(() => {
    // box.classList.add("hide");
    if (box.classList.contains("hide")) {
      box.classList.remove("hide");
    } else {
      box.classList.add("hide");
    }
  }, 300);
});

//dataset
// // là obj thuộc tính dùng để lấy các giá trị của các thuộc tính data- trong HTML
// console.log(box.dataset.id);
// box.dataset.name = "Nguyen Phạm Nhất Sang";
// box.dataset.age = 25;
// box.dataset.animateDurationDante = "2s";

// //Dom style
// console.log(box.style);
// box.style.color = "red";
// box.style.fontSize = "30px";
// box.style.border = "2px solid black";
// box.style.padding = "20px";
// box.style.backgroundColor = "yellow";
// const CSS = {
//   color: "blue",
//   fontSize: "40px",
//   border: "5px dashed green",
//   padding: "30px",
//   backgroundColor: "pink",
// };
// Object.assign(box.style, CSS); //gộp các thuộc tính style từ obj CSS vào box.style
// gán nhiều thuộc tính style cùng lúc
// box.style.cssText = "color: purple; font-size: 50px; border: 3px dotted orange; padding: 40px; background-color: lightgray;";
