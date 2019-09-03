import CardListView from '../views/cardListView';
import SingleCardModel from '../models/singleCardModel';

class SingleCardCtrl {
    constructor(name) {
        this.model = new SingleCardModel(name);
        this.view = new CardListView();
    }

    async loadSingleCard() {
        this.view.renderLoader(this.view.el.cardWrapper);

        const card = await this.model.getCard();
        
        if (card.error === 404) {
            this.view.render(
                this.view.el.cardWrapper,
                `<p class="card__title">${card.message}</p>`
            );
        } else {
            this.view.render(
                this.view.el.cardWrapper,
                this.view.getCardsMarkup(card)
            );
        }
    } 
}

export default SingleCardCtrl;