

class CardCtrl {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    setListeners() {
        // Szukamy we view.elStr, ponieważ zapiszemy tam wszystkie klasy css powiązane z widokiem 
        const wrapper = document.querySelector(`${this.view.elStr.wrapper}`)

        // Eventy zaleznie od potrzeb, tutaj tylko przykładowy,
        // postarajmy się to robić przy pomocy delegacji zdarzeń - sprawdzając target

        wrapper.addEventListener('click', (event) => {

            // Zaleznie od event.target jakaś logika, można skorzystać ze switcha

        })
    }

    init() {
        
        this.setListeners();
    }
}