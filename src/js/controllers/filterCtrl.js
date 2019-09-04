import CardListView from '../views/cardListView';
import AllCardsModel from '../models/allCardsModel';

class FilterCtrl {
    constructor(filters) {
        this.view = new CardListView();
        this.__filters = filters;
        this.__setFilters(filters) //przeslanie formularza
    }

    __setFilters(filters) {
        this.class = filters[0].selectedOptions[0].value;
        this.race = filters[1].selectedOptions[0].value;
        this.quality = filters[2].selectedOptions[0].value;
        this.durability = filters[3].selectedOptions[0].value;
    };

    // przy wybraniu durability reszta filtrow nie ma znaczenia wiec sa resetowane
    __resetOtherOptions() {
        this.__filters[0].selectedIndex = 0;
        this.__filters[1].selectedIndex = 0;
        this.__filters[2].selectedIndex = 0;
    };

    async loadCards() {
        this.view.renderLoader(this.view.el.content);

        let cards;

        if (this.durability) {

            this.model = new AllCardsModel({ durability: this.durability }); 
            cards = await this.model.getCards();
            this.__resetOtherOptions();

        } else {

            this.model = new AllCardsModel();
            cards = await this.model.getCards();

            cards = this.class ? cards.filter(card => card.playerClass === this.class) : cards;
            cards = this.race ? cards.filter(card => card.race === this.race) : cards;
            cards = this.quality ? cards.filter(card => card.rarity === this.quality) : cards;
        };

        this.view.render(
            this.view.el.content,
            this.view.getCardsMarkup(cards.splice(0, 200))
        )
    }
}

export default FilterCtrl;