-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.26-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

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

-- Dumping data for table otsdb.conceptschema: ~17 rows (approximately)
/*!40000 ALTER TABLE `conceptschema` DISABLE KEYS */;
REPLACE INTO `conceptschema` (`ConceptSchemaId`, `ConceptNodeId`, `RelationName`, `ConceptName`, `ActionName`, `AttributeName`, `AttributeValue`) VALUES
	('02fbfeaa-78f5-42b5-a9d1-b8cb1acb3fde', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'get'),
	('182cf8b9-03f2-44be-83ec-bb12d9fa557f', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation ', 'set'),
	('34e3ff4f-3b9f-45bd-b917-253559e19c3c', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'is', '', '', 'Implementation', 'ArrayQueue'),
	('36bd99fe-1be4-4036-9e73-1f9529fb26fc', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'add'),
	('39b136ef-488a-472b-a35a-c48764077488', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit ', 'promoting  plug and play architecture'),
	('59e29b8d-565d-4b32-aabf-70ed90a686a7', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application ', 'object composition'),
	('7ab57444-97a7-4e96-a0bc-8b34123b9298', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'remove'),
	('7ce2a990-246c-45ff-ae12-19e8a6c17fe0', 'cd967062-ef97-4750-b190-486643014fea', 'is-a', 'Interface', '', '', ''),
	('81fcfdb6-b046-453b-906f-43e94265dfe9', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit', 'supporting design by contract'),
	('a8a5f008-ccaf-46f0-b444-7c1355a0e024', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'is-a', 'Interface', '', '', ''),
	('beae88a2-2072-46a6-8b05-fa4966afafc3', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description', 'can have multiple implementation'),
	('c2ba7b1a-7e05-4b0b-babb-e9486fc9f748', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application ', 'Resolve multiple inheritance issue'),
	('c3c582db-7c14-4437-a456-0112e8cb4a60', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'is-a', 'Interface', '', '', ''),
	('c3e79973-8334-4f8f-8693-f9e30fb58b19', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour  Description', 'describes what the data structure does'),
	('e6d5e305-797b-418a-9008-7fdfcb0e74cd', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'can', 'method signtatures', 'contain', '', ''),
	('e8152d26-5d5d-40f8-80ef-239bb952b461', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application', 'Polymophism'),
	('fd712089-4eaa-44f6-beb9-f17d732972d3', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Implementation', 'ArrayStack');
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
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
REPLACE INTO `course` (`Id`, `Number`, `Name`, `Createdby`, `Createdon`) VALUES
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
/*!40000 ALTER TABLE `courseknowledgemap` DISABLE KEYS */;
REPLACE INTO `courseknowledgemap` (`CourseKnowledgeMapId`, `CourseId`, `KnowledgeMapId`) VALUES
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
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
REPLACE INTO `exam` (`Id`, `Name`, `StartDate`, `StartTime`, `EndTime`, `TotalMark`, `Activated`, `CourseId`, `TestQuestions`, `TestSheet`, `AnswerSheet`) VALUES
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

-- Dumping data for table otsdb.knowledgemap: ~1 rows (approximately)
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
REPLACE INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'Data Structure Interface', 'Data Structure Interface', '2017-08-21 10:10:26', '[{"id":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"Data Structure Interface","nodes":[{"id":"1bfa0dd4-b09c-4066-beb7-92b586833551","name":"List","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":1,"parentId":0},{"id":"cd967062-ef97-4750-b190-486643014fea","name":"UnOrdered Set (USet)","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"UnOrdered Set (USet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":2,"parentId":0},{"id":"dd3a2b00-486e-495b-8538-13403f2d3356","name":"Sorted Set (SSet)","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"Sorted Set (SSet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":3,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2);
/*!40000 ALTER TABLE `knowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentcourse
CREATE TABLE IF NOT EXISTS `studentcourse` (
  `StudentCourseId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` char(36) NOT NULL,
  PRIMARY KEY (`StudentCourseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentcourse: ~3 rows (approximately)
/*!40000 ALTER TABLE `studentcourse` DISABLE KEYS */;
REPLACE INTO `studentcourse` (`StudentCourseId`, `StudentId`, `CourseId`) VALUES
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
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`UserId`, `Email`, `Phone`, `UserTypeId`, `UserAccountId`, `FirstName`, `LastName`, `Number`, `Street`, `City`, `Province`) VALUES
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
/*!40000 ALTER TABLE `useraccount` DISABLE KEYS */;
REPLACE INTO `useraccount` (`UserAccountId`, `UserName`, `Password`, `IsLocked`) VALUES
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
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
REPLACE INTO `usertype` (`UserTypeId`, `Name`, `HomePageName`) VALUES
	(1, 'Administrator', 'Administrator'),
	(2, 'Student', 'Student'),
	(3, 'Teacher', 'Teacher');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
