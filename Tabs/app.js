// select elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  // id is the event.target of the dataset id, which we defined in html
  const id = event.target.dataset.id;

  // remove active from other buttons, and add it to the targeted button
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });
    // hide article, show article corresponding to active button
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    // select the element by its data id
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

