//document.addEventListener("DOMContentLoaded", () => {
  //const container = document.getElementById("container");
  //const template = document.getElementById("template");

  //const displayPersonnages = (data) => {
    //container.innerHTML = "";

    //data.forEach((personnage) => {
      //const personnageCard = template.cloneNode(true);
      //personnageCard.style.display = "block";
      //personnageCard.id = "";
      //personnageCard.querySelector(".personnage-title").textContent = personnage.name;
      //personnageCard.querySelector(".personnage-description").textContent = personnage.bio;
      //personnageCard.querySelector(".personnage-details-link").href = `details.html?id=${personnage.id}`;
      //container.appendChild(personnageCard);
    //});
  //};

  //const fetchPersonnages = async () => {
    //try {
      //const response = await fetch("https://hp-api.lainocs.fr/characters/");
      //const data = await response.json();
      
      //displayPersonnages(data);
    //} catch (e) {
      //alert("Une erreur est survenue");
    //}
  //};

  //fetchPersonnages();
//});

//je le suis inspirée de la redif du cours mais j'ai pas réussi à adapter le code




document.addEventListener("DOMContentLoaded", function () {
  
  const params = new URLSearchParams(window.location.search);
  const personnagesId = params.get("slug");

  async function fetchPersonnages(id) {
    const url = `https://hp-api.lainocs.fr/characters/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPersonnages(data);
  }

  function displayPersonnages(personnage) {
    const template = document.getElementById("personnage-details");

    template.style.display = "block"; // Rend la carte visible
    template.id = ""; // Enlève l'id pour éviter les doublons
    template.querySelector('.personnage-img').src = personnage.image;
    template.querySelector(".personnage-title").textContent = personnage.name;
    template.querySelector(".personnage-description").textContent = personnage.overview;
  }

  fetchPersonnages(personnagesId);
});