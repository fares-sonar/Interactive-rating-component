const numbers = document.querySelectorAll(".numbers span");
const span = document.querySelector(".paragraph span");
const btn = document.querySelector(".btn");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    for (let i = 0; i <= numbers.length; i++) {}
    number.classList.add("active");
    span.innerText = number.innerText;
  });
});

btn.onclick = () => {
  const box2 = document.querySelector(".box-2");
  const box1 = document.querySelector(".box-1");
  box2.style.display = "block";
  box1.style.display = "none";
};
