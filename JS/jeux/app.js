import MemoryGame from './MemoryGame.js';

const board_game_container = document.body.querySelector('ul[id="board_game_container"]'); 

const repeated_images = [
    '../Img/card/Aya.jpg',
    '../Img/card/Damien.png', 
    '../Img/card/Kevin.png', 
    '../Img/card/Clement.png',
    '../Img/card/Ghazi.png', 
    '../Img/card/Florian.jpg',
    '../Img/card/Yanis.png',
    '../Img/card/Hristina.png',
    '../Img/card/Rayan.png',
    '../Img/card/Meijuan.png',
    '../Img/card/Angelo.png',
    '../Img/card/Khaoula.png',
    '../Img/card/Nohe.png',
    '../Img/card/Clency.png',
    '../Img/card/Emre.png',
    '../Img/card/Antoine.png'
  ];
  
  const images_links = repeated_images.concat(repeated_images);



const attempts_count_paragraph = document.body.querySelector('p[data-attempts-count]');

const pair_found_paragraph = document.body.querySelector('p[data-pair-found]'); 

const score_paragraph = document.body.querySelector('p[data-score]');

const timer_paragraph = document.body.querySelector('p[data-timer]');

new MemoryGame({
    board_game_container,
    images_links,
    attempts_count_paragraph,
    pair_found_paragraph,
    score_paragraph,
    timer_paragraph
}); 

let refresh = document.getElementById('NewGame');
refresh.addEventListener('click', function() {
    location.reload();
}, false);