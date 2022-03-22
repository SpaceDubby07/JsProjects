// menu items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Buttery and fluffy with golden, crisp edges! Stacked, with your choice of chocolate or caramel drizzle, blueberries, banana, or strawberries`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Double beef patty on a pretzel bun, lettuce, tomato, bacon, and our special sauce. Choice of fries or onion rings `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Our signature milkshake, add whatever candy or toppings your heart desires and we will destroy your brain with creativity `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Toast, eggs (cooked to your preference), and a side of our signature hash sprinkled with sharp cheddar and hot sauce `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Juicy beef patty, lettuce, tomato, your choice of cheese and an egg over easy ready to pop `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Not your average oreo milkshake! A strawberry to dress the glass, coated in oreo crumbs, a chocolatey milk froth, and our rich oreo cream shake, with a side of extra oreos `,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A fresh baked biscuit, bacon, tomato, an egg, cheese and lettuce. Order with a side of our signature hash browns `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `The classic cheeseburger with a side of fries on a rustic cutting board. Simple and elegant, on a brioche bun  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `A Chocolate or Vanilla milkshake topped with whipped cream, to share with a buddy, our fun bendy straws add a unique twist to this classic`,
  },
  {
    id: 10,
    title: "Filet Mignon",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `This prime cut of delicious filet, cuts like butter and melts in your mouth with every bite. Pairs with our wine sauce, a side of asparagus and roasted potato`,
  },
  {
    id: 11,
    title: "Burrito Entree",
    category: "dinner",
    price: 19.99,
    img: "./images/item-11.jpeg",
    desc: `Freshly made tortilla burrito. Beef/chicken/shrimp/pork, lettuce, pico, cheese, our mexican seasoning blend. Topped with sour cream, guacamole, and drizzled with queso`,
  },
  {
    id: 11,
    title: "Chicken/Veal/Eggplant Parmesan",
    category: "dinner",
    price: 19.99,
    img: "./images/item-12.jpeg",
    desc: `The classic, cheese, spagetti, golden brown italian breaded chicken breast/veal or eggplant, and our homemade tomato sauce. Ask for freshly grated parmesan`,
  },
  {
    id: 12,
    title: "Mozzarella Sticks",
    category: "Appetizers",
    price: 8.99,
    img: "./images/item-13.jpeg",
    desc: `Homemade breaded fried mozarella cheese, golden and crispy with a side of marinara sauce`,
  },
  {
    id: 13,
    title: "Nachos",
    category: "Appetizers",
    price: 10.99,
    img: "./images/item-14.jpeg",
    desc: `Our signature homemade tortilla chips, tomato, cheese, peppers, refried beans, with a queso drizzle`,
  },
  {
    id: 14,
    title: "Stuffed Mushrooms",
    category: "Appetizers",
    price: 7.99,
    img: "./images/item-15.jpeg",
    desc: `Stuffed baby mushrooms, with our signature breadcrumnb, garlic and butter stuffing`,
  },
];

// select elements we want to manipulate
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// basically select the entire dom content and we can load stuff to it dynamically.
window.addEventListener("DOMContentLoaded", () => {
  // function: display the menu items, and the dataset is menu
  displayMenuItem(menu);

  // function: display the category buttons
  displayCategoryButtons();
});

// function - display category buttons
const displayCategoryButtons = () => {
  // reduce the menu categories into unique values
  const categories = menu.reduce(
    (values, item) => {
      // if category values don't exist in the reduced array, we push them into it.
      // our starting array has the ['all'] category we want that hardcoded
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // map through the categories and display them as buttons in innerhtml
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;

  // select the filter buttons, and for each of them we want to select the data-id
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // target the data-id
      const category = event.currentTarget.dataset.id;

      // filter the menu category
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // if category is all, display all menu items, if not, just display the category we select.
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
};

// function - display menu items
const displayMenuItem = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="${item.title}" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};
