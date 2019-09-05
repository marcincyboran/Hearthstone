import CardListView from '../views/cardListView';


class ContentCtrl {
    constructor(){
        this.view = new CardListView();
        
    }


    setCardListener(wrapperCallback){
        const cardId = event.target.closest('article[data="cardId"]').dataset.cardId;
        cardId.addEventListener('click', wrapperCallback)
            
  
    }

    loadCard(){
        
        console.log(cardId);

    }



}




export default ContentCtrl;