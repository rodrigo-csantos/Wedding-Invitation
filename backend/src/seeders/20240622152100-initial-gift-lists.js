'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('giftLists', [
      { giftName: 'Jogo de lençóis de casal (4 peças)', selected: false, idImage: 1},
      { giftName: 'Aspirador de pó', selected: false, idImage: 2},
      { giftName: 'Conjunto de toalhas de banho e rosto', selected: false, idImage: 3},
      { giftName: 'Conjunto de panelas - tramontina (5 peças)', selected: false, idImage: 4},
      { giftName: 'Aparelho de mesa de jantar', selected: false, idImage: 5},
      { giftName: 'Jogo de assadeiras - tramontina (3 peças)', selected: false, idImage: 6},
      { giftName: 'Caixa de ferramentas (ferramentas básicas)', selected: false, idImage: 8},
      { giftName: 'Varal de roupa de chão com abas portátil (alumínio)', selected: false, idImage: 9},
      { giftName: 'Edredom casal', selected: false, idImage: 10},
      { giftName: 'Ventilador de coluna', selected: false, idImage: 11},
      { giftName: 'Panela elétrica de arroz', selected: false, idImage: 12},
      { giftName: 'Jogo de xícaras de café (6 peças)', selected: false, idImage: 13},
      { giftName: 'Panela de pressão com fechamento externo (antiaderente)', selected: false, idImage: 14},
      { giftName: 'Tábua de passar roupa', selected: false, idImage: 15},
      { giftName: 'Mini escada de alumínio', selected: false, idImage: 16},
      { giftName: 'Batedeira planetária', selected: false, idImage: 17},
      { giftName: 'Cafeteira de cápsulas', selected: false, idImage: 18},
      { giftName: 'Conjunto de taças', selected: false, idImage: 19},
      { giftName: 'Multiprocessador', selected: false, idImage: 20},
      { giftName: 'Churrasqueira elétrica', selected: false, idImage: 21},
      { giftName: 'Conjunto de cortinas blackout', selected: false, idImage: 22},
      { giftName: 'Cuscuzeira 2 em 1', selected: false, idImage: 23},
      { giftName: 'Sofá retrátil', selected: false, idImage: 24},
      { giftName: 'Tapioqueira (polvilhador)', selected: false, idImage: 25},
      { giftName: 'Smart box (para TV)', selected: false, idImage: 26},
      { giftName: 'Faqueiro tramontina laguna (42 peças)', selected: false, idImage: 27},
      { giftName: 'Conjunto de facas - tramontina (6 peças)', selected: false, idImage: 28},
      { giftName: 'Frigideira funda com tampa - tramontina', selected: false, idImage: 29},
      { giftName: 'Conjunto de sobremesa de vidro (12 peças)', selected: false, idImage: 30},
      { giftName: 'Jogo refresco (7 peças)', selected: false, idImage: 31},
      { giftName: 'Climatizador de ar portátil', selected: false, idImage: 32},
      { giftName: 'Pipoqueira elétrica', selected: false, idImage: 33},
      { giftName: 'TV 32 polegadas', selected: false, idImage: 34},
      { giftName: 'Panela de Pressão elétrica', selected: false, idImage: 35},
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('giftLists', null, {});
  }
};
