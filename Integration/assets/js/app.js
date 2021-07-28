// DataSets
const equipe = [
  { id: "1", image: "./assets/images/equipe1.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 1" },
  { id: "2", image: "./assets/images/equipe2.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 2" },
  { id: "3",image: "./assets/images/equipe3.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 3"  },
  { id: "4", image: "./assets/images/equipe1.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 4"  },
  { id: "5", image: "./assets/images/equipe2.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 5" },
  { id: "6",image: "./assets/images/equipe3.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 6"  },
  { id: "7", image: "./assets/images/equipe1.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 7"  },
  { id: "8", image: "./assets/images/equipe2.png",link:"#",description:"Ph.D, MAP, MBA agit à titre directeur et Conseiller stratégique en développement et évaluation de programmes publics",label:"Mohamed 8" },
 
]
const temoin = [
  { id: "1",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 1" },
  { id: "2",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 2" },
  { id: "3",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 3"  },
  { id: "4",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 4"  },
  { id: "5",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 5" },
  { id: "6",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 6"  },
  { id: "7",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 7"  },
  { id: "8",link:"#",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.Voluptate velit esse cillum dolore eu fugiat nullapariatur.",label:"SAM ISBISTER 8" },
 
]
// MOBILE MENU
let toggler = document.getElementById('toggler'),
	 nav  = document.getElementById('main-nav'),
   scrollWrapper = document.getElementById('doc-wrapper'),
	 slowmo = document.getElementById('slowmo'),
   navContainer = document.getElementById('navigation-mobile');


toggler.addEventListener('click', function(e){
  scrollWrapper.classList.toggle('menu-open');
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
  navContainer.classList.toggle('is-open');
});
// Sections
//Equipe
const carousel1 = document.querySelector(".carousel-content")
const showTeam = () => {
  let output = ""
  equipe.forEach(
    ({label,image ,description}) =>
      (output += `
      <div class="carousel-item">
      <div class="profile" style="background-image:url(${image})"></div>
      <div class="fullname">${label}</div>
      <div class="description">${description}</div>
      </div>  `)
  )
  carousel1.innerHTML = output
  CarouselInit(".carousel",".carousel-content",".carousel-item",".nav-left",".nav-right","multiple");
}

//Témoignage
const carousel2 = document.querySelector(".carousel2-content")
const showTemoignage = () => {
  let output = ""
  temoin.forEach(
    ({label,message}) =>
      (output += `
      <div class="carousel2-item">
      <img class="icon" src="./assets/images/quote.svg" />  
      <div class="message">${message}</div>
      <div class="fullname">${label}</div>
      </div>  `)
  )
  carousel2.innerHTML = output
  CarouselInit(".carousel2",".carousel2-content",".carousel2-item",".nav-left2",".nav-right2","single");
}

document.addEventListener("DOMContentLoaded", showTeam)
document.addEventListener("DOMContentLoaded", showTemoignage)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("../../serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
