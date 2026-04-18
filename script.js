const btn = document.getElementById("toggle-btn");
const aboutText = document.getElementById("about-text");

btn.addEventListener("click", function() {
  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    aboutText.style.display = "none";
    btn.textContent = "Read More";
  }
});
const skillFills = document.querySelectorAll(".skill-fill");

setTimeout(function() {
  skillFills.forEach(function(bar) {
    const targetWidth = bar.getAttribute("data-width");
    setTimeout(function() {
  skillFills.forEach(function(bar) {
    const targetWidth = bar.getAttribute("data-width");
    console.log(targetWidth);
    bar.style.width = targetWidth + "%";
  });
}, 300);
    bar.style.width = targetWidth + "%";
  });
}, 300);