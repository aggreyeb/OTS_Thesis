-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.22-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for otsdb
CREATE DATABASE IF NOT EXISTS `otsdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `otsdb`;


-- Dumping structure for table otsdb.course
CREATE TABLE IF NOT EXISTS `course` (
  `Id` char(36) NOT NULL,
  `Number` varchar(30) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Createdby` int(6) unsigned NOT NULL,
  `Createdon` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.course: ~2 rows (approximately)
DELETE FROM `course`;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;


-- Dumping structure for table otsdb.courseknowledgemap
CREATE TABLE IF NOT EXISTS `courseknowledgemap` (
  `CourseKnowledgeMapId` char(36) NOT NULL,
  `CourseId` char(36) NOT NULL,
  `KnowledgeMapId` char(36) NOT NULL,
  PRIMARY KEY (`CourseKnowledgeMapId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.courseknowledgemap: ~2 rows (approximately)
DELETE FROM `courseknowledgemap`;
/*!40000 ALTER TABLE `courseknowledgemap` DISABLE KEYS */;
/*!40000 ALTER TABLE `courseknowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.exam
CREATE TABLE IF NOT EXISTS `exam` (
  `Id` char(36) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `StartDate` varchar(50) DEFAULT NULL,
  `StartTime` varchar(50) DEFAULT NULL,
  `EndTime` varchar(50) DEFAULT NULL,
  `TotalMark` int(11) DEFAULT NULL,
  `Activated` tinyint(4) DEFAULT NULL,
  `CourseId` char(36) DEFAULT NULL,
  `TestQuestions` longtext,
  `TestSheet` longtext,
  `AnswerSheet` longtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.exam: ~1 rows (approximately)
DELETE FROM `exam`;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;


-- Dumping structure for table otsdb.knowledgemap
CREATE TABLE IF NOT EXISTS `knowledgemap` (
  `KnowledgeMapId` char(36) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `CreateOn` datetime NOT NULL,
  `Concepts` text,
  `LastUpdated` datetime DEFAULT NULL,
  `IsPublic` tinyint(1) DEFAULT NULL,
  `IsImported` tinyint(1) DEFAULT NULL,
  `IsSharing` tinyint(1) DEFAULT NULL,
  `CreatedBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`KnowledgeMapId`),
  KEY `CreatedBy` (`CreatedBy`),
  CONSTRAINT `FK4416245C78287B0` FOREIGN KEY (`CreatedBy`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.knowledgemap: ~5 rows (approximately)
DELETE FROM `knowledgemap`;
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
INSERT INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('564e339d-8613-48e3-804a-0f1ae19b0c73', 'KM(Maiga)', 'KM(Maiga) description', '2017-08-16 19:51:16', '', NULL, 1, 0, 0, 1),
	('697185fb-3cd9-48a5-b283-29bd4010d61d', 'MyTestKM', 'MyTestKM Description', '2017-08-17 20:56:31', '[{"id":"697185fb-3cd9-48a5-b283-29bd4010d61d","text":"MyTestKM","nodes":[{"id":"3cd8490e-37c3-4bdf-bd33-6ab1b39d9b23","name":"aa","conceptNodeDescription":"","parentNodeId":"697185fb-3cd9-48a5-b283-29bd4010d61d","text":"aa","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"2b73a268-32c9-4d79-926c-fcb9013904c9","name":"aa1","conceptNodeDescription":"","parentNodeId":"3cd8490e-37c3-4bdf-bd33-6ab1b39d9b23","text":"aa1","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"parentname":"aa","relationship":{"id":"","name":""},"behaviorDescription":"","attributes":[],"functions":[],"applications":[],"behaviourDescriptions":[],"parentid":"3cd8490e-37c3-4bdf-bd33-6ab1b39d9b23","nodeId":2,"parentId":1}],"parentname":"aa","relationship":{"id":"","name":""},"behaviorDescription":"","attributes":[],"functions":[],"applications":[],"behaviourDescriptions":[],"parentid":"697185fb-3cd9-48a5-b283-29bd4010d61d","nodeId":1,"parentId":0},{"id":"bf0bf8ee-82a2-43b8-8474-87b775fab8e1","name":"bb","conceptNodeDescription":"","parentNodeId":"697185fb-3cd9-48a5-b283-29bd4010d61d","text":"bb","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"parentname":"MyTestKM","relationship":{"id":"","name":""},"behaviorDescription":"","attributes":[],"functions":[],"applications":[],"behaviourDescriptions":[],"parentid":"697185fb-3cd9-48a5-b283-29bd4010d61d","nodeId":2,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0,"parentname":"MyTestKM"}]', NULL, 0, 0, 0, 2);
/*!40000 ALTER TABLE `knowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentcourse
CREATE TABLE IF NOT EXISTS `studentcourse` (
  `StudentCourseId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` char(36) NOT NULL,
  PRIMARY KEY (`StudentCourseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentcourse: ~3 rows (approximately)
DELETE FROM `studentcourse`;
/*!40000 ALTER TABLE `studentcourse` DISABLE KEYS */;
INSERT INTO `studentcourse` (`StudentCourseId`, `StudentId`, `CourseId`) VALUES
	('357611ab-c236-4b33-b329-45eb95adcec0', 70, 'f6be2300-b565-4929-beab-8a892a34d937'),
	('3be9d2a3-dc01-4eaf-a3d5-690a9bb42277', 70, 'ca3be66a-958b-492a-ae8a-169e6b0d4e37'),
	('4e023933-1792-4c35-9566-c4a7842dd468', 70, '09c7722c-ad35-4486-9cfc-4a5f1243c51a');
/*!40000 ALTER TABLE `studentcourse` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentexam
CREATE TABLE IF NOT EXISTS `studentexam` (
  `Id` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `StartDateTime` datetime DEFAULT NULL,
  `EndDateTime` datetime DEFAULT NULL,
  `Taken` tinyint(4) DEFAULT NULL,
  `Marked` tinyint(4) DEFAULT NULL,
  `Mark` int(11) DEFAULT NULL,
  `TestItemCount` int(11) DEFAULT NULL,
  `Comments` longtext,
  `TestSheet` longtext,
  `CourseId` char(36) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentexam: ~0 rows (approximately)
DELETE FROM `studentexam`;
/*!40000 ALTER TABLE `studentexam` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentexam` ENABLE KEYS */;


-- Dumping structure for table otsdb.testquestionbank
CREATE TABLE IF NOT EXISTS `testquestionbank` (
  `Id` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `CourseId` char(36) NOT NULL,
  `TestQuestions` longtext,
  `TestSheet` longtext,
  `AnswerSheet` longtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.testquestionbank: ~0 rows (approximately)
DELETE FROM `testquestionbank`;
/*!40000 ALTER TABLE `testquestionbank` DISABLE KEYS */;
/*!40000 ALTER TABLE `testquestionbank` ENABLE KEYS */;


-- Dumping structure for table otsdb.user
CREATE TABLE IF NOT EXISTS `user` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `UserTypeId` int(11) DEFAULT NULL,
  `UserAccountId` int(11) NOT NULL,
  `FirstName` varchar(60) NOT NULL,
  `LastName` varchar(60) NOT NULL,
  `Number` varchar(50) DEFAULT NULL,
  `Street` varchar(100) DEFAULT NULL,
  `City` varchar(60) DEFAULT NULL,
  `Province` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  KEY `UserTypeId` (`UserTypeId`),
  KEY `UserAccountId` (`UserAccountId`),
  CONSTRAINT `FK7185C17C79C572D0` FOREIGN KEY (`UserAccountId`) REFERENCES `useraccount` (`UserAccountId`),
  CONSTRAINT `FK7185C17CFA5FD70D` FOREIGN KEY (`UserTypeId`) REFERENCES `usertype` (`UserTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.user: ~3 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`UserId`, `Email`, `Phone`, `UserTypeId`, `UserAccountId`, `FirstName`, `LastName`, `Number`, `Street`, `City`, `Province`) VALUES
	(1, NULL, NULL, 3, 1, 'Maiga', 'Chang', NULL, NULL, NULL, NULL),
	(2, 'ea@ad.ca', '4038987655', 3, 2, 'Ebenezer', 'Aggrey', NULL, NULL, NULL, NULL),
	(70, 's@s.com', '349-090-8976', 2, 75, 's', 's', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Dumping structure for table otsdb.useraccount
CREATE TABLE IF NOT EXISTS `useraccount` (
  `UserAccountId` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `IsLocked` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`UserAccountId`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.useraccount: ~3 rows (approximately)
DELETE FROM `useraccount`;
/*!40000 ALTER TABLE `useraccount` DISABLE KEYS */;
INSERT INTO `useraccount` (`UserAccountId`, `UserName`, `Password`, `IsLocked`) VALUES
	(1, 'maiga', 'maiga', 0),
	(2, 'eb', 'eb', 0),
	(75, 's', 's', 0);
/*!40000 ALTER TABLE `useraccount` ENABLE KEYS */;


-- Dumping structure for table otsdb.usertype
CREATE TABLE IF NOT EXISTS `usertype` (
  `UserTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `HomePageName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.usertype: ~3 rows (approximately)
DELETE FROM `usertype`;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` (`UserTypeId`, `Name`, `HomePageName`) VALUES
	(1, 'Administrator', 'Administrator'),
	(2, 'Student', 'Student'),
	(3, 'Teacher', 'Teacher');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
