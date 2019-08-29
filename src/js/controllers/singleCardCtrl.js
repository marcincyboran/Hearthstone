import CardListView from '../views/cardListView';
import SingleCardModel from '../models/singleCardModel';

class SingleCardCtrl {
    constructor(name) {
        this.model = new SingleCardModel(name);
        this.view = new CardListView();
    }

    init() {
        
    }
}

export default SingleCardCtrl;