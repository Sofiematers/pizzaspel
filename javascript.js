const startKnop = document.querySelector("#startGame");
const naarOvenKnop = document.querySelector("#naarOvenKnop");
const uitOvenKnop = document.querySelector("#uitOvenKnop");
const nieuwePizzaKnop = document.querySelector("#nieuwePizzaKnop");
const homeScherm = document.querySelector(".homescherm");
const tweedeScherm = document.querySelector(".sausKeuze");
const derdeScherm = document.querySelector(".pizzaVersieren");
const pizzainoven = document.querySelector(".pizzaOven");
const pizzaKlaar = document.querySelector(".pizzaKlaar");
const audiobakken = new Audio("audio/ovenmuziek.mp3");
const bbq = document.getElementById("bbq");
const tomaat = document.getElementById("tomaat");
const kaasBakje = document.getElementById("kaasbakje");
const paprikaBakje = document.getElementById("paprikabakje");
const champiBakje = document.getElementById("champibakje");
const ananasBakje = document.getElementById("ananasbakje");
const peperoniBakje = document.getElementById("peperonibakje");

let champion = false;
let kaas = false;
let peperoni = false;
let paprika = false;
let ananas = false;

// deze function voegt een class toe aan het homescherm (hidden) en haalt bij het tweede scherm een class weg (hidden) //

function volgendeScherm() {
  homeScherm.classList.add("hidden");
  tweedeScherm.classList.remove("hidden");
}

// deze function voegt een class toe aan het tweede schrem (hidden) en haalt bij het derde scherm een class weg (hidden) //

function naarDerdeScherm() {
  tweedeScherm.classList.add("hidden");
  derdeScherm.classList.remove("hidden");
}

// deze function voegt een class toe aan derde scherm (hidden) en haalt bij het pizza in oven scherm een class weg als je op de knop drukt //

function naarOvenScherm() {
  derdeScherm.classList.add("hidden");
  pizzainoven.classList.remove("hidden");
  audiobakken.play();
}

// deze function voegt een class toe aan het pizza in oven scherm (hidden) en haalt bij het pizza klaar scherm een class weg als je op de knop drukt //

function naarEindScherm() {
  pizzainoven.classList.add("hidden");
  pizzaKlaar.classList.remove("hidden");
}

// deze function voegt een class toe aan het pizza klaar scherm (hidden) en haalt bij het homescherm een class weg als je op de knop drukt //

function naarBeginScherm() {
  pizzaKlaar.classList.add("hidden");
  homeScherm.classList.remove("hidden");
}

// deze function zorgt ervoor dat als je de bbq pizza kiest, de tomaat pizza verdwijnt //

function bbqPizza() {
  document.getElementById("bbq-pizza").classList.remove("hidden");
  naarDerdeScherm();
}

// deze function zorgt ervoor dat als je de tomaat pizza kiest, de bbq pizza verdwijnt//

function tomaatPizza() {
  document.getElementById("tomaat-pizza").classList.remove("hidden");
  naarDerdeScherm();
}

// deze functions zorgen ervoor dat de toppings tevoorschijn komen als je op de image van de toppings klikt //

function dropKaas() {
  if (kaas) {
    document.getElementById("kaas").classList.add("hidden");
    kaas = false;
  } else {
    document.getElementById("kaas").classList.remove("hidden");
    kaas = true;
  }
}

function dropPeperoni() {
  if (peperoni) {
    document.getElementById("peperoni").classList.add("hidden");
    peperoni = false;
  } else {
    document.getElementById("peperoni").classList.remove("hidden");
    peperoni = true;
  }
}

function dropPaprika() {
  if (paprika) {
    document.getElementById("paprika").classList.add("hidden");
    paprika = false;
  } else {
    document.getElementById("paprika").classList.remove("hidden");
    paprika = true;
  }
}

function dropAnanas() {
  if (ananas) {
    document.getElementById("ananas").classList.add("hidden");
    ananas = false;
  } else {
    document.getElementById("ananas").classList.remove("hidden");
    ananas = true;
  }
}

function dropChampi() {
  if (champion) {
    document.getElementById("champignons").classList.add("hidden");
    champion = false;
  } else {
    document.getElementById("champignons").classList.remove("hidden");
    champion = true;
  }
}

// startknop op beginscherm //
startKnop.addEventListener("click", volgendeScherm);

// knop om de pizza in de oven te doen //
naarOvenKnop.addEventListener("click", naarOvenScherm);
uitOvenKnop.addEventListener("click", naarEindScherm);
nieuwePizzaKnop.addEventListener("click", naarBeginScherm);

// knop voor bbq en tomaat pizza//
bbq.addEventListener("click", bbqPizza);
tomaat.addEventListener("click", tomaatPizza);

kaasBakje.addEventListener("click", dropKaas);
paprikaBakje.addEventListener("click", dropPaprika);
champiBakje.addEventListener("click", dropChampi);
ananasBakje.addEventListener("click", dropAnanas);
peperoniBakje.addEventListener("click", dropPeperoni);
