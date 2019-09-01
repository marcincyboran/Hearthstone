import Model from './model';

class ByRaceModel extends Model {
    constructor(race, optionsObj) {
        super(optionsObj);
        this.endpoint = `cards/races/${race}`;
    }

    async getCards() {
        try {
            const rawData = await fetch(this.getFullUrl(), {
                'headers': {...this.headers}
            });
            const data = await rawData.json();

            console.log('Race Model data:')
            console.log(data)
            
            // Można tu ewentualnie zrobić map() na data i zwrócic w innej formie

            return data;
            
        } catch (error) {
            return new Error(`Wild ERROR occured, can't get cards list. Details: ${error}`)
        }
    }
}

export default ByRaceModel;