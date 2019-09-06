import BaseView from '../views/view';
import MenuCtrl from './menuCtrl';
import CardListCtrl from './cardListCtrl';
import SingleCardCtrl from './singleCardCtrl';
import BackCtrl from './backsCtrl';
import FilterCtrl from './filterCtrl';
import ContentCtrl from './contentCtrl';

class MainCtrl {
    constructor() {
        this.view = new BaseView()
        this.menuCtrl = new MenuCtrl();
        this.cardListCtrl = new CardListCtrl();
        this.backCtrl = new BackCtrl();
        this.filterCtrl = new FilterCtrl();
        this.contentCtrl = new ContentCtrl();

    }

    menuNavClickHandler(ev) {
        ev.preventDefault();
        
        switch(ev.target.hash) {
            case('#info') :
                console.log(ev.target.hash);
            break;

            case('#backs') :
                this.backCtrl.loadBacks();
            break;

            default: 
                // Slice pozbywa się # z początku
                this.filterCtrl.updateFiltersView((ev.target.hash).slice(1));
        }
    }

    menuFormSearchHandler(ev) {
        ev.preventDefault();

        const cardName = ev.target[0].value;
        
        this.singleCardCtrl = new SingleCardCtrl(cardName);
        this.singleCardCtrl.loadSingleCard();
        this.menuCtrl.clearForm();
    }

    updateFiltersHandler(ev) {
        ev.preventDefault();

        const filterObj = this.filterCtrl.getFilterObject();
        const queryType = filterObj.dynamic.type;
        const queryValue = filterObj.dynamic.value;

        switch(queryType) {
            case('types') :
                this.cardListCtrl.byTypeModel.setOptions(filterObj.optionals)
                this.cardListCtrl.loadCardsByType(queryValue);
            break;

            case('sets') :
                this.cardListCtrl.bySetModel.setOptions(filterObj.optionals)
                this.cardListCtrl.loadCardsBySet(queryValue);
            break;

            case('races') :
                this.cardListCtrl.byRaceModel.setOptions(filterObj.optionals)
                this.cardListCtrl.loadCardsByRace(queryValue);
            break;

            case('classes') :
                this.cardListCtrl.byClassModel.setOptions(filterObj.optionals)
                this.cardListCtrl.loadCardsByClass(queryValue);
            break;

            default: 
                this.cardListCtrl.allCardsModel.setOptions(filterObj.optionals)
                this.cardListCtrl.loadAllCard();
        }

        console.log(filterObj);
    }

    contentHandler(ev) {
        ev.preventDefault();
        this.contentCtrl.moveClickedCard(ev)
    }


    init() {
        console.log('Main init.');

        this.menuCtrl.init(
            this.menuNavClickHandler.bind(this),
            this.menuFormSearchHandler.bind(this),
        );

        this.filterCtrl.init(
            this.updateFiltersHandler.bind(this)
        )
        
        this.contentCtrl.init(
            this.contentHandler.bind(this)
        );

        // this.cardListCtrl.loadAllCard();
    }
}

export default MainCtrl;