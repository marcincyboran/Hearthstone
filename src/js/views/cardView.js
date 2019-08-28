import View from './view';

class CardView extends View {
    constructor() {
        super();
    }

    render(DOMElement, markup) {
        DOMElement.insertAdjacentHTML('afterbegin', markup);
    }

    getCardsMarkup(cards) {
        let output = '';
        cards.forEach(card => {
            output =+ this.getCardMarkup(card);
        });
        return output
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