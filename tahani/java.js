// vælg alle filter buttons og filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const pointsInfo = document.getElementById("pointsInfo");

// definere filtercard funktion
const filterCards = (e) =>{
    document.querySelector(".active").classList.remove("active"); // dom metode
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        //tilføjer "hide" for at gemme kortet
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "alle"){
        card.classList.remove("hide");
        }
    });

    if (e.target.dataset.name === "rabatter") {
        pointsInfo.classList.remove("hide");
    } else {
        pointsInfo.classList.add("hide");
    }
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// find alle img-elementer inde i .card div'er
const images = document.querySelectorAll('.card img');

// opret et tomt array til at gemme src-attributterne
const imageSources = [];

// gennemgå alle fundne billeder og tilføj deres src til arrayet
images.forEach((image) => {
    imageSources.push(image.src);
});

// log imagesources array til konsollen for at verficere indholdet
console.log(imageSources);

console.log(filterButtons, filterableCards);