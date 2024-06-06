'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Liked_Game_Infos', [
      {
        GameId: 1,
        Name: 'The Witcher 3: Wild Hunt',
        Img: 'https://example.com/witcher3.jpg',
        Desc: 'Open-world action RPG with a captivating story.',
      },
      {
        GameId: 2,
        Name: 'Red Dead Redemption 2',
        Img: 'https://example.com/rdr2.jpg',
        Desc: 'Epic Western adventure with stunning visuals.',
      },
      {
        GameId: 3,
        Name: 'Hollow Knight',
        Img: 'https://example.com/hollowknight.jpg',
        Desc: 'Atmospheric 2D Metroidvania with challenging combat.',
      },
      {
        GameId: 4,
        Name: 'Hades',
        Img: 'https://example.com/hades.jpg',
        Desc: 'Roguelike dungeon crawler with addictive gameplay.',
      },
      {
        GameId: 5,
        Name: 'Horizon Zero Dawn',
        Img: 'https://example.com/horizon.jpg',
        Desc: 'Post-apocalyptic action RPG with robot dinosaurs.',
      },
      {
        GameId: 6,
        Name: 'Disco Elysium',
        Img: 'https://example.com/discoelysium.jpg',
        Desc: 'Unique detective RPG with deep character development.',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Liked_Game_Infos', null, {});
  }
};
