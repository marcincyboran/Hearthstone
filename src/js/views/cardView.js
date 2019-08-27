import View from './view';

class CardView extends View {
    constructor() {
        super();
        this.elStr = {
            // TO JEST TYLKO PRZYKŁAD, TAKIE KLASY NIE ISTNIEJĄ :)
            card: 'card',
            cardDetail: 'card__detail'
        }
    }

    init (
        /* 
            Tutaj wywołamy jakieś funkcje w kolejności np:
            this.renderWrapper();
            this.renderCards();
            this.renderCard();
            this.renderButtons();
        */ 
    )
}

export default CardView;