import View from './view';

class FilterView extends View {
    constructor() {
        super();
        this.dynamicSelect = this.el.filterForm.querySelector('select[name="dynamic"]');
        this.healthSelect = this.el.filterForm.querySelector('select[name="health"]');
        this.attackSelect = this.el.filterForm.querySelector('select[name="attack"]');
        this.costSelect = this.el.filterForm.querySelector('select[name="cost"]');
    }

    updateDynamic(arrOfOptions, type) {

        this.dynamicSelect.innerHTML = '';
        this.dynamicSelect.parentElement.dataset.name = type;

        for(let option of arrOfOptions) {
            const opt = document.createElement('option');
            opt.text = option;
            opt.value = option;
            this.dynamicSelect.add(opt);
        }
    }
    
    resetOptionals() {
        this.healthSelect.selectedIndex = 0;
        this.attackSelect.selectedIndex = 0;
        this.costSelect.selectedIndex = 0;
    };

}

export default FilterView;