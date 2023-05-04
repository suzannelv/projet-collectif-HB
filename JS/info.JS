
function showInfo(nom, prenom, age, avatar) {
    let displayInfo = document.getElementById("display-info");
  
    // Affiche les informations dans la div display-info
    displayInfo.innerHTML =
      "<h3 class='text-center'>Info</h3>" +
      "<div class='col ps-5'>"+
        "<p>Nom: " + nom + "</p>" +
        "<p>Prénom: " + prenom + "</p>" +
        "<p>Age: " + age + "</p>"+
      "</div>" +

      "<div class='col'>" +
        "<img class='rounded-circle' src=../Img/"+ avatar +">" +
      "</div>";
  }



