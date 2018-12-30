-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2018 at 03:15 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users_managment`
--
CREATE DATABASE IF NOT EXISTS `users_managment` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `users_managment`;

-- --------------------------------------------------------

--
-- Table structure for table `logintoken`
--

CREATE TABLE `logintoken` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` varchar(64) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logintoken`
--

INSERT INTO `logintoken` (`id`, `token`, `time`) VALUES
(1, '75758', '2018-12-25 15:16:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `home` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `personal_number` int(11) DEFAULT NULL,
  `date_registration` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `phone`, `type`, `street`, `home`, `city`, `state`, `personal_number`, `date_registration`) VALUES
(1, 'yosef3053@gmail.com', '123456', 'moshe', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-12-23 17:33:08'),
(2, 'dasdas', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-12-23 19:04:11'),
(3, 'fsdfsdf', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2018-12-23 19:04:37'),
(4, 'yosef3053@gmail', '123456', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-23 19:11:06'),
(8, 'yosef3053@gmail.com5', '', NULL, '???????', '+972504178690', NULL, NULL, NULL, '???????', NULL, NULL, '2018-12-25 17:27:30'),
(11, 'yosef3053@gmail.coms', '543', NULL, 'בוסקילה', '+972504178690', NULL, NULL, NULL, 'ירושלים', NULL, NULL, '2018-12-25 17:29:54'),
(13, 'yosefd3053@gmail', '$2b$09$19c/58hZsfTD5F7YAhxTb.XCWWo5t7N11fyTB5HnRec0sGWIX6JMm', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 18:07:07'),
(16, 'yosefd30s53@gmail', '$2b$09$ldQazvMcyP.NRnliETOhVOC4pjn9cnsJSuColpsis8QXIQzWhktGy', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 18:11:01'),
(24, 'yosefsd30s53@gmail', '$2b$09$IhuiK/KM8CggyySZ6CJV5OjLrR8jjWsdSNPvxZ/cbT9ozdmeMNEk2', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 18:23:24'),
(29, 'yoasefsd30s53@gmail', '$2b$09$whebAO1G/vRznaMxe3q7Lezos91olBBFzPI4akxMvOPtAN8Loy2Na', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:02:02'),
(31, 'yoasefssd30s53@gmail', '$2b$09$adBzfC9S01XiwFjFRIVe8ODHYlCD277Rx4lwAci.iMq9Bm0pqZmA.', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:09:05'),
(43, 'yoasefssd30es53@gmail', '$2b$09$e3pY.jlRRzSTPB.vkRc6yuugIrAupH2DerdtGRpfMpttSvCmyBlGq', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:17:12'),
(54, 'yoasefssd30es53@gsmail', '$2b$09$levBsIbhEaqHsBrwvqLU6u35gAvHaVn2udFcssDcspVcRiQXe391K', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:29:49'),
(56, '1545759044110', '$2b$09$fLQVbvCWHEDFyswLeATfyu2PCQy.lvUW7UebklTu9gTv0EOweMdgq', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:30:44'),
(57, '1545759044237', '$2b$09$k72jjMZ6FIGv5BaokqBbk.wfkZWCFWFLRROZMT.QnjFGp2W.dGnFi', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:30:44'),
(58, '1545759068237', '$2b$09$hZzp54mW81676fChODyt5uum12W5b/ZWFPKmTEoSO1pTVyqnIeuOa', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:31:08'),
(59, '1545759068340', '$2b$09$vj05cckYJR4S89usEJN45usDdjkFKyJIqBYNT6FkFIv8OH6id2xmG', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:31:08'),
(60, '1545759120086', '$2b$09$Bt0S4nmUXvquv4ARnj5mnumWqk9dWOoXv89z8MOYk.F8WNkUULsNG', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:32:00'),
(61, '1545759120264', '$2b$09$pHbrGxuuY3oxYrsZkbQXOu5XHAJ3J831bsa/QKjmFPEp7EvC/4r8O', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:32:00'),
(62, 'yosef@gma', '$2b$09$WpbcR9WdHWvvdfiaUFK5AeSf9AIPu4v6RuUzPyZaLd8lkBqoaPyy.', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:32:32'),
(72, 'yoseef@gma', '$2b$09$uo61Xm5UZwpjL5iJFs8N7u2tEb4K7z3WLwvXweviD5f3XvzX6p6YC', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:33:41'),
(78, 'yoszeezf@gma', '$2b$09$LUXeDwkInXKK5182j7MeIOeghkLuzTXOJ.G9RpuHBwr/ULGsmtb7e', 'yos', 'bus', 'null', 'null', 'mirski', '5', 'jer', 'isr', 3053, '2018-12-25 19:34:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logintoken`
--
ALTER TABLE `logintoken`
  ADD KEY `id` (`id`),
  ADD KEY `time` (`time`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
