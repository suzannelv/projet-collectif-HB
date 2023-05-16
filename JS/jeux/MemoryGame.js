import shuffleAnArray from './shuffle-an-array.js';

export default class MemoryGame 
{
    constructor({
        board_game_container,
        images_links,
        attempts_count_paragraph,
        pair_found_paragraph,
        score_paragraph,
        timer_paragraph
    }) {
        this.board_game_container = board_game_container; 
        this.images_links = images_links;
        this.attempts_count_paragraph = attempts_count_paragraph;
        this.pair_found_paragraph = pair_found_paragraph;
        this.score_paragraph = score_paragraph; 
        this.timer_paragraph = timer_paragraph;
        this.cards_selected = []; 
        this.cards_matched = [];
        this.attempts_count = 0;
        this.pair_found = 0;
        this.timer_started = false;
        this.timer_reference = null;
        this.minutes = 0;
        this.seconds = 0;
        this.init();
    }

    init() {
        this.fillBoardGameContainer();
    }

    fillBoardGameContainer() {
    const images_links_shuffled = shuffleAnArray(this.images_links);

        images_links_shuffled.forEach((image_link) => {
            const li_tag = document.createElement('li');
            li_tag.classList.add('card');
            
            li_tag.addEventListener("click", ({currentTarget}) => {
                if (this.timer_started === false) {
                    this.timer(); 
                    
                    this.timer_started = true;
                }

                if (this.cards_matched.includes(currentTarget)){
                    return;
                }else{
                    this.flipCard(currentTarget);
                }
            } );

                const image = document.createElement("img");
                image.setAttribute("src", image_link);
                image.setAttribute('draggable','false');
                image.setAttribute("alt","Card Projet Collectif"); 

                li_tag.append(image);

                this.board_game_container.append(li_tag);
    
        });
    }

    timer() {
        this.timer_reference = setInterval(() => {
            this.seconds += 1;
    
            if (this.seconds === 60) {
                this.minutes += 1;
    
                this.seconds = 0;
            }
    
            const time_content = (this.minutes < 10 ? "0" + this.minutes : this.minutes) + ":" + (this.seconds < 10 ? "0" + this.seconds : this.seconds);
    
            this.timer_paragraph.setAttribute('data-timer', time_content)
    
        },1000);
    }
    
    flipCard(card) {
        
        card.classList.add("flip-card");
        
        this.fillCardSelectedArray(card);
    }

    fillCardSelectedArray(card) {
        if (this.cards_selected.length === 2  ) {
            return; 
        }

        this.cards_selected.push(card.firstElementChild);

        this.compareCards();
    }



    compareCards(){ 
        /*verifie si les cartes sont identiques grâce aux "src"*/
        if (this.cards_selected.length !== 2){
            return;
        }

        this.board_game_container.classList.add('no-click');

        if (this.cards_selected.includes(this.cards_matched)){
            return;
        }
        
        if (this.cards_selected[0].src === this.cards_selected[1].src){
            this.match();
        } else {
            this.noMatch();
        }
    }

    match() { 
        
        this.pair_found += 1;
        
        this.cards_matched.push(...this.cards_selected);

        /*réinitialise le tableau des cartes séléctionnées*/
        this.cards_selected.length = []; 

        this.board_game_container.classList.remove('no-click');
        
        this.incrementAttemptsCounter(); 

        this.updatePairFoundContent();

        this.isWinner();

        console.log(this.cards_matched);
    }
    
    
    /*incremente le nombre de tentative*/
    incrementAttemptsCounter() {
        this.attempts_count += 1; 

        this.attempts_count_paragraph.setAttribute('data-attempts-count', this.attempts_count.toString());
    }
    
    /* mets a jour le nombre de pairs trouvée*/
    updatePairFoundContent() {
        const pair_found_content = this.pair_found.toString() + ' / 16';

        this.pair_found_paragraph.setAttribute('data-pair-found',pair_found_content);
    }

    isWinner() {
        if (this.cards_matched.length !== 32){
            return;
        }
       /* stoppe le timer */
        clearInterval(this.timer_reference);

        this.board_game_container.classList.add('no-click');

        this.displayScore();
    }

    displayScore() {

        if(this.attempts_count < 16) {
            return;
        }

        if (this.attempts_count === 16){
            this.score_paragraph.setAttribute('data-score','★★★★★');
        } else if (this.attempts_count > 16 && this.attempts_count <= 22){
            this.score_paragraph.setAttribute('data-score','★★★★☆');
        } else if (this.attempts_count > 22 && this.attempts_count <= 28){
            this.score_paragraph.setAttribute('data-score','★★★☆☆');
        } else if (this.attempts_count > 28 && this.attempts_count <= 34){
            this.score_paragraph.setAttribute('data-score','★★☆☆☆');
        } else {
            this.score_paragraph.setAttribute('data-score','★☆☆☆☆');
        } 

        this.score_paragraph.classList.remove('hidden');
       
    }

    noMatch() {
        this.incrementAttemptsCounter();

        setTimeout(() => {
            this.cards_selected[0].parentElement.classList.remove('flip-card');

            this.cards_selected[1].parentElement.classList.remove('flip-card'); /*supprime la classe flip-card, retourne les cartes*/

            this.board_game_container.classList.remove('no-click');/* rend de nouveaux les images clicable*/

            this.cards_selected.length = 0; /* réinitialise le tableau des cartes séléctionnées*/
        },1500);
    }

}





