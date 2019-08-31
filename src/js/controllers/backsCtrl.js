import BackView from '../views/backsView';
import BacksModel from '../models/backsModel';

class BacksCtrl {
    constructor() {
        this.model = new BacksModel();
        this.view = new BackView();
    }

    async loadBacks() {
        this.view.renderLoader(this.view.el.content);

        await this.model.getAllBacks();

        this.view.render(
            this.view.el.content,
            this.view.getBacksMarkup(this.model.backs.splice(0, 50))
        )
    }
}

export default BacksCtrl;