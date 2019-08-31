import Model from './model';

class BacksModel extends Model {
    constructor(optionsObj) {
        super(optionsObj);
        this.endpoint = 'cardbacks';
    }

    async getAllBacks() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            this.backs = await rawData.json();
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default BacksModel;