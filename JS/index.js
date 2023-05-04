// écouter le scroll

let titleEl = document.querySelector(".pioche-carte .title")

window.addEventListener("scroll", scrollLoad )

function scrollLoad() {
  // le haut de l'élément .pioche-carte atteint 60% de la hauteur de la fenêtre, l'animation se déclenchera.
   let tagetValue = window.innerHeight * 0.6
   
  //  calcule la distance entre le haut de l'élément .pioche-carte et le haut de la fenêtre.
   let titleTop = titleEl.getBoundingClientRect().top
   

   if(titleTop<=tagetValue){
    titleEl.classList.add("title-animate")
   }else{
    titleEl.classList.remove("title-animate")
   }

}