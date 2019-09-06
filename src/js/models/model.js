class BasicModel {
    constructor(optionsObj = {}) {
        this.baseApiUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
        this.headers = 	{
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "49dea57d2emshbe7ef5e6d5deb1bp1b808ajsn4d6f70b73f91"
        };
        this.options = optionsObj;
    }

    getParams() {
        let params = '?';
        for (let option in this.options) {

            // Omijamy opcje ustawione na off :)           
            if (this.options[option] === 'off') continue;

            params += `${option}=${this.options[option]}&`
        }
        // Usuwamy & z końca
        return params.slice(0, -1);
    }

    getFullUrl() {
        const gotParams = Object.entries(this.options).length !== 0;
        return `${this.baseApiUrl}${this.endpoint}${(gotParams) ? this.getParams() : '' }`;
    }

    setOptions(paramsObj) {
        this.options = paramsObj;
    }
}

export default BasicModel;