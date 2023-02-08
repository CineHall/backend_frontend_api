-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 08 fév. 2023 à 10:55
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cinehall`
--

-- --------------------------------------------------------

--
-- Structure de la table `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  `place_price` float NOT NULL,
  `hall_name` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `films`
--

INSERT INTO `films` (`id`, `name`, `time`, `place_price`, `hall_name`, `image`) VALUES
(1, 'Sbah Morakoch', '2 hours', 40, 'salle_1', 'http://localhost/backend_frontend_api/backend/img/Sbah_Morakoch.jpg'),
(2, 'Hdidane', '1h30min', 60, 'salle_2', 'http://localhost/backend_frontend_api/backend/img/Hdidane.jpg'),
(3, 'Squed Game', '3h', 100, 'salle_3', 'http://localhost/backend_frontend_api/backend/img/squid_game.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `salle_name` varchar(250) NOT NULL,
  `place_numero` int(11) NOT NULL,
  `reservation_date` date NOT NULL DEFAULT current_timestamp(),
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `id_user`, `salle_name`, `place_numero`, `reservation_date`, `price`) VALUES
(19, 56, 'salle_2', 12, '2023-02-16', 60),
(20, 56, 'salle_2', 49, '2023-02-24', 60),
(21, 56, 'salle_2', 50, '0000-00-00', 60),
(22, 56, 'salle_2', 44, '0000-00-00', 40);

-- --------------------------------------------------------

--
-- Structure de la table `salle_1`
--

CREATE TABLE `salle_1` (
  `id_place` int(11) NOT NULL,
  `place_numero` int(11) NOT NULL,
  `reserve` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 empty | 1 full'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `salle_1`
--

INSERT INTO `salle_1` (`id_place`, `place_numero`, `reserve`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 0),
(5, 5, 0),
(6, 6, 0),
(7, 7, 0),
(8, 8, 0),
(9, 9, 0),
(10, 10, 0),
(11, 11, 0),
(12, 12, 0),
(13, 13, 0),
(14, 14, 0),
(15, 15, 0),
(16, 16, 0),
(17, 17, 0),
(18, 18, 0),
(19, 19, 0),
(20, 20, 0),
(21, 21, 0),
(22, 22, 0),
(23, 23, 0),
(24, 24, 0),
(25, 25, 0),
(26, 26, 0),
(27, 27, 0),
(28, 28, 0),
(29, 29, 0),
(30, 30, 0),
(31, 31, 0),
(32, 32, 0),
(33, 33, 0),
(34, 34, 0),
(35, 35, 0),
(36, 36, 0),
(37, 37, 0),
(38, 38, 0),
(39, 39, 0),
(40, 40, 0),
(41, 41, 0),
(42, 42, 0),
(43, 43, 0),
(44, 44, 0),
(45, 45, 0),
(46, 46, 0),
(47, 47, 0),
(48, 48, 0),
(49, 49, 0),
(50, 50, 0);

-- --------------------------------------------------------

--
-- Structure de la table `salle_2`
--

CREATE TABLE `salle_2` (
  `id_place` int(11) NOT NULL,
  `place_numero` int(11) NOT NULL,
  `reserve` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 empty | 1 full'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `salle_2`
--

INSERT INTO `salle_2` (`id_place`, `place_numero`, `reserve`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 0),
(5, 5, 0),
(6, 6, 0),
(7, 7, 0),
(8, 8, 0),
(9, 9, 0),
(10, 10, 0),
(11, 11, 0),
(12, 12, 1),
(13, 13, 0),
(14, 14, 0),
(15, 15, 0),
(16, 16, 0),
(17, 17, 0),
(18, 18, 0),
(19, 19, 0),
(20, 20, 0),
(21, 21, 0),
(22, 22, 0),
(23, 23, 0),
(24, 24, 0),
(25, 25, 0),
(26, 26, 0),
(27, 27, 0),
(28, 28, 0),
(29, 29, 0),
(30, 30, 0),
(31, 31, 0),
(32, 32, 0),
(33, 33, 0),
(34, 34, 0),
(35, 35, 0),
(36, 36, 0),
(37, 37, 0),
(38, 38, 0),
(39, 39, 0),
(40, 40, 0),
(41, 41, 0),
(42, 42, 0),
(43, 43, 0),
(44, 44, 1),
(45, 45, 0),
(46, 46, 0),
(47, 47, 0),
(48, 48, 0),
(49, 49, 1),
(50, 50, 1);

-- --------------------------------------------------------

--
-- Structure de la table `salle_3`
--

CREATE TABLE `salle_3` (
  `id_place` int(11) NOT NULL,
  `place_numero` int(11) NOT NULL,
  `reserve` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 empty | 1 full'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `salle_3`
--

INSERT INTO `salle_3` (`id_place`, `place_numero`, `reserve`) VALUES
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 0),
(5, 5, 0),
(6, 6, 0),
(7, 7, 0),
(8, 8, 0),
(9, 9, 0),
(10, 10, 0),
(11, 11, 0),
(12, 12, 0),
(13, 13, 0),
(14, 14, 0),
(15, 15, 0),
(16, 16, 0),
(17, 17, 0),
(18, 18, 0),
(19, 19, 0),
(20, 20, 0),
(21, 21, 0),
(22, 22, 0),
(23, 23, 0),
(24, 24, 0),
(25, 25, 0),
(26, 26, 0),
(27, 27, 0),
(28, 28, 0),
(29, 29, 0),
(30, 30, 0),
(31, 31, 0),
(32, 32, 0),
(33, 33, 0),
(34, 34, 0),
(35, 35, 0),
(36, 36, 0),
(37, 37, 0),
(38, 38, 0),
(39, 39, 0),
(40, 40, 0),
(41, 41, 0),
(42, 42, 0),
(43, 43, 0),
(44, 44, 0),
(45, 45, 0),
(46, 46, 0),
(47, 47, 0),
(48, 48, 0),
(49, 49, 0),
(50, 50, 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `token`) VALUES
(45, 'marouane', 'uanemaro216@gmail.com', '$2y$10$vTiHzQwmzkU.LbBrddUyT.N16UINP4aDVFYKsnp3Zu8Xt3VdIPvoi', '5f2539fe9f1cc56b938c509cec3e11ad'),
(46, 'hamza', 'hamza@gmail.com', '$2y$10$8WplsIAfrmTA0Ig9exLJRemGj4YtAdP1CHvpkOB93yn9TSg2s1nO.', 'bb2d07489bce0112223132ab14d66815'),
(47, 'ayoub', 'ayoub@gmail.com', '$2y$10$AumJnyIw9dZzKsA/5jPNK.vweO1kaONa7qZWNrlDizAg.9EecTtTi', '60659d29690bb24536e8c6a96f182740'),
(48, 'zineb', 'zineb@gmail.com', '$2y$10$NFQOgs6ek0Ju0dlISqsSP.ZA.3/g96qj5Eq6ODU8fTTd5ZGFYPU9q', '56c4e855e679c7723446c916d9d0fcc2'),
(49, 'mohammed', 'mohammed@gmail.com', '$2y$10$J1tdkqNiXMGlb9HeIQ7ZXenH2LvJWp.nL.a5yHVn3ooJ7lT4tC6Yu', '89b212c3ddaaeca44521acdef63e12cd'),
(50, 'mohtan', 'mohtan@gmail.com', '$2y$10$VqCHlxJMYekabjlqYT9v8OLRSOEYq8wmNPnJTSV0e37UZjmGmewGq', '4321d213c9c975462db3691c77aed2bf'),
(51, 'mohe', 'mohe@gmail.com', '$2y$10$z4l0s5lxW3LlRyufkCsr..0Op8Z.Z6Hq3b5RF6mFYJYDuytfaRd/m', 'c3e6e588db58f49822741d686294101b'),
(52, 'miloud', 'miloud@gmail.com', '$2y$10$/ERMxJ1VkB6h/unFoSwwTOqrNyT1azWEecLYoaJKWfKEbgJmaxVne', '81fb1fb43dede5f4e1649e4f729ff5c3'),
(53, 'ikram', 'ikram@gmail.com', '$2y$10$mrmRFaSlVbNwkvswFnnQB.JZDxyetbflmYgFBqx.R6eT8NBZE6Kv2', '53e725af96e90627380fa8c6b21f26f4'),
(54, 'pc', 'pc@gmail.com', '$2y$10$HVL/pL6y28McAiwuTT6KIOaGSmVuCYC483RmcLg10G3eXzP6/A/2e', 'd4d8a10b8ed89f71d490c140348d535a'),
(55, 'sidati', 'sidati@gmail.com', '$2y$10$AdslQVMQgGxZAhYlEd2zDuageA0cPp2aNlN3R0H585rx3Uz9NZd3O', 'b501e7d5a7fa3de533fbfa1acaf9c4c1'),
(56, 'me', 'me@gmail.com', '$2y$10$SO0xEAx6XNFXY0BUCimEMeBJIdNN0T9iSkLK.cPeGTAo5ByM63hTq', '72f71385170f840e36611ece7ab88730');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place_price` (`place_price`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`id_user`),
  ADD KEY `movies` (`price`);

--
-- Index pour la table `salle_1`
--
ALTER TABLE `salle_1`
  ADD PRIMARY KEY (`id_place`);

--
-- Index pour la table `salle_2`
--
ALTER TABLE `salle_2`
  ADD PRIMARY KEY (`id_place`);

--
-- Index pour la table `salle_3`
--
ALTER TABLE `salle_3`
  ADD PRIMARY KEY (`id_place`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `salle_1`
--
ALTER TABLE `salle_1`
  MODIFY `id_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `salle_2`
--
ALTER TABLE `salle_2`
  MODIFY `id_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `salle_3`
--
ALTER TABLE `salle_3`
  MODIFY `id_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `movies` FOREIGN KEY (`price`) REFERENCES `films` (`place_price`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
