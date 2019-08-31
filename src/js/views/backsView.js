import View from './view';

class BackView extends View {
    constructor() {
        super();
    }

    getBacksMarkup(backsArr) {
        let output = '';
        backsArr.forEach(backObj => {
            output += this.getBackMarkup(backObj);
        });
        return output;
    }

    getBackMarkup(backObj) {
        return `
            <article class="back">
                <figure class="back__images-wrapper">
                    <img    
                        class="back__image" 
                        src="${ backObj.img ? backObj.img : "./../../assets/back.png"}"
                        alt="${ backObj.name ? backObj.name : backObj.cardBackId }" >
                </figure>
                <h4 class="back__title">${ backObj.name ? backObj.name : backObj.cardId }</h4>
                <p class="back__description">${ backObj.description ? backObj.description : 'No text' }</p>
            </article>
        `
    }
}

export default BackView;