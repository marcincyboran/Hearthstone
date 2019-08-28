import CardView from '../views/cardView';
import CardModel from '../models/allCardsModel';

class CardCtrl {
    constructor() {
        this.model = new CardModel();
        this.view = new CardView();
    }

    handleClick(hash) {
        switch(hash) {
            case('#info'):

            break;
            case('#cards'):

            break;
            case('#card'):

            break;
        }
    }

    init() {
        this.setListeners();
    }
}

export default CardCtrl;