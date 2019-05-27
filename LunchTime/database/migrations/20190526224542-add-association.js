'use strict';

var sql = "alter table `Pedidos`" +
    " add column `IdProduto` integer not null " +
    ", add foreign key (`IdProduto`) references `Produtos` (`idProduto`)" +
    " on update cascade on delete restrict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
        `
        alter table Pedidos
        add column IdProduto int not null,
        add foreign key (IdProduto) references Produtos(IdProduto)
        `
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pedidos', 'idProduto');
  }
};
