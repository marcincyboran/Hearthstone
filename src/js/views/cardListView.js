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
                <h4 class="card__title">${ cardObj.name ? cardObj.name : cardObj.cardId }</h4>
                <p class="card__description">${ cardObj.text ? cardObj.text : 'No text' }</p>
            </article>
        `
    }

    init () {
        
    }
}

export default CardView;