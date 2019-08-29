class View {
    constructor(){
        this.el = {
            headerNav: document.querySelector('.header__nav'),
            headerForm: document.querySelector('.header__form'),

            mainList: document.querySelector('.main-list'),
            content: document.querySelector('.content'),
            cardWrapper: document.querySelector('.card-wrapper')
        }
        this.elStr = {
            
        }
    }

    render(DOMElement, markup) {
        DOMElement.innerHTML = '' // Czyści element przed wyswietleniem kart z kolejnego wyszukiwania
        DOMElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderLoader(parent) {
        const markup = `
            <div>
                // TUTAJ BĘDZIE HTML LOADERA
            </div>
        `
        parent.insertAdjacentHTML('afterbegin', markup);
    }

    clearElementContent(element) {
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