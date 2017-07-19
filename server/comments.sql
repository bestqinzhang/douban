-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: 2017-07-12 15:46:59
-- 服务器版本： 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `douban`
--

-- --------------------------------------------------------

--
-- 表的结构 `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `time` datetime NOT NULL,
  `cid` int(11) NOT NULL,
  `content` text NOT NULL,
  `look` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `comments`
--

INSERT INTO `comments` (`id`, `time`, `cid`, `content`, `look`, `name`) VALUES
(1, '2017-06-21 03:08:08', 20451290, '看过啦，看过啦，看过啦，看过啦看过啦，看过啦，看过啦，看过啦', 'collect', '222'),
(9, '2017-06-21 22:23:43', 20451290, 'dadada', 'collect', '222'),
(10, '2017-06-21 22:25:24', 20451290, 'dsdsds', 'collect', '222'),
(18, '2017-06-21 23:16:10', 1292063, '啦啦啦啦', 'wish', '222'),
(23, '2017-06-22 10:21:52', 1578714, 'aiadadadadada', 'wish', '333'),
(24, '2017-06-22 16:26:20', 1291546, 'aasssa', 'collect', '333'),
(36, '2017-06-22 20:44:41', 26220650, 'wqwqwq', 'wish', '333');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
