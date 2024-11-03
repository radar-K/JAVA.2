const priceEl = document.getElementById("prisInput");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
     const price = parseFloat(priceEl.value) 
     const moms = price * 0.2;
     result.textContent = moms;
});