const ul = document.getElementById("ul");
const li = ul.children;
const btn = document.getElementById("btn");
const box = document.querySelector(".box");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const score = document.querySelector(".score");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    for (let j = 0; j < li.length; j++) {
      li[j].style.cssText = ``;
    }
    e.currentTarget.style.cssText = `background-color:var(--orange);color:white;`;
    score.innerHTML = `You selected ${e.currentTarget.innerHTML} out of 5`;
  });
}

btn.addEventListener("click", () => {
  one.style.cssText = `display:none;`;
  two.style.cssText = `display:block !important;`;
});
