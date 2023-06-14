function createContact(name, info) {
  const contacts = document.createElement("div");
  contacts.classList.add("contacts");

  const title = document.createElement("h1");
  title.classList.add("contact-title");
  title.textContent = name;
  contacts.appendChild(title);

  const para = document.createElement("p");
  para.classList.add("contact-info");
  para.textContent = info;
  contacts.appendChild(para);

  return contacts;
}

function loadContact() {
  const tabContent = document.getElementById("tab-content");

  const phone = createContact("Phone", "498-295-9503");

  const address = createContact("Address", "44 Ramen Street, Leaf Village");

  const instagram = createContact("Instagram", "@AnimeRamen");

  tabContent.appendChild(phone);
  tabContent.appendChild(address);
  tabContent.appendChild(instagram);
}

export default loadContact;
