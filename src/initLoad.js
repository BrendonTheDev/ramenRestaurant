function createBtn(id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  btn.textContent = text;
  btn.classList.add("navBtns");
  return btn;
}

function createNav(id) {
  const nav = document.createElement("nav");
  nav.setAttribute("id", id);

  const homeBtn = createBtn("home", "Home");
  const menuBtn = createBtn("menu", "Menu");
  const contactBtn = createBtn("contact", "Contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

function loadPage() {
  const content = document.getElementById("content");

  const nav = createNav("nav");
  content.appendChild(nav);
}

export default loadPage;
