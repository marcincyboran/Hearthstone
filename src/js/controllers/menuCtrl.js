import BaseView from '../views/view';

class MenuCtrl {
    constructor() {
        this.view = new BaseView();
    }

    clearForm() {
        const input = this.view.el.headerForm.querySelector('input[type="text"]');
        input.value = '';
    }

    setFormListener(callback) {
        this.view.el.headerForm.addEventListener('submit', callback);
    }

    setMenuListener(callback) {
        this.view.el.headerNav.addEventListener('click', callback);
    }

    init(navHandler, searchHandler) {
        this.setMenuListener(navHandler);
        this.setFormListener(searchHandler);
    }
}

export default MenuCtrl;