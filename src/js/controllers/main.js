import CardCtrl from './cardCtrl';

class MainCtrl {
    constructor(view) {
        this.view = view
    }

    renderAllCards() {

    }

    setListeners() {
        this.view.el.headerNav.addEventListener('click', (ev) => {
            ev.preventDefault();
            console.log(ev.target.hash);
        });

        this.view.el.headerForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const input = ev.target.querySelector('input[type="text"]');

            console.dir(input.value);
            input.value = '';
        });

        // Case 2:
        // Ktoś wypełnia gdzieś forma klika szukaj
        // robimy więc: 
        //      const findCardCtrl = new FindCardCtrl('WYSZUKIWANA KARTA')
        //      findCardCtrl.init()
    }

    init() {
        console.log('MainCtrl init function.')
        this.setListeners();
    }
}

export default MainCtrl;