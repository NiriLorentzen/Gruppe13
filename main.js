// Navbar HTML as a reusable template
const navbarHTML = `
  <div class="navbar">
    <img src="images/Logo.svg" width="72rem" height="72rem">
    <a href="index.html">Hovedside</a>
    <a href="medlemmer.html">Medlemmer</a>
  </div>
`;

// Inject navbar at the top of the body
function injectNavbar() {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  // Highlight active link
  document.querySelectorAll('.navbar a').forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}

// Members data for medlemmer.html
const members = [
  {
    name: "Eivind",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/EivindProfBilde.jpg"
  },
  {
    name: "Niri",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/niri.jpg"
  },
  {
    name: "William",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/williamj.jpg"
  },
  {
    name: "Carl",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/CarlBilde.jpg"
  },
  {
    name: "Nicolay",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/NicolayBilde.jpg"
  }
];

// Render members for medlemmer.html
function renderMembers() {
  const container = document.querySelector('.medlem_oversikt');
  if (!container) return;
  members.forEach(m => {
    const div = document.createElement('div');
    div.className = 'medlem_instans';
    div.innerHTML = `
      <img src="${m.picture}" alt="Bilde av ${m.name}">
      <div>
        <p><strong>${m.name}</strong> – ${m.role}</p>
        <em>${m.description}</em>
      </div>
    `;
    container.appendChild(div);
  });
}

// On DOMContentLoaded, inject navbar and render members if needed
window.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  renderMembers();
});
