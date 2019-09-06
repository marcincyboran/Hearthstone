import CardListView from '../views/cardListView';
import SingleCardModel from '../models/singleCardModel';

class SingleCardCtrl {
    constructor(name) {
        this.model = new SingleCardModel(name);
        this.view = new CardListView();
    }

    async loadSingleCard() {
        // zapisuje zawartości obu kontenerów przed załadowaniem loadera
        const innerCardWrapper = this.view.el.cardWrapper.innerHTML;
        const innerContent = this.view.el.content.innerHTML;
        let target;

        // ładuje loader w obu kontenerach bo nie mogę jeszcze stwierdzić w którym się coś wyświetli
        this.view.renderLoader(this.view.el.cardWrapper);
        this.view.renderLoader(this.view.el.content);

        const card = await this.model.getCard();
        
        // renderuje karte/karty w odpowiednim kontenerze, przywracajac do tego który pozostał jego wcześniejszą zawartość
        if (card.length === 1) {
            target = this.view.el.cardWrapper;
            this.view.el.content.innerHTML = innerContent;
        } else {
            target = this.view.el.content;
            this.view.el.cardWrapper.innerHTML = innerCardWrapper;
        }

        this.view.el.switcher = target;

        if (card.error === 404) {
            this.view.render(
                this.view.el.switcher,
                `<p class="card__error">${card.message}</p>`
            );
        } else {
            this.view.render(
                this.view.el.switcher,
                this.view.getCardsMarkup(card)
            );
        }
    } 
}

export default SingleCardCtrl;