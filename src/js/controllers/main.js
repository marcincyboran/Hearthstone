import BaseView from '../views/view';

import MenuCtrl from './menuCtrl';
import CardListCtrl from './cardListCtrl';
import SingleCardCtrl from './singleCardCtrl';
import BackCtrl from './backsCtrl';
// import FilterCtrl from './filterCtrl';


class MainCtrl {
    constructor() {
        this.view = new BaseView()
        this.menuCtrl = new MenuCtrl();
        this.cardListCtrl = new CardListCtrl();
        this.backCtrl = new BackCtrl();
        // this.filterCtrl = new FilterCtrl();
    }

    menuNavClickHandler(ev) {
        ev.preventDefault();
        
        switch(ev.target.hash) {

            case('#backs') :
                this.backCtrl.loadBacks();
            break;

            case('#info') :
                console.log(ev.target.hash);
                // Miejsce na kod Oli :)
            break;
        }

    }

    async menuFormSearchHandler(ev) {
        ev.preventDefault();

        const cardName = ev.target[0].value;
        
        this.singleCardCtrl = new SingleCardCtrl(cardName);
        this.singleCardCtrl.loadSingleCard();
        this.menuCtrl.clearForm();
    }

    init() {
        console.log('Main init.');
        this.menuCtrl.init(
            this.menuNavClickHandler.bind(this),
            this.menuFormSearchHandler.bind(this)
        );

        this.cardListCtrl.loadAllCard();
    }
}

export default MainCtrl;