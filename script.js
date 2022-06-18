// const realName = document.getElementById("name1");
// const p = document.getElementById("para");

// realName.addEventListener("input", () => {
//   const str = realName.value;
//   p.innerText = str.toUpperCase();
// });

const btn = document.getElementById("btn-one");
const btn2 = document.getElementById("btn-two");
const btn3 = document.getElementById("btn-three");

const beaches = document.querySelectorAll("[data-set1]");
const mountains = document.querySelectorAll("[data-set0]");


btn.addEventListener("click", () => {
  for (let i = 0; i < beaches.length; i++) {
    beaches[i].style.display = "none";
  }

  for (let i = 0; i < mountains.length; i++) {
    mountains[i].style.display = "inline-block";
  }
});

btn2.addEventListener("click", () => {
  for (let i = 0; i < mountains.length; i++) {
    mountains[i].style.display = " none";
  }

  for (let i = 0; i < beaches.length; i++) {
    beaches[i].style.display = "inline-block";
  }
});


btn3.addEventListener("click", () => {
  for (let i = 0; i < beaches.length; i++) {
    beaches[i].style.display = "inline-block";
  }

  for (let i = 0; i < mountains.length; i++) {
    mountains[i].style.display = "inline-block";
  }
});

// data set1 = beaches, data-set0 = mountains
