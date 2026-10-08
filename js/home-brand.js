// Homepage editorial copy: keeps the destination limited to /events.
const descriptions = [
  "Not just a name. A feeling.",
  "Made to share. Made with love.",
  "Where the good stories begin.",
  "Online sold out. The story continues."
];
const slides = [...document.querySelectorAll(".slider--bg .slider__item")];
const indicator = document.getElementById("slide-index");
const caption = document.getElementById("slide-copy");
const setCaption = () => {
 const index = slides.findIndex(s => s.classList.contains("slider__item--current"));
 if (index < 0) return;
 indicator.textContent = String(index+1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
 caption.textContent = descriptions[index] || "";
};
new MutationObserver(setCaption).observe(document.querySelector(".slider--bg"),{attributes:true,subtree:true,attributeFilter:["class"]});
window.addEventListener("load",setCaption);
setTimeout(()=>document.body.classList.remove("loading"),6500);
