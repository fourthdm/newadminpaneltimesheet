-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2025 at 02:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dts`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `Name`, `username`, `email`, `password`) VALUES
(1, 'Hanumant', 'admin', 'hanumant@fourthdm.com', 'admin@123'),
(2, 'Test Admin', 'Testadmin', 'hrssss@fourthdm.com', '2690153ebd755a6ec95b2b07b42a70'),
(3, 'Admin', 'Testadmin', 'example@gmail.com', '0mwm09wp');

-- --------------------------------------------------------

--
-- Table structure for table `chat_messages`
--

CREATE TABLE `chat_messages` (
  `id` int(11) NOT NULL,
  `from_emp_id` int(11) DEFAULT NULL,
  `to_emp_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `is_group` tinyint(1) DEFAULT 0,
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `checklist`
--

CREATE TABLE `checklist` (
  `checklist_id` int(11) NOT NULL,
  `checklist_name` varchar(522) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checklist`
--

INSERT INTO `checklist` (`checklist_id`, `checklist_name`) VALUES
(1, 'BUILDING ROTATION'),
(2, 'Omprovement Labeling'),
(3, 'Improvements Labeling'),
(4, 'View Port');

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `emp_id` int(11) NOT NULL,
  `emp_code` varchar(255) NOT NULL,
  `emp_name` varchar(255) NOT NULL,
  `emp_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(100) NOT NULL,
  `added_date` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`emp_id`, `emp_code`, `emp_name`, `emp_email`, `password`, `status`, `added_date`, `updated_date`) VALUES
(1, 'E101', 'Demo', 'demo@gmail.com', 't6y7eqmi', 'Active', '2025-05-23 12:35:03', '2025-05-27 16:52:56'),
(2, 'E102', 'Test Demo', 'testd@gmail.com', 'r5yyd55u', 'Active', '2025-05-23 15:49:06', '2025-05-23 15:49:06'),
(3, 'E103', 'Newtests', 'new@gmail.com', '3itcxswn', 'Active', '2025-05-23 15:49:47', '2025-05-23 15:49:47'),
(4, 'E104', 'Demotest', 'd@gmail.com', 'ackkuds9', 'Active', '2025-05-23 15:50:59', '2025-05-23 15:50:59'),
(5, 'E105', 'Doe', 'Test@gmail.com', 't6y7eqmI', 'Active', '2025-05-24 12:40:27', '2025-05-24 12:40:27'),
(6, 'E106', 'Amol', 'amol@gmail.com', 'yvf4oyn8', 'Active', '2025-05-26 11:56:24', '2025-05-26 11:56:24'),
(7, 'E107', 'pa', 'p@gmail.com', 'curbz35e', 'Active', '2025-05-26 12:05:35', '2025-05-26 12:05:35'),
(10, 'E120', 'DemoTESTTT', 'xyz@gmail.com', '9pgfrzr7', 'Active', '2025-05-31 15:19:38', '2025-05-31 15:19:38'),
(11, 'E121', 'Hanumant ', 'h@gmail.com', '8ayfg1nk', 'Active', '2025-06-14 12:08:26', '2025-06-14 12:08:26'),
(12, 'E125', 'Manisha K', 'manisha.fourthdm@gmail.com', 'tilcqgwg', 'Active', '2025-06-14 16:40:26', '2025-06-17 17:05:27');

-- --------------------------------------------------------

--
-- Table structure for table `empteamrole`
--

CREATE TABLE `empteamrole` (
  `id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `userlevel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `empteamrole`
--

INSERT INTO `empteamrole` (`id`, `emp_id`, `team_id`, `userlevel_id`) VALUES
(1, 1, 1, 1),
(2, 1, 1, 2),
(3, 2, 1, 3),
(4, 2, 2, 3),
(8, 3, 2, 4),
(9, 3, 1, 3),
(10, 3, 1, 4),
(11, 3, 4, 3),
(12, 3, 4, 4),
(13, 4, 3, 4),
(14, 5, 1, 2),
(15, 5, 2, 3),
(16, 5, 3, 2),
(17, 6, 2, 4),
(18, 6, 0, 0),
(19, 7, 3, 3),
(24, 7, 2, 4),
(25, 10, 1, 4),
(26, 11, 2, 2),
(27, 12, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `engg_time`
--

CREATE TABLE `engg_time` (
  `engg_time_id` int(11) NOT NULL,
  `engg_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `enggstatus` varchar(255) NOT NULL,
  `working_days` int(11) NOT NULL,
  `working_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `engg_time`
--

INSERT INTO `engg_time` (`engg_time_id`, `engg_id`, `job_id`, `date`, `time`, `date_time`, `enggstatus`, `working_days`, `working_time`) VALUES
(1, 2, 1, '2025-02-14 16:34:04', '2025-02-15 05:34:04', '2025-02-14 16:34:04', 'Start', 0, '00:00:00'),
(2, 3, 0, '2025-05-28 18:06:47', '2025-05-28 12:36:47', '2025-05-30 16:09:48', '', 0, '00:00:00'),
(3, 3, 10, '2025-05-28 18:06:52', '2025-05-28 12:36:52', '2025-05-30 16:09:52', '', 0, '00:00:00'),
(8, 6, 0, '2025-05-28 18:07:47', '2025-05-28 12:37:47', '2025-05-28 18:07:47', '', 0, '00:00:00'),
(9, 6, 10, '2025-05-28 18:07:49', '2025-05-28 12:37:49', '2025-05-28 18:07:49', '', 0, '00:00:00'),
(10, 6, 10, '2025-05-28 18:07:50', '2025-05-28 12:37:50', '2025-05-28 18:07:50', 'Started', 0, '00:00:00'),
(11, 6, 10, '2025-05-28 18:07:51', '2025-05-28 12:37:51', '2025-05-28 18:07:51', 'Started', 0, '00:00:00'),
(12, 6, 10, '2025-05-28 18:07:52', '2025-05-28 12:37:52', '2025-05-28 18:07:52', 'Started', 1, '00:00:00'),
(13, 6, 10, '2025-05-28 18:07:53', '2025-05-28 12:37:53', '2025-05-28 18:07:53', 'Started', 1, '00:00:00'),
(25, 7, 10, '2025-05-29 11:02:47', '2025-05-29 05:32:47', '2025-05-29 11:02:47', 'Started', 0, '00:00:16'),
(26, 7, 10, '2025-05-29 11:02:47', '2025-05-29 05:32:47', '2025-05-29 11:02:47', 'Started', 0, '00:00:16'),
(32, 7, 11, '2025-05-29 15:37:57', '2025-05-29 10:07:57', '2025-05-29 15:37:57', 'Started', 0, '01:05:04'),
(36, 7, 11, '2025-05-29 17:55:21', '2025-05-29 12:25:21', '2025-05-29 17:55:21', 'Started', 1, '00:45:06'),
(37, 7, 11, '2025-05-29 17:56:57', '2025-05-29 12:26:57', '2025-05-29 17:56:57', 'Started', 1, '00:00:38'),
(39, 6, 0, '2025-05-30 18:08:50', '2025-05-30 12:38:50', '2025-05-30 18:08:50', '', 0, '00:00:00'),
(40, 7, 13, '2025-05-31 11:11:20', '2025-05-31 05:41:20', '2025-05-31 11:11:20', 'Started', 0, '01:37:48'),
(43, 7, 12, '2025-05-31 16:31:56', '2025-05-31 11:01:56', '2025-05-31 16:31:56', 'Started', 1, '00:00:00'),
(44, 7, 13, '2025-06-02 12:31:47', '2025-06-02 07:01:47', '2025-06-02 12:31:47', 'submit', 1, '00:00:16'),
(45, 7, 13, '2025-06-02 12:39:39', '2025-06-02 07:09:39', '2025-06-02 12:39:39', 'submit', 1, '00:05:40'),
(46, 7, 13, '2025-06-02 12:47:49', '2025-06-02 07:17:49', '2025-06-02 12:47:49', 'submit', 1, '00:00:21'),
(47, 7, 13, '2025-06-02 12:49:18', '2025-06-02 07:19:18', '2025-06-02 12:49:18', 'submit', 1, '00:00:05'),
(48, 7, 13, '2025-06-02 12:49:50', '2025-06-02 07:19:50', '2025-06-02 12:49:50', 'submit', 1, '00:00:04'),
(49, 7, 14, '2025-06-02 17:05:55', '2025-06-02 11:35:55', '2025-06-02 17:05:55', 'start', 1, '00:00:00'),
(50, 7, 14, '2025-06-02 17:06:37', '2025-06-02 11:36:37', '2025-06-02 17:06:37', 'pause', 1, '00:00:41'),
(51, 7, 14, '2025-06-02 17:06:49', '2025-06-02 11:36:49', '2025-06-02 17:06:49', 'restart', 1, '00:00:00'),
(52, 7, 14, '2025-06-02 17:06:51', '2025-06-02 11:36:51', '2025-06-02 17:06:51', 'submit', 1, '00:00:43'),
(53, 7, 14, '2025-06-02 17:06:53', '2025-06-02 11:36:53', '2025-06-02 17:06:53', 'submit', 1, '00:00:47'),
(54, 7, 14, '2025-06-02 17:09:27', '2025-06-02 11:39:27', '2025-06-02 17:09:27', 'start', 1, '00:00:00'),
(55, 7, 14, '2025-06-02 17:09:40', '2025-06-02 11:39:40', '2025-06-02 17:09:40', 'pause', 1, '00:00:13'),
(56, 7, 14, '2025-06-02 17:09:43', '2025-06-02 11:39:43', '2025-06-02 17:09:43', 'submit', 1, '00:00:29'),
(57, 7, 14, '2025-06-02 17:12:34', '2025-06-02 11:42:34', '2025-06-02 17:12:34', 'start', 1, '00:00:00'),
(58, 7, 14, '2025-06-02 17:12:37', '2025-06-02 11:42:37', '2025-06-02 17:12:37', 'submit', 1, '00:00:32'),
(59, 7, 14, '2025-06-02 17:14:07', '2025-06-02 11:44:07', '2025-06-02 17:14:07', 'start', 1, '00:00:00'),
(60, 7, 14, '2025-06-02 17:14:34', '2025-06-02 11:44:34', '2025-06-02 17:14:34', 'submit', 1, '00:00:27'),
(61, 7, 14, '2025-06-02 17:14:40', '2025-06-02 11:44:40', '2025-06-02 17:14:40', 'submit', 1, '00:00:00'),
(62, 7, 15, '2025-06-03 10:52:49', '2025-06-03 05:22:49', '2025-06-03 10:52:49', 'start', 1, '00:00:00'),
(63, 7, 15, '2025-06-03 11:51:12', '2025-06-03 06:21:12', '2025-06-03 11:51:12', 'submit', 1, '00:35:03'),
(74, 10, 16, '2025-06-04 11:48:53', '2025-06-04 06:18:53', '2025-06-04 11:48:53', 'start', 1, '00:00:00'),
(75, 10, 16, '2025-06-04 12:54:54', '2025-06-04 07:24:54', '2025-06-04 12:54:54', 'pause', 1, '00:00:00'),
(76, 10, 16, '2025-06-04 12:55:04', '2025-06-04 07:25:04', '2025-06-04 12:55:04', 'submit', 1, '00:00:00'),
(77, 10, 16, '2025-06-04 13:03:57', '2025-06-04 07:33:57', '2025-06-04 13:03:57', 'start', 1, '00:00:00'),
(78, 10, 16, '2025-06-04 13:33:14', '2025-06-04 08:03:14', '2025-06-04 13:33:14', 'pause', 1, '00:29:17'),
(79, 10, 16, '2025-06-04 13:33:24', '2025-06-04 08:03:24', '2025-06-04 13:33:24', 'restart', 1, '00:00:00'),
(80, 10, 16, '2025-06-04 13:33:30', '2025-06-04 08:03:30', '2025-06-04 13:33:30', 'submit', 1, '00:00:06'),
(81, 7, 17, '2025-06-04 17:30:26', '2025-06-04 12:00:26', '2025-06-04 17:30:26', 'start', 1, '00:00:00'),
(82, 7, 17, '2025-06-04 17:43:22', '2025-06-04 12:13:22', '2025-06-04 17:43:22', 'start', 1, '00:00:00'),
(83, 7, 17, '2025-06-04 17:43:48', '2025-06-04 12:13:48', '2025-06-04 17:43:48', 'submit', 1, '00:00:26'),
(84, 7, 18, '2025-06-04 17:46:17', '2025-06-04 12:16:17', '2025-06-04 17:46:17', 'start', 1, '00:00:00'),
(85, 7, 18, '2025-06-04 18:10:10', '2025-06-04 12:40:10', '2025-06-04 18:10:10', 'submit', 1, '00:00:00'),
(86, 7, 19, '2025-06-04 18:51:47', '2025-06-04 13:21:47', '2025-06-04 18:51:47', 'start', 1, '00:00:00'),
(87, 12, 21, '2025-06-16 11:04:34', '2025-06-16 05:34:34', '2025-06-16 11:04:34', 'start', 1, '00:00:00'),
(88, 12, 21, '2025-06-16 15:16:21', '2025-06-16 09:46:21', '2025-06-16 15:16:21', 'pause', 1, '00:00:00'),
(89, 12, 21, '2025-06-16 15:16:58', '2025-06-16 09:46:58', '2025-06-16 15:16:58', 'restart', 1, '00:00:00'),
(90, 12, 21, '2025-06-16 15:17:21', '2025-06-16 09:47:21', '2025-06-16 15:17:21', 'submit', 1, '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `job_no` text NOT NULL,
  `order_id` text NOT NULL,
  `spoke_person_id` int(11) NOT NULL,
  `job_type_id` int(11) NOT NULL,
  `job_sub_type_id` int(11) NOT NULL,
  `engg_emp_id` int(11) NOT NULL,
  `qc_emp_id` int(11) NOT NULL,
  `co_emp_id` int(11) NOT NULL,
  `drafting_hrs` char(4) NOT NULL,
  `drafting_min` char(4) NOT NULL,
  `qc_hrs` char(4) NOT NULL,
  `qc_min` char(4) NOT NULL,
  `extra_drafting_hrs` char(4) NOT NULL,
  `extra_drafting_min` char(4) NOT NULL,
  `qc_repairing_hrs` char(4) NOT NULL,
  `qc_repairing_min` char(4) NOT NULL,
  `engg_total_time` time NOT NULL,
  `qc_total_time` time NOT NULL,
  `qc_performance_factor` int(11) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp(),
  `create_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `created_by_emp_id` int(11) NOT NULL,
  `engg_comment` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `engg_status` varchar(255) NOT NULL,
  `qc_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `job_no`, `order_id`, `spoke_person_id`, `job_type_id`, `job_sub_type_id`, `engg_emp_id`, `qc_emp_id`, `co_emp_id`, `drafting_hrs`, `drafting_min`, `qc_hrs`, `qc_min`, `extra_drafting_hrs`, `extra_drafting_min`, `qc_repairing_hrs`, `qc_repairing_min`, `engg_total_time`, `qc_total_time`, `qc_performance_factor`, `create_date`, `create_time`, `created_by`, `created_by_emp_id`, `engg_comment`, `status`, `engg_status`, `qc_status`) VALUES
(1, '10001', '100023521028', 1, 1, 1, 3, 2, 1, '3', '5', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-23 15:51:54', '2025-05-23 10:21:54', 'Admin', 1, 'test', 'Created', '', ''),
(2, '10002', '100023521020', 1, 1, 1, 4, 2, 1, '3', '10', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-23 16:31:43', '2025-05-23 11:01:43', 'Admin', 1, 'test', 'Created', '', ''),
(3, '10003', '100023521024', 1, 1, 2, 0, 0, 0, '2', '10', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-23 17:05:15', '2025-05-23 11:35:15', 'Admin', 2, 'test', 'Created', '', ''),
(4, '10004', '100023521024', 1, 1, 1, 0, 0, 0, '2', '10', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-23 18:03:09', '2025-05-23 12:33:09', 'Admin', 2, 'test', 'Ordered', '', ''),
(5, '10005', '100023521022', 1, 2, 1, 3, 2, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-24 10:38:21', '2025-05-24 05:08:21', 'Admin', 2, 'test', 'Created', '', ''),
(6, '10006', '100023521022', 1, 1, 1, 4, 2, 1, '2', '10', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-24 11:05:23', '2025-05-24 05:35:23', 'Admin', 1, 'test', 'Created', '', ''),
(7, '10007', '100023521023', 1, 1, 1, 4, 2, 1, '2', '45', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-24 11:12:20', '2025-05-24 05:42:20', 'Admin', 3, 'test', 'Created', '', ''),
(8, '10008', '100023521025', 1, 1, 1, 3, 5, 1, '2', '35', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-26 10:43:52', '2025-05-26 05:13:52', 'Admin', 2, 'test', 'Created', '', ''),
(9, '25620009', '10002353562', 2, 2, 2, 6, 7, 1, '2', '35', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-27 10:53:40', '2025-05-27 05:23:40', 'Admin', 2, 'test', 'Created', '', ''),
(10, '2562010', '100023536958', 1, 2, 1, 6, 7, 1, '2', '35', '2', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-28 10:59:35', '2025-05-28 05:29:35', 'Admin', 2, 'test', 'Created', '', ''),
(11, '2562', '100023521050', 2, 2, 2, 7, 7, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-29 12:24:07', '2025-05-29 06:54:07', 'Admin', 2, 'test', 'Ordered', '', ''),
(12, '2244', '123521024', 1, 1, 1, 7, 7, 1, '2', '35', '1', '05', '1', '00', '1', '15', '00:00:00', '00:00:00', 100, '2025-05-30 10:18:05', '2025-05-30 04:48:05', 'Admin', 1, 'Test', 'Created', '', 'submit'),
(13, '2589', '201524586', 2, 2, 1, 7, 7, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-05-31 11:09:27', '2025-05-31 05:39:27', 'Admin', 3, 'Test', 'Created', 'Submit', ''),
(14, '2590', '2001545', 3, 2, 1, 7, 2, 1, '2', '35', '1', '05', '', '', '', '', '00:02:32', '00:00:00', 100, '2025-06-02 10:34:55', '2025-06-02 05:04:55', 'Admin', 3, 'Test', 'Created', 'Submit', ''),
(15, '254851', '20001692', 2, 1, 1, 7, 7, 1, '2', '35', '1', '05', '00', '00', '0', '15', '00:35:03', '00:00:00', 100, '2025-06-03 09:48:13', '2025-06-03 04:18:13', 'Admin', 3, 'Test', 'Created', 'Submit', 'Submit'),
(16, '254852', '20001699', 3, 2, 1, 10, 7, 1, '2', '35', '1', '05', '00', '10', '1', '15', '00:29:23', '00:00:34', 100, '2025-06-04 10:39:15', '2025-06-04 05:09:15', 'Admin', 1, 'Test', 'Created', 'Submit', 'Submit'),
(17, '2289', '20124568', 3, 2, 1, 7, 7, 1, '2', '00', '1', '05', '00', '20', '00', '15', '00:00:26', '00:00:11', 100, '2025-06-04 13:40:33', '2025-06-04 08:10:33', 'Admin', 2, 'Test', 'Created', 'Submit', 'Submit'),
(18, '22779', '20124568', 2, 2, 1, 7, 7, 1, '2', '35', '1', '05', '00', '00', '00', '00', '00:23:53', '00:25:16', 100, '2025-06-04 17:45:23', '2025-06-04 12:15:23', 'Admin', 1, 'Test', 'Created', 'Submit', 'Submit'),
(19, '22888', '20124568', 1, 1, 1, 7, 7, 1, '2', '00', '1', '00', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-06-04 18:30:28', '2025-06-04 13:00:28', 'Admin', 2, 'Test', 'Created', '', ''),
(20, '228902', '2012459586', 1, 1, 1, 7, 7, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-06-14 14:52:03', '2025-06-14 09:22:03', 'Admin', 1, 'Test', 'Created', 'Submit', ''),
(21, '229652', '201245800', 1, 2, 1, 12, 7, 1, '2', '35', '1', '05', '', '', '', '', '04:12:10', '00:00:00', 100, '2025-06-16 10:49:41', '2025-06-16 05:19:41', 'Admin', 3, 'Test', 'Created', 'Submit', ''),
(22, '17062025', '20251706', 3, 2, 1, 12, 7, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-06-17 09:51:15', '2025-06-17 04:21:15', 'Admin', 1, 'Test', 'Created', '', ''),
(23, '17062025', '2012459586', 2, 1, 1, 12, 2, 1, '2', '35', '1', '05', '', '', '', '', '00:00:00', '00:00:00', 100, '2025-07-09 11:19:24', '2025-07-09 05:49:24', 'Admin', 3, 'Test', 'Created', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `job_checklist`
--

CREATE TABLE `job_checklist` (
  `job_checklist_id` int(11) NOT NULL,
  `engg_emp_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `checklist_id` text NOT NULL,
  `checklist_val` text NOT NULL,
  `checklist_total_val` int(11) NOT NULL,
  `checklist_comment` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `job_checklist`
--

INSERT INTO `job_checklist` (`job_checklist_id`, `engg_emp_id`, `job_id`, `checklist_id`, `checklist_val`, `checklist_total_val`, `checklist_comment`, `date`) VALUES
(1, 3, 3, '1', '50&20&50&70&20&30&10&50&90&30', 42, 'Symbol Missing', '2025-05-31');

-- --------------------------------------------------------

--
-- Table structure for table `job_sub_type`
--

CREATE TABLE `job_sub_type` (
  `job_sub_type_id` int(11) NOT NULL,
  `job_type_id` int(11) NOT NULL,
  `job_sub_type_name` text NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `job_sub_type`
--

INSERT INTO `job_sub_type` (`job_sub_type_id`, `job_type_id`, `job_sub_type_name`, `status`) VALUES
(1, 1, 'Upto 100 Point', 'Active'),
(2, 2, 'Upto 100 Points', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `job_type`
--

CREATE TABLE `job_type` (
  `job_type_id` int(11) NOT NULL,
  `job_type_name` text NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `job_type`
--

INSERT INTO `job_type` (`job_type_id`, `job_type_name`, `status`) VALUES
(1, 'ALTA', 'Active'),
(2, 'Mortgage', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `private_chat_messages`
--

CREATE TABLE `private_chat_messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `receiver_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `sent_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `qc_time`
--

CREATE TABLE `qc_time` (
  `qc_time_id` int(11) NOT NULL,
  `qc_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `time` time NOT NULL DEFAULT current_timestamp(),
  `date_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(255) NOT NULL,
  `working_days` int(11) NOT NULL,
  `working_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `qc_time`
--

INSERT INTO `qc_time` (`qc_time_id`, `qc_id`, `job_id`, `date`, `time`, `date_time`, `status`, `working_days`, `working_time`) VALUES
(1, 7, 1, '2025-02-14 00:00:00', '16:45:31', '2025-05-30 17:57:30', 'Start', 0, '00:00:01'),
(2, 7, 12, '2025-05-31 14:47:02', '14:47:02', '2025-05-31 14:47:02', '', 0, '00:01:10'),
(3, 7, 12, '2025-05-31 14:47:02', '14:47:02', '2025-05-31 14:47:02', '', 0, '00:01:10'),
(4, 7, 12, '2025-05-31 14:48:36', '14:48:36', '2025-05-31 14:48:36', '', 0, '00:00:00'),
(5, 7, 12, '2025-05-31 15:10:10', '15:10:10', '2025-05-31 15:10:10', '', 1, '00:02:17'),
(6, 7, 12, '2025-05-31 15:10:10', '15:10:10', '2025-05-31 15:10:10', '', 1, '00:02:17'),
(7, 7, 12, '2025-05-31 15:10:17', '15:10:17', '2025-05-31 15:10:17', '', 1, '00:00:00'),
(8, 7, 12, '2025-05-31 16:22:29', '16:22:29', '2025-05-31 16:22:29', '', 1, '01:10:58'),
(9, 7, 12, '2025-05-31 16:22:29', '16:22:29', '2025-05-31 16:22:29', '', 1, '01:10:58'),
(10, 7, 13, '2025-05-31 16:28:14', '16:28:14', '2025-05-31 16:28:14', '', 1, '01:16:43'),
(11, 7, 13, '2025-05-31 16:28:14', '16:28:14', '2025-05-31 16:28:14', '', 1, '01:16:43'),
(23, 7, 15, '2025-06-03 11:51:35', '11:51:35', '2025-06-03 11:51:35', 'start', 1, '00:00:00'),
(24, 7, 15, '2025-06-03 12:24:23', '12:24:23', '2025-06-03 12:24:23', 'pause', 1, '00:32:47'),
(25, 7, 15, '2025-06-03 12:24:31', '12:24:31', '2025-06-03 12:24:31', 'restart', 1, '00:00:00'),
(26, 7, 15, '2025-06-03 12:26:19', '12:26:19', '2025-06-03 12:26:19', 'submit', 1, '00:34:35'),
(27, 7, 15, '2025-06-03 12:57:50', '12:57:50', '2025-06-03 12:57:50', 'start', 1, '00:00:00'),
(28, 7, 15, '2025-06-03 12:58:03', '12:58:03', '2025-06-03 12:58:03', 'submit', 1, '00:00:13'),
(29, 7, 15, '2025-06-03 13:15:30', '13:15:30', '2025-06-03 13:15:30', 'start', 1, '00:00:00'),
(30, 7, 15, '2025-06-03 13:15:55', '13:15:55', '2025-06-03 13:15:55', 'submit', 1, '00:00:24'),
(31, 7, 15, '2025-06-03 13:21:03', '13:21:03', '2025-06-03 13:21:03', 'start', 1, '00:00:00'),
(32, 7, 15, '2025-06-03 13:21:54', '13:21:54', '2025-06-03 13:21:54', 'submit', 1, '00:00:51'),
(33, 7, 15, '2025-06-03 14:38:31', '14:38:31', '2025-06-03 14:38:31', 'start', 1, '00:00:00'),
(34, 7, 15, '2025-06-03 14:44:21', '14:44:21', '2025-06-03 14:44:21', 'submit', 1, '00:05:50'),
(35, 7, 15, '2025-06-03 14:55:13', '14:55:13', '2025-06-03 14:55:13', 'start', 1, '00:00:00'),
(36, 7, 15, '2025-06-03 14:55:53', '14:55:53', '2025-06-03 14:55:53', 'start', 1, '00:00:00'),
(37, 7, 15, '2025-06-03 14:59:40', '14:59:40', '2025-06-03 14:59:40', 'submit', 1, '00:02:27'),
(38, 7, 15, '2025-06-03 15:01:16', '15:01:16', '2025-06-03 15:01:16', 'restart', 1, '00:00:00'),
(39, 7, 15, '2025-06-03 15:01:17', '15:01:17', '2025-06-03 15:01:17', 'submit', 1, '00:02:28'),
(40, 7, 16, '2025-06-04 16:43:55', '16:43:55', '2025-06-04 16:43:55', 'start', 1, '00:00:00'),
(41, 7, 16, '2025-06-04 16:44:29', '16:44:29', '2025-06-04 16:44:29', 'submit', 1, '00:00:34'),
(42, 7, 17, '2025-06-04 17:30:08', '17:30:08', '2025-06-04 17:30:08', 'start', 1, '00:00:00'),
(43, 7, 17, '2025-06-04 17:30:10', '17:30:10', '2025-06-04 17:30:10', 'start', 1, '00:00:00'),
(44, 7, 17, '2025-06-04 17:30:14', '17:30:14', '2025-06-04 17:30:14', 'pause', 1, '00:00:04'),
(45, 7, 17, '2025-06-04 17:41:59', '17:41:59', '2025-06-04 17:41:59', 'restart', 1, '00:00:00'),
(46, 7, 17, '2025-06-04 17:42:01', '17:42:01', '2025-06-04 17:42:01', 'restart', 1, '00:00:00'),
(47, 7, 17, '2025-06-04 17:42:08', '17:42:08', '2025-06-04 17:42:08', 'submit', 1, '00:00:07'),
(48, 7, 18, '2025-06-04 17:46:37', '17:46:37', '2025-06-04 17:46:37', 'start', 1, '00:00:00'),
(49, 7, 18, '2025-06-04 18:11:53', '18:11:53', '2025-06-04 18:11:53', 'submit', 1, '00:25:16'),
(50, 7, 20, '2025-06-14 14:54:26', '14:54:26', '2025-06-14 14:54:26', 'start', 1, '00:00:00'),
(51, 7, 21, '2025-06-16 15:39:33', '15:39:33', '2025-06-16 15:39:33', 'start', 1, '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `spoke_person`
--

CREATE TABLE `spoke_person` (
  `spoke_person_id` int(11) NOT NULL,
  `sp_code` text NOT NULL,
  `spoke_person_name` text NOT NULL,
  `team` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `spoke_person`
--

INSERT INTO `spoke_person` (`spoke_person_id`, `sp_code`, `spoke_person_name`, `team`, `status`) VALUES
(1, 'FSP0908191', 'Manisha', 'Graphics', 'Active'),
(2, 'FSP0908192', 'Varsha', 'Testing', 'Active'),
(3, 'FSP0908193', 'Pallavi', 'Technical', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `spoke_person_emp`
--

CREATE TABLE `spoke_person_emp` (
  `spoke_person_emp_id` int(11) NOT NULL,
  `spoke_person_id` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `added_date` datetime NOT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `spoke_person_emp`
--

INSERT INTO `spoke_person_emp` (`spoke_person_emp_id`, `spoke_person_id`, `emp_id`, `role`, `added_date`, `added_time`) VALUES
(1, 1, 3, 'QC', '2025-05-31 12:08:54', '2025-05-31 06:38:54'),
(2, 3, 7, 'role', '2025-05-31 12:58:51', '2025-05-31 07:28:51');

-- --------------------------------------------------------

--
-- Table structure for table `spoke_person_job_type`
--

CREATE TABLE `spoke_person_job_type` (
  `spoke_person_job_type_id` int(11) NOT NULL,
  `spoke_person_id` int(11) NOT NULL,
  `job_type_id` int(11) NOT NULL,
  `job_sub_type_id` int(11) NOT NULL,
  `drafting_hrs` char(4) NOT NULL,
  `drafting_min` char(4) NOT NULL,
  `qc_hrs` char(4) NOT NULL,
  `qc_min` char(4) NOT NULL,
  `tot_min` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `spoke_person_job_type`
--

INSERT INTO `spoke_person_job_type` (`spoke_person_job_type_id`, `spoke_person_id`, `job_type_id`, `job_sub_type_id`, `drafting_hrs`, `drafting_min`, `qc_hrs`, `qc_min`, `tot_min`) VALUES
(1, 2, 1, 1, '2', '35', '1', '05', 0);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `team_id` int(11) NOT NULL,
  `TeamName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`team_id`, `TeamName`) VALUES
(1, 'Graphics'),
(2, 'Development'),
(3, 'Testing'),
(4, 'Technical');

-- --------------------------------------------------------

--
-- Table structure for table `team_chat_messages`
--

CREATE TABLE `team_chat_messages` (
  `msg_id` int(11) NOT NULL,
  `team_id` int(11) DEFAULT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `sent_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timegap`
--

CREATE TABLE `timegap` (
  `timegap_id` int(11) NOT NULL,
  `val` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `timegap`
--

INSERT INTO `timegap` (`timegap_id`, `val`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `timesheet`
--

CREATE TABLE `timesheet` (
  `timesheet_id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `emp_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `job_no` text NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `timesheet`
--

INSERT INTO `timesheet` (`timesheet_id`, `role`, `emp_id`, `job_id`, `job_no`, `start_time`, `end_time`, `date`, `status`, `comment`) VALUES
(1, 'Engineer', 2, 1, '10001', '14:41:55', '12:08:45', '2025-03-05 12:08:45', 'Completed', 'Task Complete');

-- --------------------------------------------------------

--
-- Table structure for table `userlevel`
--

CREATE TABLE `userlevel` (
  `userlevel_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userlevel`
--

INSERT INTO `userlevel` (`userlevel_id`, `name`) VALUES
(1, 'Coordinator'),
(2, 'Manager'),
(3, 'QC'),
(4, 'Engineer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_messages`
--
ALTER TABLE `chat_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checklist`
--
ALTER TABLE `checklist`
  ADD PRIMARY KEY (`checklist_id`);

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `empteamrole`
--
ALTER TABLE `empteamrole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `engg_time`
--
ALTER TABLE `engg_time`
  ADD PRIMARY KEY (`engg_time_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `job_checklist`
--
ALTER TABLE `job_checklist`
  ADD PRIMARY KEY (`job_checklist_id`);

--
-- Indexes for table `job_sub_type`
--
ALTER TABLE `job_sub_type`
  ADD PRIMARY KEY (`job_sub_type_id`);

--
-- Indexes for table `job_type`
--
ALTER TABLE `job_type`
  ADD PRIMARY KEY (`job_type_id`);

--
-- Indexes for table `private_chat_messages`
--
ALTER TABLE `private_chat_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qc_time`
--
ALTER TABLE `qc_time`
  ADD PRIMARY KEY (`qc_time_id`);

--
-- Indexes for table `spoke_person`
--
ALTER TABLE `spoke_person`
  ADD PRIMARY KEY (`spoke_person_id`);

--
-- Indexes for table `spoke_person_emp`
--
ALTER TABLE `spoke_person_emp`
  ADD PRIMARY KEY (`spoke_person_emp_id`);

--
-- Indexes for table `spoke_person_job_type`
--
ALTER TABLE `spoke_person_job_type`
  ADD PRIMARY KEY (`spoke_person_job_type_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `team_chat_messages`
--
ALTER TABLE `team_chat_messages`
  ADD PRIMARY KEY (`msg_id`);

--
-- Indexes for table `timegap`
--
ALTER TABLE `timegap`
  ADD PRIMARY KEY (`timegap_id`);

--
-- Indexes for table `timesheet`
--
ALTER TABLE `timesheet`
  ADD PRIMARY KEY (`timesheet_id`);

--
-- Indexes for table `userlevel`
--
ALTER TABLE `userlevel`
  ADD PRIMARY KEY (`userlevel_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chat_messages`
--
ALTER TABLE `chat_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `checklist`
--
ALTER TABLE `checklist`
  MODIFY `checklist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `empteamrole`
--
ALTER TABLE `empteamrole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `engg_time`
--
ALTER TABLE `engg_time`
  MODIFY `engg_time_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `job_checklist`
--
ALTER TABLE `job_checklist`
  MODIFY `job_checklist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_sub_type`
--
ALTER TABLE `job_sub_type`
  MODIFY `job_sub_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `job_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `private_chat_messages`
--
ALTER TABLE `private_chat_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `qc_time`
--
ALTER TABLE `qc_time`
  MODIFY `qc_time_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `spoke_person`
--
ALTER TABLE `spoke_person`
  MODIFY `spoke_person_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `spoke_person_emp`
--
ALTER TABLE `spoke_person_emp`
  MODIFY `spoke_person_emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `spoke_person_job_type`
--
ALTER TABLE `spoke_person_job_type`
  MODIFY `spoke_person_job_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `team_chat_messages`
--
ALTER TABLE `team_chat_messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timegap`
--
ALTER TABLE `timegap`
  MODIFY `timegap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `timesheet`
--
ALTER TABLE `timesheet`
  MODIFY `timesheet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `userlevel`
--
ALTER TABLE `userlevel`
  MODIFY `userlevel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
