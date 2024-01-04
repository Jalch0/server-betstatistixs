

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `bankrolls` (
  `id` int PRIMARY KEY,
  `id_user` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `capital` float(10,2) NOT NULL,
  `odd` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE `bets` (
  `id` int PRIMARY KEY,
  `id_bankroll` int NOT NULL,
  `type` varchar(50) NOT NULL,
  `amount` float(10,2) NOT NULL,
  `date` date NOT NULL,

  `sport` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `odd` float(10,2) NOT NULL,
  `state` varchar(100) NOT NULL,

  `sport1` varchar(100),
  `name1` varchar(100),
  `odd1` float(10,2),
  `state1` varchar(100),


) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `users` (
  `id` int PRIMARY KEY,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  `photo` varchar(300) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `bankrolls`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `bets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `bankrolls`
  ADD CONSTRAINT `id_user_bankroll` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

ALTER TABLE `bets`
  ADD CONSTRAINT `id_bets_bankroll` FOREIGN KEY (`id_bankroll`) REFERENCES `bankrolls` (`id`);


COMMIT;

