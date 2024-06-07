-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Трв 28 2024 р., 03:10
-- Версія сервера: 8.0.30
-- Версія PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `db`
--

-- --------------------------------------------------------

--
-- Структура таблиці `goncharstvo`
--

CREATE TABLE `goncharstvo` (
  `ID` int NOT NULL,
  `Date` date NOT NULL,
  `Name` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `PhoneNumber` int NOT NULL,
  `Email` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Tg` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `activity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `formofactivity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `howtocontact` text COLLATE cp1251_ukrainian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `lipka`
--

CREATE TABLE `lipka` (
  `ID` int NOT NULL,
  `Date` date NOT NULL,
  `Name` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `PhoneNumber` int NOT NULL,
  `Email` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Tg` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `activity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `formofactivity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `howtocontact` text COLLATE cp1251_ukrainian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `mainEnrole`
--

CREATE TABLE `mainEnrole` (
  `ID` int NOT NULL,
  `Date` date NOT NULL,
  `Name` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `PhoneNumber` int NOT NULL,
  `Email` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Tg` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Activity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `formofactivity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `howtocontact` text COLLATE cp1251_ukrainian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `masterclasses`
--

CREATE TABLE `masterclasses` (
  `ID` int NOT NULL,
  `Name` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `PhoneNumber` int NOT NULL,
  `Email` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Tg` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `activity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `howtocintact` text COLLATE cp1251_ukrainian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `sertificates`
--

CREATE TABLE `sertificates` (
  `ID` int NOT NULL,
  `Date` date NOT NULL,
  `Name` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `PhoneNumber` int NOT NULL,
  `Email` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `Tg` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `activity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `formofactivity` text COLLATE cp1251_ukrainian_ci NOT NULL,
  `howtocontact` text COLLATE cp1251_ukrainian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `test`
--

CREATE TABLE `test` (
  `test1` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE cp1251_ukrainian_ci DEFAULT NULL,
  `email` varchar(255) COLLATE cp1251_ukrainian_ci DEFAULT NULL,
  `password` varchar(255) COLLATE cp1251_ukrainian_ci DEFAULT NULL,
  `refresh_token` text COLLATE cp1251_ukrainian_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251 COLLATE=cp1251_ukrainian_ci;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'lg07132015@gmail.com', '$2b$10$gQlL3nluKPPxykojuptyIuIlNYOu22kffm7twXH3HN3kPmCl/pPee', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibGcwNzEzMjAxNUBnbWFpbC5jb20iLCJpYXQiOjE3MTY4MjQxMTUsImV4cCI6MTcxNjkxMDUxNX0.Z3oU01hKDHqDE_7mcy8RGOzge-tnL5uCMR7CuDXC7Lw', '2024-05-21 21:12:06', '2024-05-27 15:35:15');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `goncharstvo`
--
ALTER TABLE `goncharstvo`
  ADD PRIMARY KEY (`ID`,`PhoneNumber`);

--
-- Індекси таблиці `mainEnrole`
--
ALTER TABLE `mainEnrole`
  ADD PRIMARY KEY (`ID`,`PhoneNumber`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
