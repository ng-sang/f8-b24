const items = document.querySelectorAll("ul li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const span = item.querySelector("span");

    if (span.style.display == "none") {
      span.style.display = "flex";
    } else {
      span.style.display = "none";
    }
  });
});
