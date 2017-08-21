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


-- Dumping structure for table otsdb.conceptschema
CREATE TABLE IF NOT EXISTS `conceptschema` (
  `ConceptSchemaId` char(36) NOT NULL,
  `ConceptNodeId` char(36) NOT NULL,
  `RelationName` varchar(255) DEFAULT NULL,
  `ConceptName` varchar(255) DEFAULT NULL,
  `ActionName` varchar(255) DEFAULT NULL,
  `AttributeName` varchar(255) DEFAULT NULL,
  `AttributeValue` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ConceptSchemaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.conceptschema: ~0 rows (approximately)
DELETE FROM `conceptschema`;
/*!40000 ALTER TABLE `conceptschema` DISABLE KEYS */;
/*!40000 ALTER TABLE `conceptschema` ENABLE KEYS */;


-- Dumping structure for table otsdb.course
CREATE TABLE IF NOT EXISTS `course` (
  `Id` char(36) NOT NULL,
  `Number` varchar(30) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Createdby` int(6) unsigned NOT NULL,
  `Createdon` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.course: ~0 rows (approximately)
DELETE FROM `course`;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`Id`, `Number`, `Name`, `Createdby`, `Createdon`) VALUES
	('abcba74a-db14-41f7-93dc-7b22c38cfba5', '', 'Software Engineering', 2, '2017-08-19 10:15:36');
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
INSERT INTO `courseknowledgemap` (`CourseKnowledgeMapId`, `CourseId`, `KnowledgeMapId`) VALUES
	('a6abd797-3ade-447e-8359-8dea7a393787', 'abcba74a-db14-41f7-93dc-7b22c38cfba5', 'c8af455c-0147-4c63-9275-464233bb779c'),
	('c18c5a28-b67d-42d6-ad7e-014e4ca18d65', 'abcba74a-db14-41f7-93dc-7b22c38cfba5', 'dbd86233-31a6-4260-87af-bc109bee6040');
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

-- Dumping data for table otsdb.exam: ~0 rows (approximately)
DELETE FROM `exam`;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` (`Id`, `Name`, `StartDate`, `StartTime`, `EndTime`, `TotalMark`, `Activated`, `CourseId`, `TestQuestions`, `TestSheet`, `AnswerSheet`) VALUES
	('0a9ddb0d-f283-4e21-b3f0-a442e5d9f8c2', 'Software Engineering Level 1', '08/24/2017', '10:20 AM', '10:30 AM', 0, 0, 'abcba74a-db14-41f7-93dc-7b22c38cfba5', NULL, NULL, NULL);
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

-- Dumping data for table otsdb.knowledgemap: ~2 rows (approximately)
DELETE FROM `knowledgemap`;
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
INSERT INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('c8af455c-0147-4c63-9275-464233bb779c', 'Data Structure Interface', 'Data Structure Interface concept', '2017-08-19 20:31:11', '[{"id":"c8af455c-0147-4c63-9275-464233bb779c","text":"Data Structure Interface","nodes":[{"id":"40c2e80a-524b-4b79-aa97-a81374688373","name":"List","parentNodeId":"c8af455c-0147-4c63-9275-464233bb779c","text":"List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"c8af455c-0147-4c63-9275-464233bb779c","parentname":"Data Structure Interface","nodeId":1,"parentId":0},{"id":"cf90e6c7-2469-4df6-8c4a-b61932430afb","name":"UnOrdered Set (USet)","parentNodeId":"c8af455c-0147-4c63-9275-464233bb779c","text":"UnOrdered Set (USet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"c8af455c-0147-4c63-9275-464233bb779c","parentname":"Data Structure Interface","nodeId":2,"parentId":0},{"id":"24814254-439f-46f8-b2aa-88959794ed03","name":"Sorted Set (SSet)","parentNodeId":"c8af455c-0147-4c63-9275-464233bb779c","text":"Sorted Set (SSet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"c8af455c-0147-4c63-9275-464233bb779c","parentname":"Data Structure Interface","nodeId":3,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2),
	('dbd86233-31a6-4260-87af-bc109bee6040', 'Data Structure Implementation', 'Data Structure Implementations', '2017-08-19 20:34:27', '[{"id":"dbd86233-31a6-4260-87af-bc109bee6040","text":"Data Structure Implementation","nodes":[{"id":"7c25c494-1efd-47ce-9a35-62bde47b9770","name":"List Implementation","parentNodeId":"dbd86233-31a6-4260-87af-bc109bee6040","text":"List Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"b76dbf50-bf9d-4883-8ca0-7fb57e3c48b2","name":"ArrayStack","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"ArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":2,"parentId":1},{"id":"7b0dc0f6-7ca4-41b8-86fc-36ae77a8e48e","name":"ArrayDeque","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"ArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":3,"parentId":1},{"id":"c642c407-d69b-4144-b7f3-2ee8e4e43ff4","name":"DualArrayDeque","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"DualArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":4,"parentId":1},{"id":"3eda374a-6a3e-4eb6-80e1-1c05bb27d0ab","name":"RootishArrayStack","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"RootishArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":5,"parentId":1},{"id":"53b6caf9-36e2-46aa-b68a-64bd302e3b10","name":"DLList","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"DLList","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":6,"parentId":1},{"id":"b36ec3cb-e079-4191-8f88-3858f3011030","name":"SEList","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"SEList","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":7,"parentId":1},{"id":"eb83f954-1888-491e-b498-eeab1b98d1ce","name":"SkipList","parentNodeId":"7c25c494-1efd-47ce-9a35-62bde47b9770","text":"SkipList","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"7c25c494-1efd-47ce-9a35-62bde47b9770","parentname":"List Implementation","nodeId":8,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"dbd86233-31a6-4260-87af-bc109bee6040","parentname":"Data Structure Implementation","nodeId":1,"parentId":0},{"id":"866579eb-c1ac-427d-8de9-d609aaf69612","name":"USet Implementation","parentNodeId":"dbd86233-31a6-4260-87af-bc109bee6040","text":"USet Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"5bc7ed22-4c66-40a7-bb71-abf5037416d5","name":"ChainedHashTable","parentNodeId":"866579eb-c1ac-427d-8de9-d609aaf69612","text":"ChainedHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"866579eb-c1ac-427d-8de9-d609aaf69612","parentname":"USet Implementation","nodeId":10,"parentId":9},{"id":"8f0dfb7c-2d67-4f1e-bdc3-6ca39a12d41c","name":"LinearHashTable","parentNodeId":"866579eb-c1ac-427d-8de9-d609aaf69612","text":"LinearHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"866579eb-c1ac-427d-8de9-d609aaf69612","parentname":"USet Implementation","nodeId":11,"parentId":9}],"data":{"RelationType":"TypeOf"},"parentid":"dbd86233-31a6-4260-87af-bc109bee6040","parentname":"Data Structure Implementation","nodeId":9,"parentId":0},{"id":"bcf5b5de-e5ad-4cc9-bff2-0ad8399777ea","name":"SSet Implementation","parentNodeId":"dbd86233-31a6-4260-87af-bc109bee6040","text":"SSet Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"97d7e8f8-7331-4ad3-b9e8-e9f5701846c0","name":"SkiplistSSet","parentNodeId":"bcf5b5de-e5ad-4cc9-bff2-0ad8399777ea","text":"SkiplistSSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"bcf5b5de-e5ad-4cc9-bff2-0ad8399777ea","parentname":"SSet Implementation","nodeId":13,"parentId":12},{"id":"12923b1c-6afe-4555-ba9d-f86c3fd8383e","name":"Treap","parentNodeId":"bcf5b5de-e5ad-4cc9-bff2-0ad8399777ea","text":"Treap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"bcf5b5de-e5ad-4cc9-bff2-0ad8399777ea","parentname":"SSet Implementation","nodeId":14,"parentId":12}],"data":{"RelationType":"TypeOf"},"parentid":"dbd86233-31a6-4260-87af-bc109bee6040","parentname":"Data Structure Implementation","nodeId":12,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2);
/*!40000 ALTER TABLE `knowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentcourse
CREATE TABLE IF NOT EXISTS `studentcourse` (
  `StudentCourseId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` char(36) NOT NULL,
  PRIMARY KEY (`StudentCourseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentcourse: ~2 rows (approximately)
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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

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
