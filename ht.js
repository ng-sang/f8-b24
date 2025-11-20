//event object:object mô tả thông tin của 1 sự kiện

//bắt sự kiện mousedown
//mousedown: sự kiện khi nhấn chuột xuống
//key (keyup, keydown): sự kiện khi nhấn phím
//which: xác định phím nào được nhấn

//event.button: xác định nút chuột nào được nhấn (0: trái, 1: giữa, 2: phải)
//shiftKey: xác định phím shift có được nhấn hay không
//altKey: xác định phím alt có được nhấn hay không
//ctrlKey: xác định phím ctrl có được nhấn hay không
//offsetX, offsetY: tọa độ con trỏ chuột so với phần tử hiện tại
//clientX, clientY: tọa độ con trỏ chuột so với cửa sổ trình duyệt
//target: phần tử nơi sự kiện được kích hoạt
//target với this: target luôn luôn là phần tử nơi sự kiện được kích hoạt, this là phần tử lắng nghe sự kiện
// btn.addEventListener("mousedown", (event) => {
//   console.log(event);
//   if (event.offsetX <= 20) {
//     btn.style.backgroundColor = "red";
//     console.log(event.offsetX);
//   } else {
//     console.log("lớn hơn 50");
//     btn.style.backgroundColor = "blue";
//   }
// });

//thương thức:
//event.preventDefault(): ngăn chặn hành vi mặc định của trình duyệt
//event.stopPropagation(): ngăn chặn sự kiện nổi bọt (bubbling)
//contextmenu: sự kiện khi nhấn chuột phải
const btn = document.querySelector("button");
const box = document.querySelector(".box");
btn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("btn clicked");
});
box.addEventListener("click", (event) => {
  console.log("box clicked");
});
