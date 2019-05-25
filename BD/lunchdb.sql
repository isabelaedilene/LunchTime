-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 25-Maio-2019 às 06:24
-- Versão do servidor: 10.1.35-MariaDB
-- versão do PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lunchdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacaopedidos`
--

CREATE TABLE `avaliacaopedidos` (
  `idAvaliacaoPedido` int(11) NOT NULL,
  `idPedido_fk` int(11) NOT NULL,
  `notaPedido` int(11) NOT NULL,
  `comentarioPedido` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacaorestaurantes`
--

CREATE TABLE `avaliacaorestaurantes` (
  `idAvaliacaoRestaurante` int(11) NOT NULL,
  `idCliente_fk` int(11) NOT NULL,
  `idRestaurante_fk` int(11) NOT NULL,
  `notaAvaliacao` int(11) NOT NULL,
  `comentarioAvaliacao` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL,
  `nomeCliente` varchar(255) NOT NULL,
  `emailCliente` varchar(255) NOT NULL,
  `senhaCliente` varchar(255) NOT NULL,
  `telefoneCliente` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`idCliente`, `nomeCliente`, `emailCliente`, `senhaCliente`, `telefoneCliente`, `createdAt`, `updatedAt`) VALUES
(2, 'Daniel Vargas', 'daniel.vargas@sga.pucminas.br', 'acesso13', '997890394', '2019-03-13 02:04:42', '2019-03-13 02:04:42'),
(5, 'Arthur', 'dh.vargas13@gmail.com', 'acesso13', '997893034', '2019-05-19 01:31:59', '2019-05-19 01:31:59');

-- --------------------------------------------------------

--
-- Estrutura da tabela `imagempedidos`
--

CREATE TABLE `imagempedidos` (
  `idImagemPedidos` int(11) NOT NULL,
  `idPedido_fk` int(11) NOT NULL,
  `nomeImagemPedidos` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `imagemprodutos`
--

CREATE TABLE `imagemprodutos` (
  `idImagemProduto` int(11) NOT NULL,
  `idProduto_fk` int(11) NOT NULL,
  `nomeImagemProduto` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `imagemrestaurantes`
--

CREATE TABLE `imagemrestaurantes` (
  `idImagemRestaurante` int(11) NOT NULL,
  `idRestaurante_fk` int(11) NOT NULL,
  `nomeImagemRestaurante` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedidos` int(11) NOT NULL,
  `idCliente_fk` int(11) NOT NULL,
  `idRestaurante_fk` int(11) NOT NULL,
  `valorCompra` double NOT NULL,
  `horarioChegada` varchar(255) NOT NULL,
  `statusPedido` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idProduto` int(11) NOT NULL,
  `idRestaurante_fk` int(11) NOT NULL,
  `nomeProduto` varchar(255) NOT NULL,
  `ingredientesProduto` varchar(255) NOT NULL,
  `valorProduto` double NOT NULL,
  `valorPromocaoProduto` double DEFAULT NULL,
  `tempoPreparo` varchar(255) NOT NULL,
  `dataInicioPromocao` datetime DEFAULT NULL,
  `dataFimPromocao` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `restaurantes`
--

CREATE TABLE `restaurantes` (
  `idRestaurante` int(11) NOT NULL,
  `nomeRestaurante` varchar(255) NOT NULL,
  `cnpjRestaurante` varchar(255) NOT NULL,
  `telefoneRestaurante` varchar(255) NOT NULL,
  `emailRestaurante` varchar(255) NOT NULL,
  `senhaRestaurante` varchar(255) NOT NULL,
  `cepRestaurante` varchar(255) NOT NULL,
  `estadoRestaurante` varchar(255) NOT NULL,
  `cidadeRestaurante` varchar(255) NOT NULL,
  `bairroRestaurante` varchar(255) NOT NULL,
  `ruaRestaurante` varchar(255) NOT NULL,
  `numeroRestaurante` int(11) NOT NULL,
  `pontoReferenciaRestaurante` varchar(255) DEFAULT NULL,
  `complementoRestaurante` varchar(255) DEFAULT NULL,
  `tipoRestaurante` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `restaurantes`
--

INSERT INTO `restaurantes` (`idRestaurante`, `nomeRestaurante`, `cnpjRestaurante`, `telefoneRestaurante`, `emailRestaurante`, `senhaRestaurante`, `cepRestaurante`, `estadoRestaurante`, `cidadeRestaurante`, `bairroRestaurante`, `ruaRestaurante`, `numeroRestaurante`, `pontoReferenciaRestaurante`, `complementoRestaurante`, `tipoRestaurante`, `createdAt`, `updatedAt`) VALUES
(1, 'Talheres', '99393387', '+553197890394', 'daniel.vargas@sga.pucminas.br', '123teste', '53555', 'Minas', 'Dbszu', 'Hxhzb', 'Xjdhdb', 66, 'Djhdhdh', 'Hwjsshh', 'Vegetariano', '2019-05-01 00:35:16', '2019-05-01 00:35:16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190312185615-criar-clientes.js'),
('20190312204553-create-restaurante.js'),
('20190312204716-create-avaliacaoRestaurante.js'),
('20190312204735-create-produto.js'),
('20190312204818-create-imagemRestaurante.js'),
('20190312204841-create-imagemProduto.js'),
('20190312204849-create-pedido.js'),
('20190312204943-create-imagemPedido.js'),
('20190312205003-create-avaliacaoPedido.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avaliacaopedidos`
--
ALTER TABLE `avaliacaopedidos`
  ADD PRIMARY KEY (`idAvaliacaoPedido`),
  ADD UNIQUE KEY `idAvaliacaoPedido` (`idAvaliacaoPedido`);

--
-- Indexes for table `avaliacaorestaurantes`
--
ALTER TABLE `avaliacaorestaurantes`
  ADD PRIMARY KEY (`idAvaliacaoRestaurante`),
  ADD UNIQUE KEY `idAvaliacaoRestaurante` (`idAvaliacaoRestaurante`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `idCliente` (`idCliente`);

--
-- Indexes for table `imagempedidos`
--
ALTER TABLE `imagempedidos`
  ADD PRIMARY KEY (`idImagemPedidos`),
  ADD UNIQUE KEY `idImagemPedidos` (`idImagemPedidos`);

--
-- Indexes for table `imagemprodutos`
--
ALTER TABLE `imagemprodutos`
  ADD PRIMARY KEY (`idImagemProduto`),
  ADD UNIQUE KEY `idImagemProduto` (`idImagemProduto`);

--
-- Indexes for table `imagemrestaurantes`
--
ALTER TABLE `imagemrestaurantes`
  ADD PRIMARY KEY (`idImagemRestaurante`),
  ADD UNIQUE KEY `idImagemRestaurante` (`idImagemRestaurante`);

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedidos`),
  ADD UNIQUE KEY `idPedidos` (`idPedidos`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idProduto`),
  ADD UNIQUE KEY `idProduto` (`idProduto`);

--
-- Indexes for table `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`idRestaurante`),
  ADD UNIQUE KEY `idRestaurante` (`idRestaurante`),
  ADD UNIQUE KEY `cnpjRestaurante` (`cnpjRestaurante`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avaliacaopedidos`
--
ALTER TABLE `avaliacaopedidos`
  MODIFY `idAvaliacaoPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `avaliacaorestaurantes`
--
ALTER TABLE `avaliacaorestaurantes`
  MODIFY `idAvaliacaoRestaurante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `imagempedidos`
--
ALTER TABLE `imagempedidos`
  MODIFY `idImagemPedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imagemprodutos`
--
ALTER TABLE `imagemprodutos`
  MODIFY `idImagemProduto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `imagemrestaurantes`
--
ALTER TABLE `imagemrestaurantes`
  MODIFY `idImagemRestaurante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idProduto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurantes`
--
ALTER TABLE `restaurantes`
  MODIFY `idRestaurante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
