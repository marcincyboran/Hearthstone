import CardListView from '../views/cardListView';
import AllCardsModel from '../models/allCardsModel';

class CardListCtrl {
    constructor() {
        this.model = new AllCardsModel();
        this.view = new CardListView();
    }

    async loadAllCard() {
        this.view.renderLoader(this.view.el.content);

        const cards = await this.model.getCards();
        
        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, 200))
        )
    }
}

export default CardListCtrl;