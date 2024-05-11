window.onload = function () {
  const DESCRIPTION =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, leo in ultrices mattis, tellus quamtincidunt eros, id vestibulum nunc ligula vel leo. Nuncmagna leo, efficitur a quam eu, dignissim porttitor arcu. Etiam ac dignissim lacus. In mauris orci, interdum ac quamquis, finibus malesuada nunc.";

  const foods = {
    BREAKFAST: [
      {
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "pancakes",
        price: 3000,
        description: DESCRIPTION,
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1675676675272-e1093eeb3627?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "bacon overflow",
        price: 3000,
        description: DESCRIPTION,
      },
      {
        img: "https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "country delight",
        price: 8000,
        description: DESCRIPTION,
      },
    ],
    SHAKES: [
      {
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "milkshake",
        price: 2000,
        description: DESCRIPTION,
      },
      {
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "oreo dream",
        price: 7000,
        description: DESCRIPTION,
      },
      {
        img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "quarantin buddy",
        price: 8000,
        description: DESCRIPTION,
      },
    ],
    LUNCH: [
      {
        img: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "diner",
        price: 10000,
        description: DESCRIPTION,
      },
      {
        img: "https://images.unsplash.com/photo-1617054280194-9eb3deda5325?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "american classic",
        price: 4000,
        description: DESCRIPTION,
      },
      {
        img: "https://images.unsplash.com/photo-1617054280194-9eb3deda5325?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "egg attack",
        price: 3000,
        description: DESCRIPTION,
      },
    ],
    DINNER: [
      {
        img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "bison steak",
        price: 17000,
        description: DESCRIPTION,
      },
    ],
  };

  let selectedCategoryMenu = "ALL";

  const createMenu = function () {
    const createAllMenus = () => {
      const allMenus = [];
      for (let menus in foods) {
        allMenus.push(...foods[menus]);
      }

      return allMenus;
    };

    const foodMenus =
      selectedCategoryMenu === "ALL"
        ? createAllMenus()
        : foods[`${selectedCategoryMenu}`];

    const foodListElement = document.getElementById("foodlist");
    foodListElement.innerHTML = "";

    foodMenus.forEach((food) => {
      const div = document.createElement("div");
      div.className = "col";

      div.innerHTML = `<div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center">
            <img src="${food.img}" class="img-fluid rounded-start" alt="food image" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${food.name}</h5>
              <p class="card-text">
                <small class="text-muted">${food.price}원</small>
              </p>
              <p class="card-text">
                ${food.description}
              </p>
              
            </div>
          </div>
        </div>
      </div>`;

      foodListElement.appendChild(div);
    });
  };
  createMenu();

  const foodMenus = document.querySelectorAll("ul .nav-item");

  for (const menu of foodMenus) {
    menu.addEventListener("click", (ev) => {
      selectedCategoryMenu = ev.target.text.toUpperCase();
      createMenu();
    });
  }
};
