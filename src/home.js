function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Ichiraku Ramen";

  home.appendChild(title);

  const para = document.createElement("p");
  para.classList.add("para");
  para.textContent = "Delicious ramen from your favorite anime!";

  home.appendChild(para);
  return home;
}

function loadHome() {
  const tabContent = document.getElementById("tab-content");

  const homeSection = createHome();

  tabContent.appendChild(homeSection);
}

export default loadHome;
