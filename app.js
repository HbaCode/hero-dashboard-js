//creation des carte
function createHerro(name, power) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${name}</h3><p>${power}</p><button class="delete-btn">supprimer</button>`;
  return card;
}
function updateCounter() {
  const counterDisplay = document.getElementById("counter");
  const totalHero = document.querySelectorAll(".card").length;
  counterDisplay.textContent = `Nombre de héros ${totalHero}`;
}
const heroGrid = document.getElementById("hero-grid");
const addHero = document.getElementById("add-hero");
const heroName = document.getElementById("heroName");
const heroPower = document.getElementById("heroPower");

//ajout des hero
addHero.addEventListener("click", () => {
  const name = heroName.value;
  const power = heroPower.value;
  const newCard = createHerro(name, power);
  if (name === "" || power === "") {
    alert("Remplis tous les champs !");
    return;
  }
  heroGrid.appendChild(newCard);
  updateCounter();
  heroName.value = "";
  heroPower.value = "";
  heroName.focus();
});

//suppression des hero

heroGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateCounter();
  }
});

//recherche des hero

const searchHero = document.getElementById("searchHero");
searchHero.addEventListener("input", (e) => {
  const content = e.target.value.toLowerCase();
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLocaleLowerCase();
    if (name.includes(content)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
