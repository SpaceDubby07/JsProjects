// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // we want to edit the height dynamically, not toggle a class
  // in case we add or remove new links for navigation
  // this will automatically adjust the nav height for us
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  // dynamically add height to our links container, then toggle it back to 0
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  // get y offset value
  const scrollHeight = window.pageYOffset;

  // get navheight value
  const navHeight = navbar.getBoundingClientRect().height;

  // once past navheight, add fixed-nav class, or remove it
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // when height > 500, add class or remove < 500
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    // prevent default behavior, which is auto scroll to section
    event.preventDefault();
    // navigate to specific spot, slice, start at index 1, removes the # in this instance
    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // hold the value of fixed nav or not in a variable
    const fixedNav = navbar.classList.contains("fixed-nav");

    // we get the position as an offset of the top, minus the navheight to offset the
    // extra nav space which will cause us to overshoot our sections
    let position = element.offsetTop - navHeight;

    // if navbar is fixed
    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    // scrollTo needs coordinates
    window.scrollTo({
      left: 0,
      top: position,
    });
    // this will close the navbar when we navigate on a smaller screen
    linksContainer.style.height = 0;
  });
});
