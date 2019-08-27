class MainCtrl {
    constructor(view) {
        this.view = view
    }

    setListeners() {
        // Tutaj ustawimy eventListenery dla globalnych elementów, które nie będą się zmieniać
        // niezaleznie co zrobimy - takich jak menu, nawigacja czy deck wrapper

        // Case 1:
        // Ktoś klika w menu i wybiera: pokaż wszystkie karty
        // robimy więc: 
        //      let allCardsCtrl = new AllCardsCtr()
        //      allCardsCtrl.init()
            

        // Case 2:
        // Ktoś wypełnia gdzieś forma klika szukaj
        // robimy więc: 
        //      const findCardCtrl = new FindCardCtrl('WYSZUKIWANA KARTA')
        //      findCardCtrl.init()
    }

    init() {
        console.log('MainCtrl init function.')

        // Tutaj zainicjalizujemy element 
        this.setListeners();
    }
}

export default MainCtrl;