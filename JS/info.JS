function showInfo(nom, prenom, age) {
    let displayInfo = document.getElementById("display-info");
  
    // Affiche les informations dans la div display-info
    displayInfo.innerHTML =
    "<h3>Info</h3> <p>Nom: " + nom + "</p><p>Prénom: " + prenom + "</p><p>Age: " + age + "</p>";

  }