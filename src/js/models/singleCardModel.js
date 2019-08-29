import Model from './model';

class SingleCardModel extends Model {
    constructor(name, optionsObj) {
        super(optionsObj);
        this.endpoint = `cards/search/${name}`;
    }

    async getCard() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            const data = await rawData.json();

            return data;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default SingleCardModel;