
function showInfo(nom, prenom, age, avatar) {
    let displayInfo = document.getElementById("display-info");
  
    // Affiche les informations dans la div display-info
    displayInfo.innerHTML =
      "<h3 class='text-center'>Super dev " + nom + "</h3>" +
      "<div class='col intro p-5 fs-3'>"+
        "<p class='ms-5'>Nom: " + nom + "</p>" +
        "<p class='ms-5'>Prénom: " + prenom + "</p>" +
        "<p class='ms-5'>Age: " + age + "</p>"+
      "</div>" +

      "<div class='col info-avatar text-center'>" +
        "<img class='mt-5' src=../Img/"+ avatar +">" +
      "</div>";
  }