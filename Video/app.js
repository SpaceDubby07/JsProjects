// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// select elements to manipulate
const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", () => {
  // if button doesnt have slide class, add it, else remove it
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// load the preloader, then hide it
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
