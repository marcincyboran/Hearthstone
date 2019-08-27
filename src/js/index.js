import style from './../sass/main.scss';
import './files';

import MainCtrl from './controllers/main';
import BaseView from './views/view';

new MainCtrl(BaseView).init();

// TYLKO DO TESTÓW
import AllCardsModel from './models/allCardsModel';

const test = new AllCardsModel();
// const test = new AllCardsModel({
//     health: 5
// });

test.getCards();

console.log('Testowy console.log');