class View {
    constructor(){
        this.el = {
            headerNav: document.querySelector('.header__nav'),
            headerForm: document.querySelector('.header__form'),

            mainList: document.querySelector('.main-list'),
            content: document.querySelector('.content'),
            cardWrapper: document.querySelector('.card-wrapper')
        };
        this.elStr = {
            
        };
    }

    render(DOMElement, markup) {
        this._clearElementContent(DOMElement);
        DOMElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderLoader(parent) {
        this._clearElementContent(parent);
        const markup = `
            <div class="lds-default">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        `;
        parent.insertAdjacentHTML('afterbegin', markup);
    }

    _clearElementContent(element) {
        let el;
        if (typeof element === 'string') {
            el = document.querySelector(`${element}`)
        } else {
            el = element;
        }
        el.innerHTML = '';
    };
}

export default View