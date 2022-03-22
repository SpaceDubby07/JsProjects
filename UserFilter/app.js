const result = document.getElementById("result");
const filter = document.getElementById("filter");
// array to put data that we fetch
const listItems = [];

// call the getData function
getData();

// input listener
filter.addEventListener("input", (e) => filterData(e.target.value));

// fetch the api data
async function getData() {
  const response = await fetch("https://randomuser.me/api?results=50");

  // destructure results from the response
  const { results } = await response.json();

  // Clear results
  result.innerHTML = "";

  // loop through the results
  results.forEach((user) => {
    // create a list element
    const li = document.createElement("li");
    // push the list element into the listItem array
    listItems.push(li);

    // define the inner html of the li
    li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
          </div>
          `;

    // append the li to the result element
    result.appendChild(li);
  });
}

// get the target value for our search
function filterData(searchTerm) {
  listItems.forEach((item) => {
    // does it match the user?
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
