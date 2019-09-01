import View from './view';

class CardView extends View {
    constructor() {
        super();
    }

    getCardsMarkup(cardsArr) {
        let output = '';
        cardsArr.forEach(cardObj => {
            output += this.getCardMarkup(cardObj);
        });
        return output;
    }

    getCardMarkup(cardObj) {
        return `
            <article class="card">
                <figure class="card__images-wrapper">
                    <img    
                        class="card__image" 
                        src="${ cardObj.img ? cardObj.img : "./../../assets/backupcard.png"}"
                        alt="${ cardObj.name ? cardObj.name : cardObj.cardId }" >

                    <img 
                        class="card__image-back" 
                        src="/../../assets/back.png"
                        alt="Default card reverse" >
                </figure>
                <h4 class="card__title">${ cardObj.name ? cardObj.name : cardObj.cardId }</h4>
                <p class="card__description">${ cardObj.text ? cardObj.text : 'No text' }</p>
                <p class="card__rarity">${ cardObj.rarity ? ("Rarity: " + cardObj.rarity) : 'Rarity: No info'}</p>
                <p class="card__cardSet">${ cardObj.cardSet ? ("Card Set: " + cardObj.cardSet) : 'Card Set: No info'}</p>
                <p class="card__type">${ cardObj.type ? ("Type: " + cardObj.type) : 'Type: No info'}</p>
                <p class="card__cost">${ cardObj.cost ? ("Cost: " + cardObj.cost) : 'Cost: No info'}</p>
                <p class="card__attack">${ cardObj.attack ? ("Attact: " + cardObj.attack) : 'Attack: No info'}</p>
                <p class="card__health">${ cardObj.health ? ("Health: " + cardObj.health) : 'Health: No info'}</p>
                <p class="card__race">${ cardObj.race ? ("Race: " + cardObj.race) : 'Race: No info'}</p>
                <p class="card__flavor">${ cardObj.flavor ? ("Flavor: " + cardObj.flavor) : 'Flavor: No info'}</p>
                <p class="card__durability">${ cardObj.durability ? ("Durability: " + cardObj.durability) : 'Durability: No info'}</p>
                <p class="card__class">${ cardObj.playerClass ? ("Class: " + cardObj.playerClass) : 'Class: No info'}</p>
            </article>
        `
    }

    init () {
        
    }
}

export default CardView;