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

    getCardMore(cardObj) {
        return `
            <article class="card" data-cardId="${ cardObj.cardId}">
                <figure class="card__images-wrapper">
                    <object 
                        class="card__image"
                        data="${cardObj.img}"
                        type="image/jpg">
                        <img class="card__image" src="./../../assets/backupcard.png" />
                    </object>

                    <img 
                        class="card__image-back" 
                        src="/../../assets/back.png"
                        alt="Default card reverse" >
                </figure>
                <h4 class="card__title" >${ cardObj.name ? cardObj.name : cardObj.cardId }</h4>
                <div class="card__description">
                    <p class="card__description">${ cardObj.text ? cardObj.text : 'No text' }</p>
                    <p class="card__flavor">${ cardObj.flavor ? ("<b>Flavor:</b> " + cardObj.flavor) : '<b>Flavor:</b> No info'}</p>
                    <p class="card__rarity">${ cardObj.rarity ? ("<b>Rarity:</b> " + cardObj.rarity) : '<b>Rarity:</b> No info'}</p>
                    <p class="card__cardSet">${ cardObj.cardSet ? ("<b>Card Set:</b> " + cardObj.cardSet) : '<b>Card Set:</b> No info'}</p>
                    <p class="card__type">${ cardObj.type ? ("<b>Type:</b> " + cardObj.type) : '<b>Type:</b>  No info'}</p>
                    <p class="card__cost">${ cardObj.cost ? ("<b>Cost:</b> " + cardObj.cost) : '<b>Cost:</b>  No info'}</p>
                    <p class="card__attack">${ cardObj.attack ? ("<b>Attact:</b> " + cardObj.attack) : '<b>Attact:</b> No info'}</p>
                    <p class="card__health">${ cardObj.health ? ("<b>Health:</b> " + cardObj.health) : '<b>Health:</b> No info'}</p>
                    <p class="card__race">${ cardObj.race ? ("<b>Race:</b> " + cardObj.race) : '<b>Race:</b> No info'}</p>
                    <p class="card__durability">${ cardObj.durability ? ("<b>Durability:</b> " + cardObj.durability) : '<b>Durability:</b> No info'}</p>
                    <p class="card__class">${ cardObj.playerClass ? ("<b>Class:</b> " + cardObj.playerClass) : '<b>Class:</b> No info'}</p>
                </div>            
            </article>
        `
    }

    getCardMarkup(cardObj) {
        return `
            <article class="card" data-cardId="${ cardObj.cardId}">
                <figure class="card__images-wrapper">
                    <object 
                        class="card__image"
                        data="${cardObj.img}"
                        type="image/jpg">
                        <img class="card__image" src="./../../assets/backupcard.png" />
                    </object>

                    <img 
                        class="card__image-back" 
                        src="/../../assets/back.png"
                        alt="Default card reverse" >
                </figure>
                <h4 class="card__title" >${ cardObj.name ? cardObj.name : cardObj.cardId }</h4>
            </article>
        `
    }



    init () {
        
    }
}

export default CardView;