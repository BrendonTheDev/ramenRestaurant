function createMenuItem(id, text) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.setAttribute("id", id);

  /*will add img via css background to fill div instead of creating img elem*/

  const itemName = document.createElement("h3");
  itemName.textContent = text;

  menuItem.appendChild(itemName);
  return menuItem;
}

function loadMenu() {
  const tabContent = document.getElementById("tab-content");

  const menu = [
    createMenuItem("naruto-ramen", "Naruto Ramen"),
    createMenuItem("sasuke-ramen", "Sasuke Ramen"),
    createMenuItem("sakura-ramen", "Sakura Ramen"),
    createMenuItem("itatchi-ramen", "Itatchi Ramen"),
  ];

  menu.forEach((item) => {
    tabContent.appendChild(food);
  });
}

export default loadMenu;
