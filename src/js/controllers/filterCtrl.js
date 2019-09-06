import FilterView from '../views/filterView';
import FilterModel from '../models/filterModel';

class FilterCtrl {
    constructor() {
        this.view = new FilterView();
        this.model = new FilterModel();
        // this.__filters = filters;
        // this.__setFilters(filters) //przeslanie formularza
    }

    setListener(filterCallback) {
        this.view.el.filterForm.addEventListener('submit', filterCallback);
    }
    
    updateFiltersView(query) {
        const dynamicSelectContent = this.model[query];
        this.view.updateDynamic(dynamicSelectContent, query)
    }

    getFilterObject() {
        this.filterObj = {
            dynamic: {
                type: (this.view.dynamicSelect.selectedOptions[0].value !== 'off') ? this.view.dynamicSelect.parentElement.dataset.name : 'off',
                value: this.view.dynamicSelect.selectedOptions[0].value,
            },
            optionals: {
                health: this.view.healthSelect.options[this.view.healthSelect.selectedIndex].value,
                attack: this.view.attackSelect.options[this.view.attackSelect.selectedIndex].value,
                cost: this.view.costSelect.options[this.view.costSelect.selectedIndex].value,
            }
        }
        return this.filterObj;
    }

    init(filterCallback) {
        this.setListener(filterCallback);
    }

}

export default FilterCtrl;