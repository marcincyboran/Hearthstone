import BaseView from '../views/view';
import MenuModel from '../models/filterModel';

class MenuCtrl {
    constructor() {
        this.view = new BaseView();
        this.model = new MenuModel();
    }

    clearForm() {
        const input = this.view.el.headerForm.querySelector('input[type="text"]');
        input.value = '';
    }

    setFormListener(headerCallback) {
        this.view.el.headerForm.addEventListener('submit', headerCallback);
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