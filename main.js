const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

btn.addEventListener("click", function () {
  //get random number between 0 and 3
  const randomNumber = getRandomNumber(0, 4);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
});
