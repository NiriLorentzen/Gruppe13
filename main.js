// Navbar HTML as a reusable template
const navbarHTML = `
  <div class="navbar">
    <img src="images/Logo.svg" width="4%" height="90%">
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
    name: "Niri",
    role: "Prosjektleder",
    description: "",
    picture: "images/niri.jpg"
  },
  {
    name: "Eivind",
    role: "Backend utvikler",
    description: `Jeg er 25 år gammel og kommer fra Kongsberg. Med stor interesse i både maskin og programvare. 
    <br> Gjennom IT studiet har jeg tilegnet meg erfaring i både frontend og backend utvikling, både teoretisk og praktisk. 
    <br> Disse praktiske evnene ble utviklet med en rekke prosjekter med bruk av teknologi som: Java, C#, Python, PostgreSQL og nå også PHP.
    <br> Utførelse av disse prosjektene har gitt meg en spesiell interesse for optimalisering av kode og programmer. 
    <br> Ettersom tidligere arbeid har vist meg både hvor viktig, og interessant dette er. 
    <br> Forøvrig har jeg også god erfaring med teambygging, formidlingsevne og kreativ problemløsning fra tidligere utdanning og jobb.`,
    picture: "images/EivindProfBilde.jpg"
  },
  {
    name: "William",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/williamj.jpg"
  },
  {
    name: "Carl",
    role: "Backend utvikler",
    description: `Hei, jeg er 21 år gammel og kommer fra Drammen. Jeg har lenge vært interessert i teknologi og programmering, 
    <br>og har erfaring med flere programmeringsspråk som Python, Java, C++ og jeg har også jobbet med webutvikling ved bruk av HTML, CSS og JavaScript.
    <br>Jeg studerer nå IT og Informasjonssystemer ved Universitetet i Agder, hvor jeg har fått muligheten til å jobbe med ulike prosjekter som har styrket mine ferdigheter innen backend-utvikling. 
    <br>Etter tidligere prosjekter, har det vist seg at jeg trives best med backend-utvikling.`,
    picture: "images/CarlBilde.JPG"
  },
  {
    name: "Nicolay",
    role: "Frontend utvikler",
    description: "Går på UiA, IT og Informasjonssystemer",
    picture: "images/NicolayBilde.JPG"
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
      <text class="medlem_instans_tekst_boks">
        <div>
          <p><strong>${m.name}</strong> – <em>${m.role}</em></p>
          ${m.description}
        </div>
      </text>
      <text class="linkedin">Linkedin</text>
    `;
    container.appendChild(div);
  });
}



// On DOMContentLoaded, inject navbar and render members if needed
window.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  renderMembers();

  const previewDiv = document.createElement('div');
  previewDiv.className = 'picture-preview';
  document.body.appendChild(previewDiv);

  // Only show preview on image click
  document.addEventListener('click', function(e) {
    // Image clicked; show preview
    if (e.target.tagName === 'IMG' && e.target.alt.startsWith('Bilde av')) {
      previewDiv.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
      previewDiv.style.display = 'block';
    } else if (
      previewDiv.style.display === 'block' &&
      !previewDiv.contains(e.target)
    ) {
      // Clicked outside preview; hide it
      previewDiv.style.display = 'none';
      previewDiv.innerHTML = '';
    }
  });
});