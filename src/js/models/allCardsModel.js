import Model from './model';

class AllCardsModel extends Model {
    constructor(optionsObj) {
        super(optionsObj);
        this.endpoint = 'cards';
    }

    cardsObjectToSingleArray(obj) {
        const allCards = [];
        for (let property in obj) {
            allCards.push(...obj[property])
        }
        return allCards;
    }

    async getCards() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            
            const dataObj = await rawData.json();
            const cards = this.cardsObjectToSingleArray(dataObj);
            
            return cards;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default AllCardsModel;