import Model from './model';

class IdCardModel extends Model {
    constructor (name, optionObj) {
        super(optionObj);
        this.endpoint = `cards/${name}`;
    }

    async getIdCard(){
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

export default IdCardModel;