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
    description: `Jeg kommer ifra Lillestrøm, og er 21 år gammel. Jeg er lederen for gruppen, og har stor interesse for backend og frontend utvikling.
    <br> Jeg har alltid hatt stor interesse for data og IT, og gjennom studiet har jeg fått erfaring og kunnskap innen organisering av prosjektarbeid, frontend utvikling, og backend utvikling.
    <br> Her er det backend og databasearbeid jeg har likt mest og fått best resultater ifra, med bruk av teknologi som PostgreSQL, Docker, og Entity Framework.
    <br> Jeg har også mye interesse for frontend, og har også drevet en del med figma for designutvikling under prosjektarbeid. 
    <br> Iløpet av prosjektene og innleveringer har jeg også erkjent gode erfaring med blant annet C#, Python, og Java.
    <br> Jeg trivdes godt med prosjektarbeid og gleder meg til bachelorprosjekt!
    `,
    picture: "images/niri.jpg",
    linkedin: "https://www.linkedin.com/in/niri-a-lorentzen-409916381/",
    mail: "niri.lorentzen@gmail.com",
    tlf: "917 41 899"
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
    picture: "images/EivindProfBilde.jpg",
    linkedin: "https://www.linkedin.com/in/eivind-hovden-breivik-979241381/",
    mail: "",
    tlf: ""
  },
  {
    name: "William",
    role: "Frontend utvikler",
    description: `Jeg er en 21 år gammel student fra Drammen, jeg er interessert i cybersikkerhet, AI og utvikling. Jeg har praktisk erfaring med C#, Java, PosgreSQL med fokus på webutvikling. 
    <br> Gjennom studiene har jeg tilegnet team-arbeid ferdigheter som smidig utvikling med Scrum og versjonskontroll med Git.
    <br> Jeg har blitt særlig interessert i cybersikkerhet og vil gjerne utvikle ferdighetene mine innen dette feltet i fremtiden.`,
    picture: "images/williamj.jpg",
    linkedin: "https://www.linkedin.com/in/william-jondahl-22b571382/",
    mail: "",
    tlf: ""
  },
  {
    name: "Carl",
    role: "Backend utvikler",
    description: `Hei, jeg er 21 år gammel og kommer fra Drammen. Jeg har lenge vært interessert i teknologi og programmering, 
    <br>og har erfaring med flere programmeringsspråk som Python, Java, C# og jeg har også jobbet med webutvikling ved bruk av HTML, CSS og JavaScript.
    <br>Jeg studerer nå IT og Informasjonssystemer ved Universitetet i Agder, hvor jeg har fått muligheten til å jobbe med ulike prosjekter som har styrket mine ferdigheter innen backend-utvikling. 
    <br>Etter tidligere prosjekter, har det vist seg at jeg trives best med backend-utvikling.`,
    picture: "images/CarlBilde.JPG",
    linkedin: "https://www.linkedin.com/in/carl-andreas-arnegard-993996214/",
    mail: "",
    tlf: ""
  },
  {
    name: "Nicolay",
    role: "Fullstack utvikler",
    description: `Jeg er 21 år gammel og kommer fra Drammen. Jeg har funnet en stor interesse for å skape nettsider og applikasjoner igjennom ulike prosjekter i studiet.
    <br>Jeg har tidligere erfaring med HTML, CSS, Java, JavaScript, Python, C#, PostgreSQL og nå i PHP. Jeg er en person som liker å jobbe i team og har gode samarbeidsevner.`,
    picture: "images/NicolayBilde.JPG",
    linkedin: "https://www.linkedin.com/in/nicolay-lehne-torp-14b62a2ba/",
    mail: "",
    tlf: ""
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
      <img class="Personbilde" src="${m.picture}" alt="Bilde av ${m.name}">
      <text class="medlem_instans_tekst_boks">
        <div>
          <p><strong>${m.name}</strong> – <em>${m.role}</em></p>
          ${m.description}
        </div>
      </text>
      <div class="kontaktinfo">
        <a href="${m.linkedin}" target="_blank">
          <div class="linkedin">
            <text>Linked</text>
            <img src="images/LinkedIn_icon.svg">
          </div>
        </a>
        <text class="tlf_mail">${m.mail}</text>
        <text class="tlf_mail">${m.tlf}</text>
      </div>
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