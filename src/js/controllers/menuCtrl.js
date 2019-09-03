import BaseView from '../views/view';

class MenuCtrl {
    constructor() {
        this.view = new BaseView();
    }

    clearForm() {
        const input = this.view.el.headerForm.querySelector('input[type="text"]');
        input.value = '';
    }

    setFormListener(headerCallback, filterCallback) {
        this.view.el.headerForm.addEventListener('submit', headerCallback);
        this.view.el.filterForm.addEventListener('submit', filterCallback);
    }

    setMenuListener(callback) {
        this.view.el.headerNav.addEventListener('click', callback);
    }

    init(navHandler, searchHandler, filterHandler) {
        this.setMenuListener(navHandler);
        this.setFormListener(searchHandler, filterHandler);
    }
}

export default MenuCtrl;