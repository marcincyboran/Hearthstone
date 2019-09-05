import CardListView from '../views/cardListView';
import IdCardModel from '../models/idCardModel';

class ContentCtrl {
    constructor(){
        this.view = new CardListView();
        this.model = new IdCardModel(name);
    }

    setCardListener(wrapperCallback){ 
        this.view.el.content.addEventListener('click', wrapperCallback)      
    }

    async moveClickedCard(ev) {
        // wyświetla skopiowana kartę
        // const card = ev.target.closest('article') // .dataset.cardId;
        // console.log(card);

        // this.view.render(
        //     this.view.el.cardWrapper,
        //     this.view.getCardMarkup(card)
        // );

        const cardId = ev.target.closest('article[data-cardid]').dataset.cardid;
        console.log(cardId);

        // ??
        // const card = await this.model.getIdCard();

        // this.view.render(
        //     this.view.el.cardWrapper,
        //     this.view.getCardMarkup(card[0])
        // );

        console.log(card);
        




    }

    init(contentHandler) {
        this.setCardListener(contentHandler);
    }
}




export default ContentCtrl;