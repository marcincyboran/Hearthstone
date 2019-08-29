import style from './../sass/main.scss';
import './files';

import MainCtrl from './controllers/main';
import BaseView from './views/view';

new MainCtrl(new BaseView()).init();

// TYLKO DO TESTÓW
// import AllCardsModel from './models/allCardsModel';
// import byQualityModel from './models/byQualityModel';
// import byTypeModel from './models/byTypeModel';
// import singleCardModel from './models/singleCardModel';

// const test = new AllCardsModel();
// const test = new AllCardsModel({
//     health: 5
// });

/**
 *  rodzaje quality: "Free, Common, Rare, Epic, Legendary"
 */ 
// const testQualityModel = new byQualityModel('Rare');
// const testQualityModel = new byQualityModel('Free', {
//     health: 5
// });


/**
 *  types: "Weapon, Minion, Hero, Spell"
 */ 
// const testTypeModel = new byTypeModel('Weapon');
// const testTypeModel = new byTypeModel('Weapon', {
//     cost: 2
// });


/**
 *  Wyszukuje po nazwie karty lub id, jesli jest kilka kart z tą sama nazwa zwraca je wszystkie.
 */
// const testSingleCardModel = new singleCardModel('Ysera');

// test.getCards();
// testQualityModel.getCards();
// testTypeModel.getCards();
// testSingleCardModel.getCards();
