import Model from './model';

class AllCardsModel extends Model {
    constructor(optionsObj) {
        super(optionsObj);
        this.endpoint = 'cards';
    }

    async getCards() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            const data = await rawData.json();

            console.log('Model data:')
            console.log(data)
            
            // Można tu ewentualnie zrobić map() na data i zwrócic w innej formie

            return data;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default AllCardsModel;