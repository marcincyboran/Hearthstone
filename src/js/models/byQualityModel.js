import Model from './model';

class byQualityModel extends Model {
    constructor(quality, optionsObj) {
        super(optionsObj);
        this.endpoint = `cards/qualities/${quality}`;
    }

    async getCards() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            const data = await rawData.json();

            console.log('Quality Model data:')
            console.log(data)
            
            // Można tu ewentualnie zrobić map() na data i zwrócic w innej formie

            return data;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default byQualityModel;