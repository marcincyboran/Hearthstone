import Model from './model';

class ByTypeModel extends Model {
    constructor(optionsObj) {
        super(optionsObj);
        this.endpointBlueprint = `cards/types/`;
    }

    async getCards(query) {
        this.endpoint = `${this.endpointBlueprint}${query}`;

        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            this.cards = await rawData.json();

            return this.cards;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default ByTypeModel;