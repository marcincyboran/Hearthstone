import Model from './model';

class infoModel extends Model {
    constructor(optionObj) {
        super(optionObj);
        this.endpoint = 'cards';
    }

    async getCards() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            const data = await rawData.json();

            console.log('Info Model data: ')
            console.log(data)

            return data;
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }

}

export default infoModel;