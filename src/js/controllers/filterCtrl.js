import FilterView from '../views/filterView';
import FilterModel from '../models/filterModel';

class FilterCtrl {
    constructor() {
        this.view = new FilterView();
        this.model = new FilterModel();
        // this.__filters = filters;
        // this.__setFilters(filters) //przeslanie formularza
    }

    setListener(filterCallback) {
        this.view.el.filterForm.addEventListener('submit', filterCallback);
    }
    
    updateFiltersView(query) {
        const dynamicSelectContent = this.model[query];
        this.view.updateDynamic(dynamicSelectContent, query)
    }

    getFilterObject() {
        this.filterObj = {
            dynamic: {
                type: (this.view.dynamicSelect.selectedOptions[0].value !== 'off') ? this.view.dynamicSelect.parentElement.dataset.name : 'off',
                value: this.view.dynamicSelect.selectedOptions[0].value,
            },
            optionals: {
                health: this.view.healthSelect.options[this.view.healthSelect.selectedIndex].value,
                attack: this.view.attackSelect.options[this.view.attackSelect.selectedIndex].value,
                cost: this.view.costSelect.options[this.view.costSelect.selectedIndex].value,
            }
        }
        return this.filterObj;
    }

    init(filterCallback) {
        this.setListener(filterCallback);
    }

    // __setFilters(filters) {
    //     this.class = filters[0].selectedOptions[0].value;
    //     this.race = filters[1].selectedOptions[0].value;
    //     this.quality = filters[2].selectedOptions[0].value;
    //     this.durability = filters[3].selectedOptions[0].value;
    // };


    // async loadCards() {
    //     this.view.renderLoader(this.view.el.content);

    //     let cards;

    //     if (this.durability) {

    //         this.model = new AllCardsModel({ durability: this.durability }); 
    //         cards = await this.model.getCards();
    //         this.__resetOtherOptions();

    //     } else {

    //         this.model = new AllCardsModel();
    //         cards = await this.model.getCards();

    //         cards = this.class ? cards.filter(card => card.playerClass === this.class) : cards;
    //         cards = this.race ? cards.filter(card => card.race === this.race) : cards;
    //         cards = this.quality ? cards.filter(card => card.rarity === this.quality) : cards;
    //     };

    //     this.view.render(
    //         this.view.el.content,
    //         this.view.getCardsMarkup(cards.splice(0, 200))
    //     )
    // }
}

export default FilterCtrl;