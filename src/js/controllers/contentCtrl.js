import CardListView from '../views/cardListView';


class ContentCtrl {
    constructor(){
        this.view = new CardListView();
    }

    setCardListener(wrapperCallback){ 
        this.view.el.content.addEventListener('click', wrapperCallback)      
    }

    moveClickedCard(ev) {
        const card = ev.target.closest('article') // .dataset.cardId;
        console.log(card);
    }

    init(contentHandler) {
        this.setCardListener(contentHandler);
    }
}




export default ContentCtrl;