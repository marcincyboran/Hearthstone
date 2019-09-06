import CardListView from '../views/cardListView';
import AllCardsModel from '../models/allCardsModel';
import SetModel from '../models/bySetModel';
import RaceModel from '../models/byRaceModel';
import ClassModel from '../models/byClassModel';
import TypeModel from '../models/byTypeModel';

class CardListCtrl {
    constructor() {
        this.view = new CardListView();

        this.allCardsModel = new AllCardsModel();
        this.bySetModel = new SetModel();
        this.byRaceModel = new RaceModel();
        this.byClassModel = new ClassModel();
        this.byTypeModel = new TypeModel();

        this.elementsCount = 100;
    }

    noResults(error) {
        this.view.render(
            this.view.el.content,
            `<p class="card__error">${error.message}</p>`
        );
    }

    async loadAllCard() {
        this.view.renderLoader(this.view.el.content);

        const cards = await this.allCardsModel.getCards();
        
        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, this.elementsCount))
        )
    }

    async loadCardsBySet(query) {
        this.view.renderLoader(this.view.el.content);

        const cards = await this.bySetModel.getCards(query);

        if (cards.error === 404) {
            this.noResults(cards)
            return;
        }

        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, this.elementsCount))
        )
    }

    async loadCardsByRace(query) {
        this.view.renderLoader(this.view.el.content);

        const cards = await this.byRaceModel.getCards(query);

        if (cards.error === 404) {
            this.noResults(cards)
            return;
        }

        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, this.elementsCount))
        )
    }

    async loadCardsByClass(query) {
        this.view.renderLoader(this.view.el.content);

        const cards = await this.byClassModel.getCards(query);

        if (cards.error === 404) {
            this.noResults(cards)
            return;
        }

        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, this.elementsCount))
        )
    }

    async loadCardsByType(query) {
        this.view.renderLoader(this.view.el.content);
        
        const cards = await this.byTypeModel.getCards(query);

        if (cards.error === 404) {
            this.noResults(cards)
            return;
        }

        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, this.elementsCount))
        )
    }
}

export default CardListCtrl;