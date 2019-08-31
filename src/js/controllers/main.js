import BaseView from '../views/view';

import MenuCtrl from './menuCtrl';
import CardListCtrl from './cardListCtrl';
import SingleCardCtrl from './singleCardCtrl';
import BackCtrl from './backsCtrl';

class MainCtrl {
    constructor() {
        this.view = new BaseView()
        this.menuCtrl = new MenuCtrl();
        this.cardListCtrl = new CardListCtrl();
        this.backCtrl = new BackCtrl();
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

        // Dzięki zastosowaniu bind(this) przy przekazywaniu callbacka w init()
        // this w tym miejscu wskazuje na MainCtrl, a nie na MenuCtrl, gdzie została wywołana, wiem dziwne
        console.log(this);

        // Przechwycenie wartosci z inputa
        const cardName = ev.target[0].value;
        
        this.singleCardCtrl = new SingleCardCtrl(cardName);

        this.view.renderLoader(this.view.el.cardWrapper);

        const card = await this.singleCardCtrl.model.getCard();
        
        if (card.error === 404) {
            this.view.render(
                this.view.el.cardWrapper,
                `<p class="card__title">${card.message}</p>`
            );
        } else {
            this.view.render(
                this.view.el.cardWrapper,
                this.singleCardCtrl.view.getCardsMarkup(card)
            );
        }
       
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