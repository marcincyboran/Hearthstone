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
                <img class="card__image" src="${cardObj.img ? cardObj.img : "./../../assets/templateCard.png"}" alt="${ cardObj.name ? cardObj.name : cardObj.cardId }">
                <h4 class="card__title">${ cardObj.name ? cardObj.name : cardObj.cardId }</h4>
                <p class="card__description">${ cardObj.text ? cardObj.text : 'No text' }</p>
            </article>
        `
    }

    init () {
        
    }
}

export default CardView;