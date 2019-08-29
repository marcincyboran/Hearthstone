import MenuCtrl from './menuCtrl';
import CardListCtrl from './cardListCtrl';
import SingleCardCtrl from './singleCardCtrl';

class MainCtrl {
    constructor(view) {
        this.view = view
        this.menuCtrl = new MenuCtrl(view);
        this.cardListCtrl = new CardListCtrl();
    }

    async getCards() {

        this.view.renderLoader(this.view.el.content);

        const cards = await this.cardListCtrl.model.getCards();

        this.view.render(
            this.view.el.content,
            this.cardListCtrl.view.getCardsMarkup(cards.splice(0, 30))
        )
    }

    async menuNavClickHandler(ev) {
        ev.preventDefault();
        
        // Dzięki zastosowaniu bind(this) przy przekazywaniu callbacka w init()
        // this w tym miejscu wskazuje na MainCtrl, a nie na MenuCtrl, gdzie została wywołana, wiem dziwne
        console.log(this);
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

        this.getCards();
    }
}

export default MainCtrl;