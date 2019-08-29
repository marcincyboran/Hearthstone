import MenuCtrl from './menuCtrl';
import CardListCtrl from './cardListCtrl';

class MainCtrl {
    constructor(view) {
        this.view = view
        this.menuCtrl = new MenuCtrl(view);
        this.cardListCtrl = new CardListCtrl(view);
    }

    async menuNavClickHandler(ev) {
        ev.preventDefault();

        // Póki co nie sprawdzamy co zostało kliknięte, ale zrobimy to :)
        console.log(ev.target.hash);
        
        // Dzięki zastosowaniu bind(this) przy przekazywaniu callbacka w init()
        // this w tym miejscu wskazuje na MainCtrl, a nie na MenuCtrl, gdzie została wywołana, wiem dziwne
        console.log(this);
        
        const cards = await this.cardListCtrl.model.getCards();

        this.cardListCtrl.view.render(
            this.view.el.content,
            this.cardListCtrl.view.getCardsMarkup(cards.splice(0, 30))
        )
    }

    menuFormSearchHandler(ev) {
        ev.preventDefault();

        // Dzięki zastosowaniu bind(this) przy przekazywaniu callbacka w init()
        // this w tym miejscu wskazuje na MainCtrl, a nie na MenuCtrl, gdzie została wywołana, wiem dziwne
        console.log(this);
        this.menuCtrl.clearForm();
    }

    init() {
        console.log('Main init.');
        this.menuCtrl.init(
            this.menuNavClickHandler.bind(this),
            this.menuFormSearchHandler.bind(this)
        );
    }
}

export default MainCtrl;