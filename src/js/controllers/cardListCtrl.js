import CardListView from '../views/cardListView';
import AllCardsModel from '../models/allCardsModel';

class CardListCtrl {
    constructor() {
        this.model = new AllCardsModel();
        this.view = new CardListView();
    }

    init() {
        
    }
}

export default CardListCtrl;