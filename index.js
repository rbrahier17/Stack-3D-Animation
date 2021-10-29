const cubes = [
  { cubeName: "htmlCube",       logoSrc: "./assets/html5.png",      technologieName: "HTML5" },
  { cubeName: "cssCube",        logoSrc: "./assets/css.png",        technologieName: "CSS3" },
  { cubeName: "sassCube",       logoSrc: "./assets/sass.png",       technologieName: "SASS" },
  { cubeName: "javascriptCube", logoSrc: "./assets/javascript.png", technologieName: "JavaScript" },
  { cubeName: "vuejsCube",      logoSrc: "./assets/vuejs.png",      technologieName: "Vue.js" },
  { cubeName: "mysqlCube",      logoSrc: "./assets/mysql.png",      technologieName: "MySql" },
  { cubeName: "nodejsCube",     logoSrc: "./assets/nodejs.png",     technologieName: "Node.js" },
  { cubeName: "expressCube",    logoSrc: "./assets/express.png",    technologieName: "Express" },
  { cubeName: "sequelizeCube",  logoSrc: "./assets/sequelize.png",  technologieName: "Sequelize"},
]

// Création d'une structure HTML pour chaque cube
function createCubesElements () {
  const body = document.getElementsByTagName('body')[0]
  for (let cube of cubes) {
    body.innerHTML += 
    ` <div class="elementToHover elementToHover--${cube.cubeName}" onmouseover="setCubeFaceBorder('${cube.cubeName}')" onmouseout="unsetCubeFaceBorder('${cube.cubeName}')"></div>
      <div class="cube ${cube.cubeName}">
        <div class="cube__face ${cube.cubeName}__face cube__face--front"><img class="${cube.cubeName}__face--logo" src="${cube.logoSrc}" /></div>
        <div class="cube__face ${cube.cubeName}__face cube__face--back"><img class="${cube.cubeName}__face--logo" src="${cube.logoSrc}" /></div>
        <div class="cube__face ${cube.cubeName}__face cube__face--right">${cube.technologieName}</div>
        <div class="cube__face ${cube.cubeName}__face cube__face--left">${cube.technologieName}</div>
        <div class="cube__face ${cube.cubeName}__face cube__face--top">${cube.technologieName}</div>
        <div class="cube__face ${cube.cubeName}__face cube__face--bottom"><img class="${cube.cubeName}__face--logo" src="${cube.logoSrc}" /></div>
      </div>`
  }
}

createCubesElements()

// Fonction permettant de styliser les faces du cube en animation au survol de l'élément déclencheur. 
// Ces éléments "faces" sont inatteignables avec des combinateurs CSS d'ou le recours à une fonction JS.
function setCubeFaceBorder(cube) {
  const cubeFaces = document.getElementsByClassName(cube+'__face');
  const cubeFacesWithLogo = document.getElementsByClassName(cube+'__face--logo');
  for(let face of cubeFaces) {
    face.style.boxShadow = "inset 0px 0px 0px 2px orange"
    face.style.background = "#1b192e"
  }
  for(let face of cubeFacesWithLogo) {
    face.style.filter = "invert(100%) sepia(57%) saturate(0%) hue-rotate(171deg) brightness(103%) contrast(101%)"
  }
}

// Fonction permettant de rétablir le style par défaut des faces du cube lorsque l'élément déclencheur n'est plus survolé. 
// Ces éléments "faces" sont inatteignables avec des combinateurs CSS d'ou le recours à une fonction JS.
function unsetCubeFaceBorder(cube) {
  const cubeFaces = document.getElementsByClassName(cube+'__face');
  const cubeFacesWithLogo = document.getElementsByClassName(cube+'__face--logo');
  for(let face of cubeFaces) {
    face.style.boxShadow = "none"
    face.style.background = "white"
  }
  for(let face of cubeFacesWithLogo) {
    face.style.filter = "invert(7%) sepia(9%) saturate(6395%) hue-rotate(215deg) brightness(92%) contrast(91%)"
  }
}