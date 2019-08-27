class View {
    constructor(){
        this.el = {
            mainList: document.querySelector('.main-list'),
            content: document.querySelector('.content'),
            cardWrapper: document.querySelector('.card-wrapper')
        }
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