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
DROP TABLE IF EXISTS `conceptschema`;
CREATE TABLE IF NOT EXISTS `conceptschema` (
  `ConceptSchemaId` char(36) NOT NULL,
  `ConceptNodeId` char(36) NOT NULL,
  `RelationName` varchar(255) DEFAULT NULL,
  `ConceptName` varchar(255) DEFAULT NULL,
  `ActionName` varchar(255) DEFAULT NULL,
  `AttributeName` varchar(255) DEFAULT NULL,
  `AttributeValue` varchar(255) DEFAULT NULL,
  `RootId` char(36) DEFAULT NULL,
  `ParentId` char(36) DEFAULT NULL,
  PRIMARY KEY (`ConceptSchemaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.conceptschema: ~16 rows (approximately)
/*!40000 ALTER TABLE `conceptschema` DISABLE KEYS */;
REPLACE INTO `conceptschema` (`ConceptSchemaId`, `ConceptNodeId`, `RelationName`, `ConceptName`, `ActionName`, `AttributeName`, `AttributeValue`, `RootId`, `ParentId`) VALUES
	('02238658-d956-4425-8325-3d93c2f58d49', '1656f736-27e2-4994-9470-ed7e22328d50', 'can', 'specification about the types of arguments of each operation supported', 'provide', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '00000000-00000000-00000000'),
	('078a23aa-2bab-401c-bb3c-37807fede5ea', '24a3cebf-fc4a-4bb0-946f-75225296a810', 'has', '', '', 'operation', 'size', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('1709d664-a0ef-4224-868d-98cb1015c0aa', '24a3cebf-fc4a-4bb0-946f-75225296a810', 'has', '', '', 'operation', 'remove', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('170ca706-27ee-4f02-8b0f-dabb70134114', '6c932620-3172-4728-ad1f-2818b610e541', 'has', '', '', 'operation', 'add', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('1a9c2ff5-dadd-444d-b032-d4f68fc8fa3e', '4f8df074-2801-4d59-be73-981c50a1a747', 'has', '', '', 'operation ', 'remove', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('278e9da9-e365-4b2d-ba7e-f7adbf776d70', '6c932620-3172-4728-ad1f-2818b610e541', 'has', '', '', 'operation', 'find', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('2fed2afc-2c07-433a-924a-79d0f5acbb63', '1656f736-27e2-4994-9470-ed7e22328d50', 'is', 'Abstract Data Type (ADT)', '', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '00000000-00000000-00000000'),
	('35acb154-9815-4f6e-9656-7bf0015aaf6e', '6c932620-3172-4728-ad1f-2818b610e541', 'has', '', '', 'operation', 'size', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('48d146c7-49b5-4d51-abe3-11b33b9faeff', '4f8df074-2801-4d59-be73-981c50a1a747', 'has', '', '', 'operation', 'set', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('4d8b3c0b-475c-4692-8bd4-74316fb98c90', '1656f736-27e2-4994-9470-ed7e22328d50', 'can', ' specification about return values  of each operation supported', 'provide', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '00000000-00000000-00000000'),
	('61b2fd2e-49c4-4ea4-882e-1feec6f00521', '6c932620-3172-4728-ad1f-2818b610e541', 'is', 'sorted set', '', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('65d80f6c-95ff-4f9f-b357-5db992137e7e', '4f8df074-2801-4d59-be73-981c50a1a747', 'has', '', '', 'operation ', 'add', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('6e0c41d6-c5fa-466c-a233-837c6adb14d3', '1656f736-27e2-4994-9470-ed7e22328d50', 'can', 'mulltiple implementation', 'supports', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '00000000-00000000-00000000'),
	('88e2bb9c-0dee-4db9-ae6b-e1e673f6d7ba', '6c932620-3172-4728-ad1f-2818b610e541', 'has', '', '', 'operation', 'remove', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('8c4b19a8-be85-4580-8b1c-30152904d162', '1656f736-27e2-4994-9470-ed7e22328d50', 'can', 'set of operataions supported by data structure', 'define', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '00000000-00000000-00000000'),
	('99f639cf-84ad-43a2-a60b-896593708754', '4f8df074-2801-4d59-be73-981c50a1a747', 'has', '', '', 'operation', 'size', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('ad43b39f-78e2-44aa-9242-645ff1da804c', '24a3cebf-fc4a-4bb0-946f-75225296a810', 'is', 'unordered set', '', '', '', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('af6d0cd5-39da-47b9-80cb-7e38760d1bda', '24a3cebf-fc4a-4bb0-946f-75225296a810', 'has', '', '', 'operation', 'find', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('ea35db78-20c6-40e1-8d70-cdb4200432fe', '4f8df074-2801-4d59-be73-981c50a1a747', 'has', '', '', 'operation', 'get', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('f2869f4a-d50f-4007-ad4d-7f9b3ddb53f6', '24a3cebf-fc4a-4bb0-946f-75225296a810', 'has', '', '', 'operation', 'add', '1656f736-27e2-4994-9470-ed7e22328d50', '1656f736-27e2-4994-9470-ed7e22328d50');
/*!40000 ALTER TABLE `conceptschema` ENABLE KEYS */;


-- Dumping structure for table otsdb.course
DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `Id` char(36) NOT NULL,
  `Number` varchar(30) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Createdby` int(6) unsigned NOT NULL,
  `Createdon` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.course: ~2 rows (approximately)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
REPLACE INTO `course` (`Id`, `Number`, `Name`, `Createdby`, `Createdon`) VALUES
	('181d408d-fcab-4b2c-993e-f852284e61f2', '', 'Test Course', 2, '2017-08-30 11:49:49');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;


-- Dumping structure for table otsdb.courseknowledgemap
DROP TABLE IF EXISTS `courseknowledgemap`;
CREATE TABLE IF NOT EXISTS `courseknowledgemap` (
  `CourseKnowledgeMapId` char(36) NOT NULL,
  `CourseId` char(36) NOT NULL,
  `KnowledgeMapId` char(36) NOT NULL,
  PRIMARY KEY (`CourseKnowledgeMapId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.courseknowledgemap: ~6 rows (approximately)
/*!40000 ALTER TABLE `courseknowledgemap` DISABLE KEYS */;
REPLACE INTO `courseknowledgemap` (`CourseKnowledgeMapId`, `CourseId`, `KnowledgeMapId`) VALUES
	('3a128a50-1118-4e46-95a0-741189c47485', '181d408d-fcab-4b2c-993e-f852284e61f2', '1656f736-27e2-4994-9470-ed7e22328d50'),
	('c0b22bca-bd03-4f88-893b-b641616aea33', '181d408d-fcab-4b2c-993e-f852284e61f2', '50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea');
/*!40000 ALTER TABLE `courseknowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.domainconcept
DROP TABLE IF EXISTS `domainconcept`;
CREATE TABLE IF NOT EXISTS `domainconcept` (
  `DomainConceptId` char(36) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DomainConceptId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.domainconcept: ~11 rows (approximately)
/*!40000 ALTER TABLE `domainconcept` DISABLE KEYS */;
/*!40000 ALTER TABLE `domainconcept` ENABLE KEYS */;


-- Dumping structure for table otsdb.exam
DROP TABLE IF EXISTS `exam`;
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

-- Dumping data for table otsdb.exam: ~4 rows (approximately)
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
REPLACE INTO `exam` (`Id`, `Name`, `StartDate`, `StartTime`, `EndTime`, `TotalMark`, `Activated`, `CourseId`, `TestQuestions`, `TestSheet`, `AnswerSheet`) VALUES
	('7583c3e4-839c-41bb-8ab4-de8c4e7f6906', 'Test 1', '08/23/2017', '11:50 AM', '12:50 PM', 0, 0, '181d408d-fcab-4b2c-993e-f852284e61f2', NULL, NULL, NULL);
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;


-- Dumping structure for table otsdb.knowledgemap
DROP TABLE IF EXISTS `knowledgemap`;
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

-- Dumping data for table otsdb.knowledgemap: ~8 rows (approximately)
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
REPLACE INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('1656f736-27e2-4994-9470-ed7e22328d50', 'Interface', 'Common data structures interface and its implementations', '2017-08-29 10:24:24', '[{"id":"1656f736-27e2-4994-9470-ed7e22328d50","text":"Interface","nodes":[{"id":"4f8df074-2801-4d59-be73-981c50a1a747","name":"List","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","name":"Array-Based List","parentNodeId":"4f8df074-2801-4d59-be73-981c50a1a747","text":"Array-Based List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"c1070c20-73c4-4692-b8a4-0d57832629f0","name":"ArrayStack","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":3,"parentId":2},{"id":"8174a1ec-5099-4acd-9bf6-a5dca6b1f1fe","name":"ArrayQueue","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayQueue","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":4,"parentId":2},{"id":"4c735e89-b942-497b-b6f4-559cdb584024","name":"ArrayDeque","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":5,"parentId":2},{"id":"7d78d44d-2e82-4a9c-8176-5b380ffbe480","name":"DualArrayDeque","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"DualArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":6,"parentId":2},{"id":"a9f90b95-12a4-4a22-afb6-84406ffc82c0","name":"RootishArrayStack","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"RootishArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":7,"parentId":2}],"data":{"RelationType":"TypeOf"},"parentid":"4f8df074-2801-4d59-be73-981c50a1a747","parentname":"List","nodeId":2,"parentId":1},{"id":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","name":"Linked List","parentNodeId":"4f8df074-2801-4d59-be73-981c50a1a747","text":"Linked List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"a528fd7b-ee4a-43f8-9ee0-cfad4d8ee3f6","name":"SLList (Singly-Linked List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"SLList (Singly-Linked List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":9,"parentId":8},{"id":"775ef5ed-21a0-433a-9f97-6b3965194521","name":"DLList (Doubly-Linked List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"DLList (Doubly-Linked List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":10,"parentId":8},{"id":"2330c2dc-a0c6-4ce9-b615-e9d15e7654ef","name":"SEList (Space-Efficient List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"SEList (Space-Efficient List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":11,"parentId":8}],"data":{"RelationType":"TypeOf"},"parentid":"4f8df074-2801-4d59-be73-981c50a1a747","parentname":"List","nodeId":8,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":1,"parentId":0},{"id":"24a3cebf-fc4a-4bb0-946f-75225296a810","name":"USet","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"USet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","name":"HashTable","parentNodeId":"24a3cebf-fc4a-4bb0-946f-75225296a810","text":"HashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"18adc384-89d4-426c-b44f-c584a254bfdc","name":"ChainedHashTable","parentNodeId":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","text":"ChainedHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","parentname":"HashTable","nodeId":14,"parentId":13},{"id":"816a5cdc-edca-442b-bc20-151192c8b315","name":"LinearHashTable","parentNodeId":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","text":"LinearHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","parentname":"HashTable","nodeId":15,"parentId":13}],"data":{"RelationType":"TypeOf"},"parentid":"24a3cebf-fc4a-4bb0-946f-75225296a810","parentname":"USet","nodeId":13,"parentId":12}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":2,"parentId":0},{"id":"6c932620-3172-4728-ad1f-2818b610e541","name":"SSet","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"SSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"38469e8c-d26a-420b-9c01-b8d692c3b059","name":"SkipListSet","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"SkipListSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":17,"parentId":16},{"id":"c39729fe-2282-48d7-8c04-b93c76a78eb9","name":"Treap","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"Treap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":18,"parentId":16},{"id":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","name":"Binary Tree","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"Binary Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","name":"Binary Search Tree","parentNodeId":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","text":"Binary Search Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"024f57d0-80f0-41ca-9104-23a10f6af236","name":"Random Binary Search Tree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"Random Binary Search Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":21,"parentId":20},{"id":"a33283d5-eb44-4b3e-9de0-4fa25b33cc66","name":"ScapegoatTree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"ScapegoatTree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":22,"parentId":20},{"id":"acc513fb-3077-4eb1-a83a-7ce34dd43be3","name":"Read-Black Tree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"Read-Black Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":23,"parentId":20}],"data":{"RelationType":"TypeOf"},"parentid":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","parentname":"Binary Tree","nodeId":20,"parentId":19},{"id":"f607abdf-4a97-4d7b-b003-2097549cea62","name":"Heap","parentNodeId":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","text":"Heap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"540ddcbf-4d2a-4339-a744-af7d4007735c","name":"BinaryHeap","parentNodeId":"f607abdf-4a97-4d7b-b003-2097549cea62","text":"BinaryHeap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f607abdf-4a97-4d7b-b003-2097549cea62","parentname":"Heap","nodeId":25,"parentId":24},{"id":"57effcf3-98a9-484f-864f-6c854c94caeb","name":"MeldableHeap","parentNodeId":"f607abdf-4a97-4d7b-b003-2097549cea62","text":"MeldableHeap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f607abdf-4a97-4d7b-b003-2097549cea62","parentname":"Heap","nodeId":26,"parentId":24}],"data":{"RelationType":"TypeOf"},"parentid":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","parentname":"Binary Tree","nodeId":24,"parentId":19}],"data":{"RelationType":"TypeOf"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":19,"parentId":16}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":3,"parentId":0},{"id":"99f67694-f366-4be9-b921-a98ba7e675ec","name":"Graph","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"Graph","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"6bf38507-6c13-4761-981b-f8d753786856","name":"AjacencyMatrix","parentNodeId":"99f67694-f366-4be9-b921-a98ba7e675ec","text":"AjacencyMatrix","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"99f67694-f366-4be9-b921-a98ba7e675ec","parentname":"Graph","nodeId":28,"parentId":27},{"id":"7ba64e1c-3dd8-4639-8a0c-0d05c4c9960f","name":"AdjacencyList","parentNodeId":"99f67694-f366-4be9-b921-a98ba7e675ec","text":"AdjacencyList","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"99f67694-f366-4be9-b921-a98ba7e675ec","parentname":"Graph","nodeId":29,"parentId":27}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":27,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0,"name":"Interface","parentname":""}]', NULL, 0, 0, 1, 2),
	('50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea', 'Performance Analysis ', 'Analyzing Correctness, Time Complexity and Space Complexity of data structures', '2017-08-30 09:32:35', '[{"id":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Performance Analysis ","nodes":[{"id":"2b2903fa-2fa0-4cec-b634-927586d1654d","name":"Correctness","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Correctness","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"0ef2c055-0856-44db-9572-c8c349f3c025","name":"Proof","parentNodeId":"2b2903fa-2fa0-4cec-b634-927586d1654d","text":"Proof","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"e79bfb97-569e-4f5c-a6d1-993c6a65ef23","name":"Construction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Construction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":3,"parentId":2},{"id":"99d85c48-ca9d-4183-969d-61ea9f936283","name":"Induction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Induction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":4,"parentId":2},{"id":"ebad7431-6d9d-4c4f-b4ec-762936d8aacd","name":"Contradiction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Contradiction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":5,"parentId":2}],"data":{"RelationType":"TypeOf"},"parentid":"2b2903fa-2fa0-4cec-b634-927586d1654d","parentname":"Correctness","nodeId":2,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":1,"parentId":0},{"id":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","name":"Time Complexity","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Time Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"fd7951b1-01eb-4201-ba76-398673993d83","name":"Worst-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Worst-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":7,"parentId":6},{"id":"a87df1f7-490d-4eb1-8c87-f2cec8cb14bf","name":"Average-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Average-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":8,"parentId":6},{"id":"169567d1-33a9-4426-a239-71e518b0ed46","name":"Best-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Best-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":9,"parentId":6}],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":6,"parentId":0},{"id":"41b5b8fd-f380-49a5-9f82-5deb9675ab2d","name":"Space Complexity","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Space Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":10,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2);
/*!40000 ALTER TABLE `knowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.questionbank
DROP TABLE IF EXISTS `questionbank`;
CREATE TABLE IF NOT EXISTS `questionbank` (
  `TestItemId` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `CourseId` char(36) NOT NULL,
  `Stimulus` longtext,
  `Stem` longtext,
  `StimulusFormatting` longtext,
  `StemFormatting` longtext,
  `CognitiveTypeName` varchar(255) DEFAULT NULL,
  `IsHigherCognitiveLevel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`TestItemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.questionbank: ~1 rows (approximately)
/*!40000 ALTER TABLE `questionbank` DISABLE KEYS */;
REPLACE INTO `questionbank` (`TestItemId`, `TestId`, `CourseId`, `Stimulus`, `Stem`, `StimulusFormatting`, `StemFormatting`, `CognitiveTypeName`, `IsHigherCognitiveLevel`) VALUES
	('00b0c46b-59d9-4a69-b539-08810a294c3c', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('01998e86-f219-4857-b5de-a9cb632f9d86', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('09c87ce6-a020-4360-89f3-80f7dd1c7023', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('0f2e1b91-7126-4c81-b72a-fa13298cac02', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('0f41d883-b6dc-4f25-9b00-c47cb50a444a', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('0faa82e8-8c1e-4f44-9093-0515efb08a72', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('109f5113-f222-457e-83f6-ee6bf33da5a1', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('134448e5-d8af-44db-b6b1-e8e58b8d8472', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('14bd098b-845f-4554-842e-d92851df7503', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('150e7c35-c8f4-4cf6-891a-077d66f183ce', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('19ffb9d7-5872-4c8f-8faf-351608f6156b', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('1cc60090-dcba-4d6a-94c7-c837d37d589c', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('1d42d416-c53b-4628-bf25-67950ed41db1', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('1e2e5678-a96f-4884-b67e-116602c9de95', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('1febe6b6-97d3-41e1-813a-fd18df937108', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('208cca4c-2959-41e8-90f0-52f2c7401edf', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('24f5f940-566a-4b79-bfcb-3120f52e192f', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('26a50f07-073a-44ce-b1bc-7decca324132', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('2a11e28c-422a-4290-b04a-eb7f25d09619', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('2a9425e6-0f95-4d62-9953-1541903e6b65', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('2e0cf3f5-1067-4bcb-b2a1-7bdd49018347', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('2e22feed-ffd1-468d-a326-8d74cf40e534', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('304f83a8-cba1-47be-9607-8eab8790247c', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('38cfc021-6650-4f3d-90c2-063af3a1e9ad', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('3c61e998-744d-4283-accd-87a96f1f6d69', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('3ed4acba-f1e5-4478-afcc-62aa64084aae', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('406cc5eb-a813-4629-a289-0a0c943f7ddd', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('41746653-b4c7-4342-9161-6bd35eb0c701', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('42c4334c-11bf-4a3f-9a4c-4b568a2ed885', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('433e47f2-3dad-4870-bb50-5e31d00db35e', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('46281f6f-d8ed-4188-9880-c43fb06070c3', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('46abb62a-0b36-4896-bb3b-97fdf316376b', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('4a9dfe9d-3588-4241-8adb-a626d9f4d7e7', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('4d30a5fa-0493-40bd-b7b7-7c8f5ed87710', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('4ff51653-35d4-47b3-bafc-e90b7261cd63', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('51caf71f-f200-4e2b-b906-c3fda8cf6410', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('52a8bf33-5497-40a7-81c1-bee3cb7e40fc', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('5433c316-9855-4bca-867d-0d0fb3c2d76b', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('59bd6c79-9316-4ace-aa87-ab94f3e0d4ab', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('5a65f597-5b2b-42b8-bc24-d80207f23dac', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('5da27581-faa9-4b7f-b581-4cc75b0baa64', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('5eb1afc0-81ce-4ed4-bc3e-ca5ba5407ea6', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('5f9db099-8db7-4996-b1ae-e1aa78c7f739', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('63c9241c-90d7-4d76-bd88-31afb298192a', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('65138538-b2c0-410e-9501-d4a617c38a45', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('687c1aed-5f3c-4f7b-9652-7d48da19087c', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('6ea9b30c-c1d1-4462-b6d2-4e242f403c18', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('71dab035-67e4-4314-9af8-9f41b3937178', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('75d29ffd-b2ae-4699-b321-c4e984ea10c9', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('771aaaf4-2ca7-430c-8f83-560743298a5a', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7767f523-970b-468a-919d-bce865255dab', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('77e0ac93-6916-4681-bfe2-05e5d5c167c0', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('79b90d46-c78b-4266-9ac8-ac7dec393c3a', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7ab6dfd8-2b3e-40b1-a904-317fd9af3793', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7c14e572-e576-4b08-b684-7d78228261eb', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7c1d76d1-c517-4626-8ad6-0936394db1ab', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7dabd62a-df09-4796-b076-bd3b64e0625d', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7f2e75fb-8317-42a2-9cc8-151d9b4aed7b', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('7f9bbf1d-e14a-4e59-bf32-b769296d4e91', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('81729de6-4a3d-48dc-92aa-d10fc091b5bb', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('8346e346-7a4f-49b8-906d-d251b27cff89', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('8aeaae33-6dbb-4f35-9f6f-19995edb9973', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('8bbbe7a3-e590-4e96-af01-14ed12e4c238', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('8c0683c6-ed7f-4fd8-9e6b-06aeaf918ac1', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('8f36e0f1-b29b-4901-91d8-727821190ca9', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('93da65c1-2727-4e41-9458-307d7b755952', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('945ce805-8512-4ba1-a7de-87e566a3322f', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('96b12a7f-65cb-46b1-8490-3c6562f42f07', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('985a496f-8b21-4942-bb44-3081f8463f39', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9a300d97-46f5-4602-b596-a12bac743438', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9ad10de1-252c-4c56-9808-9891c0cd9f25', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9b7bbb23-57dd-417c-a620-a4f76cf30a04', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9c359ff6-e75e-4b93-8e19-e7edcc0768f7', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9df344f3-f24a-446e-97e0-bf44fa77a7f1', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('9e920b8b-da3c-40a2-8923-3a69c32ccb59', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('a06d72cb-b4de-4d2c-9cc9-f094e23c4ecb', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('a5de2a9c-77ab-4e22-8019-1a4ff9989d0f', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('a9b6938e-5937-4878-89e7-dc9c05fb72cb', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('ac8df912-17c0-419c-a3ba-0ce660189874', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('acfe0b1d-43b7-4eee-80c4-2293a743f521', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('b7f53c53-9366-4eeb-b649-185aa7ea8cbc', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('bf05ccc8-4a57-415d-b9e4-300ce35844a0', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('c273b422-2c33-4bee-8b06-83f2afb264d5', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('c3154d7b-b430-4fb7-95a2-4d3e6a30add7', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('c52d727f-c1b5-446c-b76a-703d40be1a1e', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('c8eb407c-d2ef-42d2-9b19-fa4dafc48ad3', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('cb442c91-8cc2-4c5f-ad34-c37b7fbb5abf', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('cc70ab11-5828-4f4a-a868-212f81923e0e', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('cd1baeff-5dd0-4da4-8fb4-852b05720d2d', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('dce6ea7f-b67f-450b-b4c1-41f03ab2ea1a', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('de322f88-6210-44af-9b65-a82b6ee47eec', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('e2039756-a477-4b6d-a373-b6e79cd716f3', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('e59c0f95-8510-4304-b241-07a51b44c586', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('eb30b0af-7aaf-4de0-aea3-064995e1e900', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('ec68c3ce-d04a-4e6b-bb9f-a1ce740b2f10', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('ed04715b-82e1-4970-9d6d-0a728694f179', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('eda16afc-7e3e-4d9f-a1b9-0e108e8ed95d', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('f2b70421-e3e3-424a-b648-6a67d69ebb42', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('f7c065a4-b618-4570-abf2-9c7aebc1691e', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('f8724139-bc5f-42ee-a5e4-529e9c52fac3', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('f99542c4-1a79-4d8b-be04-730d0307cab3', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL),
	('fea9e822-65c6-4d03-954a-fe40c9f3c562', '7583c3e4-839c-41bb-8ab4-de8c4e7f6906', '181d408d-fcab-4b2c-993e-f852284e61f2', 'A software developer was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \nSelect the best object(s)  that exibit the above  behaviour description.\nI.	Interface\nII.	Implementation\nIII.	Inheritance\nIV.	Interface and Implementation', 'Select the best object(s)  that exibit the above  behaviour description.', 'null', 'null', 'Remember', NULL);
/*!40000 ALTER TABLE `questionbank` ENABLE KEYS */;


-- Dumping structure for table otsdb.questionbankansweroption
DROP TABLE IF EXISTS `questionbankansweroption`;
CREATE TABLE IF NOT EXISTS `questionbankansweroption` (
  `AnswerOptionId` char(36) NOT NULL,
  `TestItemId` char(36) NOT NULL,
  `Label` varchar(255) DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  `IsKey` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`AnswerOptionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.questionbankansweroption: ~980 rows (approximately)
/*!40000 ALTER TABLE `questionbankansweroption` DISABLE KEYS */;
REPLACE INTO `questionbankansweroption` (`AnswerOptionId`, `TestItemId`, `Label`, `Text`, `IsKey`) VALUES
	('0223f003-688d-4aca-8416-028b99ba905f', '24f5f940-566a-4b79-bfcb-3120f52e192f', 'B.', 'II', 0),
	('02363ff3-e9f7-42f0-80a6-fd9a9e023001', 'f7c065a4-b618-4570-abf2-9c7aebc1691e', 'B.', 'II', 0),
	('023b9cc0-0c71-4ef1-8eaa-e39b8c219243', 'b7f53c53-9366-4eeb-b649-185aa7ea8cbc', 'C.', 'III', 0),
	('02dc78c8-f456-44e2-8188-17c000741192', '38cfc021-6650-4f3d-90c2-063af3a1e9ad', 'D.', 'I ,II', 0),
	('02e02fb1-7425-4ef4-9122-59d3abbe4086', '65138538-b2c0-410e-9501-d4a617c38a45', 'A.', 'I', 0),
	('02f82703-bd71-462e-9879-c4f6f106ffce', 'c8eb407c-d2ef-42d2-9b19-fa4dafc48ad3', 'C.', 'III', 0),
	('02f9aeff-6647-4965-8db9-40cbe50b43e4', 'cd1baeff-5dd0-4da4-8fb4-852b05720d2d', 'C.', 'III', 0),
	('037e5baf-e8ee-4931-adf0-7a5df2a6d96c', '7c1d76d1-c517-4626-8ad6-0936394db1ab', 'A.', 'I', 0),
	('03fea39e-4509-4819-951a-923593bb52d7', '93da65c1-2727-4e41-9458-307d7b755952', 'A.', 'I', 0),
	('04c0e742-d72d-4cd7-a895-1161fa9b78ab', '985a496f-8b21-4942-bb44-3081f8463f39', 'D.', 'I ,II', 0),
	('04ebe222-62eb-4e1b-a7a8-4be06a142982', '2a9425e6-0f95-4d62-9953-1541903e6b65', 'B.', 'II', 0),
	('056dc983-7efe-40b0-8b9a-b775f5922a4c', '9df344f3-f24a-446e-97e0-bf44fa77a7f1', 'A.', 'I', 0),
	('06518b2f-85c6-457e-96bb-9f4654a83252', 'bf05ccc8-4a57-415d-b9e4-300ce35844a0', 'C.', 'III', 0),
	('066eb83d-e19d-44a8-b35a-8e32e926d8b7', '4ff51653-35d4-47b3-bafc-e90b7261cd63', 'B.', 'II', 0),
	('06d9d8b8-617a-447f-a155-3f17a0988ff6', '52a8bf33-5497-40a7-81c1-bee3cb7e40fc', 'D.', 'I ,II', 0),
	('07d2f3f2-2251-4ab8-8658-75a49b544e7d', '406cc5eb-a813-4629-a289-0a0c943f7ddd', 'D.', 'I ,II', 0),
	('08b6bf06-5e99-44db-af88-20a78b2c38ee', '96b12a7f-65cb-46b1-8490-3c6562f42f07', 'A.', 'I', 0),
	('0984b652-aa99-4456-b14d-8374975afa0e', '771aaaf4-2ca7-430c-8f83-560743298a5a', 'C.', 'III', 0),
	('09a9fff9-b866-4523-9458-96d96072ca04', '7ab6dfd8-2b3e-40b1-a904-317fd9af3793', 'D.', 'I ,II', 0),
	('09d7b139-221b-4385-87e1-61a46fc37908', 'c3154d7b-b430-4fb7-95a2-4d3e6a30add7', 'A.', 'I', 0),
	('0c976e1b-c900-4566-a0d6-9641885d01ed', '8c0683c6-ed7f-4fd8-9e6b-06aeaf918ac1', 'B.', 'II', 0),
	('0cd0cd0c-a266-4593-b703-0cc06dec54e1', '7ab6dfd8-2b3e-40b1-a904-317fd9af3793', 'A.', 'I', 0),
	('0f556e2a-dd1b-4c5d-b019-052801aa0f0d', '81729de6-4a3d-48dc-92aa-d10fc091b5bb', 'A.', 'I', 0),
	('1049ea78-9d6e-430b-a669-4a993319b12d', '9ad10de1-252c-4c56-9808-9891c0cd9f25', 'D.', 'I ,II', 0),
	('104cbd6a-6b2f-434f-b79b-bda0eee9994d', '134448e5-d8af-44db-b6b1-e8e58b8d8472', 'C.', 'III', 0),
	('10884b5c-4aa3-4291-8ef3-22ad00c84da9', '3c61e998-744d-4283-accd-87a96f1f6d69', 'D.', 'I ,II', 0),
	('119250a7-bb17-4e71-9970-d662dbd220b7', 'de322f88-6210-44af-9b65-a82b6ee47eec', 'C.', 'III', 0),
	('120c00b9-94ce-4f85-8bc7-652a38f53672', '4a9dfe9d-3588-4241-8adb-a626d9f4d7e7', 'C.', 'III', 0),
	('12feb7da-53c5-48b8-b282-613023faf196', '63c9241c-90d7-4d76-bd88-31afb298192a', 'D.', 'I ,II', 0),
	('135b541a-35d5-4796-b088-c75604573ff6', '00b0c46b-59d9-4a69-b539-08810a294c3c', 'C.', 'III', 0),
	('13609366-1266-4679-841e-47721967c467', '4ff51653-35d4-47b3-bafc-e90b7261cd63', 'C.', 'III', 0),
	('137bcd53-5b4b-45f0-89f2-e1ec984a8852', '26a50f07-073a-44ce-b1bc-7decca324132', 'D.', 'I ,II', 0),
	('15b12106-b15e-4ace-bdbf-20d4edca0722', '7c14e572-e576-4b08-b684-7d78228261eb', 'D.', 'I ,II', 0),
	('15dffe64-f875-4228-aaf2-e22d108ba871', '4ff51653-35d4-47b3-bafc-e90b7261cd63', 'D.', 'I ,II', 0),
	('164bbcfb-e012-4c2c-ad59-beb3f210c0d6', '945ce805-8512-4ba1-a7de-87e566a3322f', 'A.', 'I', 0),
	('17337847-fdbe-4da3-8414-144d3b613dec', '19ffb9d7-5872-4c8f-8faf-351608f6156b', 'C.', 'III', 0),
	('174311bd-7929-4d58-a3a6-083272bc2523', '9df344f3-f24a-446e-97e0-bf44fa77a7f1', 'C.', 'III', 0),
	('1852c83c-e99e-4d49-a002-c76397d451c1', 'ec68c3ce-d04a-4e6b-bb9f-a1ce740b2f10', 'D.', 'I ,II', 0),
	('18ff86f2-bfd1-4ad4-aac4-0cc414a78393', '8346e346-7a4f-49b8-906d-d251b27cff89', 'D.', 'I ,II', 0),
	('191f008a-392e-4a0d-a30a-7bae9659cf73', '1e2e5678-a96f-4884-b67e-116602c9de95', 'D.', 'I ,II', 0),
	('198a4d3c-fb68-494a-acde-66acacba3c00', 'de322f88-6210-44af-9b65-a82b6ee47eec', 'A.', 'I', 0),
	('1aefaccb-544e-43c6-b168-0871de5bc575', 'c8eb407c-d2ef-42d2-9b19-fa4dafc48ad3', 'A.', 'I', 0),
	('1b714aba-8402-4e57-b00e-adf4c5df85c4', '9b7bbb23-57dd-417c-a620-a4f76cf30a04', 'D.', 'I ,II', 0),
	('1c308049-ccd6-4065-9879-99f75a383640', '7767f523-970b-468a-919d-bce865255dab', 'C.', 'III', 0),
	('1c42a95f-4d5d-4475-8bf1-7ba113631775', '7dabd62a-df09-4796-b076-bd3b64e0625d', 'C.', 'III', 0),
	('1c5f6ce9-c410-42e9-8f60-a1cd5abb6544', '5eb1afc0-81ce-4ed4-bc3e-ca5ba5407ea6', 'A.', 'I', 0),
	('1c85efdd-8339-48c5-ae17-ad02d3ae0085', 'fea9e822-65c6-4d03-954a-fe40c9f3c562', 'A.', 'I', 0),
	('1dafd93b-69aa-4a11-b7bc-a46e67203e62', '9b7bbb23-57dd-417c-a620-a4f76cf30a04', 'B.', 'II', 0),
	('1f88cdf2-12ca-418d-8959-f6f901668a12', 'a5de2a9c-77ab-4e22-8019-1a4ff9989d0f', 'D.', 'I ,II', 0),
	('1ffa6f07-9e73-4649-a66b-2ef6e66b95d4', '433e47f2-3dad-4870-bb50-5e31d00db35e', 'A.', 'I', 0),
	('206d9350-4a06-4302-822a-e82dae35a9c4', '1febe6b6-97d3-41e1-813a-fd18df937108', 'B.', 'II', 0),
	('21107953-8ff6-460f-9ca0-d6b070131a25', '109f5113-f222-457e-83f6-ee6bf33da5a1', 'B.', 'II', 0),
	('217e223e-d3d1-4c82-b8d2-9ba2785d5f53', '6ea9b30c-c1d1-4462-b6d2-4e242f403c18', 'C.', 'III', 0),
	('2232bd93-aece-4736-8230-1bcefb8f5fa1', 'e59c0f95-8510-4304-b241-07a51b44c586', 'C.', 'III', 0),
	('244bab34-f506-47e5-85b1-89a5bf9ff6b5', '00b0c46b-59d9-4a69-b539-08810a294c3c', 'A.', 'I', 0),
	('249829d9-c7fa-4ddc-bae1-2182b019cd76', '8c0683c6-ed7f-4fd8-9e6b-06aeaf918ac1', 'D.', 'I ,II', 0),
	('264dc418-17d9-4bf8-af23-7602fcd7b8df', '96b12a7f-65cb-46b1-8490-3c6562f42f07', 'C.', 'III', 0),
	('2655ac89-fd4d-4e22-a37e-f7bbfd8fa5d2', '93da65c1-2727-4e41-9458-307d7b755952', 'B.', 'II', 0),
	('26e81202-ec4d-47cd-98d1-bc9259770830', '687c1aed-5f3c-4f7b-9652-7d48da19087c', 'A.', 'I', 0),
	('2a87ecc2-860d-4cee-a5b6-4b4238f5d2b4', 'f8724139-bc5f-42ee-a5e4-529e9c52fac3', 'A.', 'I', 0),
	('2d3a1aac-4669-4637-bd43-6e679871c945', '7dabd62a-df09-4796-b076-bd3b64e0625d', 'B.', 'II', 0),
	('2d8bdfe8-9a88-4824-a576-5649411d75db', '9e920b8b-da3c-40a2-8923-3a69c32ccb59', 'C.', 'III', 0),
	('2dd9b6d3-25d7-47aa-b8e8-8b3e4a7d10a4', '46abb62a-0b36-4896-bb3b-97fdf316376b', 'D.', 'I ,II', 0),
	('2e5851bc-39cd-406b-957e-825c616831a1', '945ce805-8512-4ba1-a7de-87e566a3322f', 'C.', 'III', 0),
	('2f1f3840-f5c3-46cc-a7c1-b519262aa500', 'ed04715b-82e1-4970-9d6d-0a728694f179', 'A.', 'I', 0),
	('3000705a-0234-45be-9053-7c09616cceea', 'e2039756-a477-4b6d-a373-b6e79cd716f3', 'A.', 'I', 0),
	('325f62b1-563e-4d5e-8c91-d4c291088a47', '51caf71f-f200-4e2b-b906-c3fda8cf6410', 'B.', 'II', 0),
	('32b249b8-7fe6-40d9-9242-5dda499964fc', 'f2b70421-e3e3-424a-b648-6a67d69ebb42', 'C.', 'III', 0),
	('32eb1f20-87e1-4ae8-a130-76d5107fb4f5', '3ed4acba-f1e5-4478-afcc-62aa64084aae', 'D.', 'I ,II', 0),
	('32eb9190-3dd2-419a-a851-5e518c685879', 'f99542c4-1a79-4d8b-be04-730d0307cab3', 'B.', 'II', 0),
	('33ab8911-30a9-4b11-8b7a-8319a3890bd8', '63c9241c-90d7-4d76-bd88-31afb298192a', 'B.', 'II', 0),
	('343a0711-ed4f-4dff-88f4-c7ca846c07b7', '14bd098b-845f-4554-842e-d92851df7503', 'A.', 'I', 0),
	('35394e8e-c1ee-4d8d-a64a-604064c75b78', '3c61e998-744d-4283-accd-87a96f1f6d69', 'B.', 'II', 0),
	('35d7b7ba-4f52-4d00-9180-5818003fa23d', '46281f6f-d8ed-4188-9880-c43fb06070c3', 'B.', 'II', 0),
	('3609a422-2b4b-4a24-bda8-1b564fc4ec00', 'a9b6938e-5937-4878-89e7-dc9c05fb72cb', 'A.', 'I', 0),
	('364914d9-f61e-4c13-84c9-e6c1cb1a6ecb', 'dce6ea7f-b67f-450b-b4c1-41f03ab2ea1a', 'D.', 'I ,II', 0),
	('37641b7c-9b1e-463a-94c8-a1adfe2286ba', '41746653-b4c7-4342-9161-6bd35eb0c701', 'B.', 'II', 0),
	('37aa5242-2b95-4d0d-a701-3ee7068902a9', 'f99542c4-1a79-4d8b-be04-730d0307cab3', 'A.', 'I', 0),
	('38180f5a-f01b-4fc3-a9ec-d34654640e2d', '14bd098b-845f-4554-842e-d92851df7503', 'C.', 'III', 0),
	('38643e16-b219-48bd-99da-2e384462e0c7', '9df344f3-f24a-446e-97e0-bf44fa77a7f1', 'D.', 'I ,II', 0),
	('38a599b2-2d29-4b93-aa72-2ef34b9ed9e1', '3c61e998-744d-4283-accd-87a96f1f6d69', 'A.', 'I', 0),
	('393561ac-62e3-4e21-8682-66461ef87bcf', 'b7f53c53-9366-4eeb-b649-185aa7ea8cbc', 'D.', 'I ,II', 0),
	('3b34f1fc-9536-4a15-94e5-f29d01540eef', '4d30a5fa-0493-40bd-b7b7-7c8f5ed87710', 'D.', 'I ,II', 0),
	('3b8138a2-3856-49a8-9a0a-ebbb72b7a857', '7c14e572-e576-4b08-b684-7d78228261eb', 'B.', 'II', 0),
	('3bc92474-0ce0-44dd-a187-af2211c16c85', '41746653-b4c7-4342-9161-6bd35eb0c701', 'A.', 'I', 0),
	('3c9b8ebf-a629-4b7e-82ae-d001b727df38', '63c9241c-90d7-4d76-bd88-31afb298192a', 'C.', 'III', 0),
	('3d0b7bfc-9028-4531-8682-21a7d603afd2', '8c0683c6-ed7f-4fd8-9e6b-06aeaf918ac1', 'A.', 'I', 0),
	('3e055b35-84c5-4796-a783-1377f217801f', 'f8724139-bc5f-42ee-a5e4-529e9c52fac3', 'B.', 'II', 0),
	('4032196e-d0b6-46ed-919e-f1f67a365950', '7f9bbf1d-e14a-4e59-bf32-b769296d4e91', 'D.', 'I ,II', 0),
	('41370958-99e5-4b3e-a7ca-434c20842a14', '79b90d46-c78b-4266-9ac8-ac7dec393c3a', 'A.', 'I', 0),
	('414db830-5206-4fff-a38c-f81122b0f452', '0f2e1b91-7126-4c81-b72a-fa13298cac02', 'B.', 'II', 0),
	('429a9edd-4c70-441f-9ce4-173fc51d516c', 'de322f88-6210-44af-9b65-a82b6ee47eec', 'B.', 'II', 0),
	('446431cc-93d7-438f-9c4f-f193a0fef949', 'f99542c4-1a79-4d8b-be04-730d0307cab3', 'D.', 'I ,II', 0),
	('448e892b-db57-43ad-8558-a3f6e9b9d392', 'a06d72cb-b4de-4d2c-9cc9-f094e23c4ecb', 'D.', 'I ,II', 0),
	('4492f69b-0280-401a-9863-9760ceac169e', '8c0683c6-ed7f-4fd8-9e6b-06aeaf918ac1', 'C.', 'III', 0),
	('44ba8e28-e01c-428b-8368-f8e78a8d0dc2', '5da27581-faa9-4b7f-b581-4cc75b0baa64', 'B.', 'II', 0),
	('44e485dc-2481-4ae0-bed6-f748f6efff7e', '1febe6b6-97d3-41e1-813a-fd18df937108', 'C.', 'III', 0),
	('4536aa02-b60b-4836-9bef-3607c642889d', '9e920b8b-da3c-40a2-8923-3a69c32ccb59', 'B.', 'II', 0),
	('459ba6d8-00e8-4a8f-81d3-67cf6f28b0ba', '38cfc021-6650-4f3d-90c2-063af3a1e9ad', 'B.', 'II', 0),
	('46a41cf8-3162-4e7b-b463-8dd5119f0414', '0f2e1b91-7126-4c81-b72a-fa13298cac02', 'C.', 'III', 0),
	('46c77877-f284-474d-a606-6714c1244f78', '4d30a5fa-0493-40bd-b7b7-7c8f5ed87710', 'A.', 'I', 0),
	('47527602-5fdd-46d7-be78-f778a10c18f0', 'e59c0f95-8510-4304-b241-07a51b44c586', 'A.', 'I', 0),
	('47576d9a-e7a8-43e5-bc40-b3ff7dc371db', '9a300d97-46f5-4602-b596-a12bac743438', 'B.', 'II', 0),
	('4801ab77-48d2-40e6-9a8f-185c097fafd1', 'de322f88-6210-44af-9b65-a82b6ee47eec', 'D.', 'I ,II', 0),
	('48143371-a749-4539-97e7-6e3be51f001c', 'e2039756-a477-4b6d-a373-b6e79cd716f3', 'D.', 'I ,II', 0),
	('4970a3c1-c784-4e43-8c22-eb9690eb44f3', 'f2b70421-e3e3-424a-b648-6a67d69ebb42', 'A.', 'I', 0),
	('4a6cd789-cde9-4f33-b9ce-ed017d632b00', '5433c316-9855-4bca-867d-0d0fb3c2d76b', 'B.', 'II', 0),
	('4b47f274-b24f-43b5-b5f4-f965a59ac5b0', 'f2b70421-e3e3-424a-b648-6a67d69ebb42', 'B.', 'II', 0),
	('4b6daab3-ca93-4752-b496-4ca4bdc3719c', '93da65c1-2727-4e41-9458-307d7b755952', 'D.', 'I ,II', 0),
	('4c9ffceb-8f1e-4838-9575-d1789b774b32', '5a65f597-5b2b-42b8-bc24-d80207f23dac', 'B.', 'II', 0),
	('4cb17ace-336d-4015-b590-46ba81c25b5c', '19ffb9d7-5872-4c8f-8faf-351608f6156b', 'A.', 'I', 0),
	('4dbe328a-8128-4b9d-b6a2-1d1c7d9cb66d', '985a496f-8b21-4942-bb44-3081f8463f39', 'A.', 'I', 0),
	('4e2c89a2-0895-4112-ab0e-666c5530259e', '4a9dfe9d-3588-4241-8adb-a626d9f4d7e7', 'B.', 'II', 0),
	('4e70aeb0-e51e-4c6d-b01b-7071b81aa814', '7f2e75fb-8317-42a2-9cc8-151d9b4aed7b', 'B.', 'II', 0),
	('4ebbb170-78b2-499b-807a-620029db2268', '4a9dfe9d-3588-4241-8adb-a626d9f4d7e7', 'A.', 'I', 0),
	('4f8d74c6-986a-444a-8af7-703f9de10fe5', 'acfe0b1d-43b7-4eee-80c4-2293a743f521', 'B.', 'II', 0),
	('500b2683-e15e-4c0a-9d98-b19a9e6bddc6', 'a9b6938e-5937-4878-89e7-dc9c05fb72cb', 'B.', 'II', 0),
	('501fcc8d-3e02-4e7c-b5fc-64e57e8e1aa0', '5da27581-faa9-4b7f-b581-4cc75b0baa64', 'C.', 'III', 0),
	('507576f5-4360-498f-aa94-044deb11b5b8', '71dab035-67e4-4314-9af8-9f41b3937178', 'A.', 'I', 0),
	('51b756ba-181a-42fd-b864-62a326bc3d1d', '96b12a7f-65cb-46b1-8490-3c6562f42f07', 'D.', 'I ,II', 0),
	('51c3561e-c773-490c-8701-583d74adb06d', '42c4334c-11bf-4a3f-9a4c-4b568a2ed885', 'C.', 'III', 0),
	('53794005-013e-4d3d-99e2-a360f7b8a1d5', '2a9425e6-0f95-4d62-9953-1541903e6b65', 'C.', 'III', 0),
	('54583a94-5597-45e7-9d69-bbdf4fb3eaae', '8f36e0f1-b29b-4901-91d8-727821190ca9', 'D.', 'I ,II', 0),
	('557ab020-8484-44d4-9113-a259fbe1a299', '8bbbe7a3-e590-4e96-af01-14ed12e4c238', 'D.', 'I ,II', 0),
	('55f5c447-51f2-499c-914c-281123f88f7c', '8bbbe7a3-e590-4e96-af01-14ed12e4c238', 'A.', 'I', 0),
	('563847b2-24ab-4553-b9fe-0d3c4ac42d5b', '65138538-b2c0-410e-9501-d4a617c38a45', 'D.', 'I ,II', 0),
	('5852804d-2e8f-4734-a397-99cc6d4c073d', '0f41d883-b6dc-4f25-9b00-c47cb50a444a', 'C.', 'III', 0),
	('58e7d1e8-abca-4190-bf92-f1e24b0cdf00', '150e7c35-c8f4-4cf6-891a-077d66f183ce', 'C.', 'III', 0),
	('59048544-75b6-4205-8cc6-1eb5f8d00769', '1d42d416-c53b-4628-bf25-67950ed41db1', 'C.', 'III', 0),
	('59d1f838-2df3-4569-a438-e4ccb3f7250b', '01998e86-f219-4857-b5de-a9cb632f9d86', 'D.', 'I ,II', 0),
	('5a9e5c42-7fe5-4571-915f-8df8c9c7d780', '7f9bbf1d-e14a-4e59-bf32-b769296d4e91', 'C.', 'III', 0),
	('5b395bb2-e5d0-43b1-9eac-9d9cf50b2d4e', 'cb442c91-8cc2-4c5f-ad34-c37b7fbb5abf', 'D.', 'I ,II', 0),
	('5c503655-2771-404b-999d-ddb2f6367747', 'eb30b0af-7aaf-4de0-aea3-064995e1e900', 'A.', 'I', 0),
	('5cd4e802-4b90-4157-a5c6-90750550e291', '7c14e572-e576-4b08-b684-7d78228261eb', 'A.', 'I', 0),
	('5e8a3c02-14c3-4543-bf91-677106632a02', 'eb30b0af-7aaf-4de0-aea3-064995e1e900', 'D.', 'I ,II', 0),
	('5fd26719-c3ad-485c-a35f-0a2a4e005629', '1cc60090-dcba-4d6a-94c7-c837d37d589c', 'B.', 'II', 0),
	('60568d3b-1202-4d05-b252-bbe9b9577163', '7767f523-970b-468a-919d-bce865255dab', 'B.', 'II', 0),
	('616e1829-e3dc-4aa6-9aa6-b45e5737f6dd', '4ff51653-35d4-47b3-bafc-e90b7261cd63', 'A.', 'I', 0),
	('6190ce21-0c93-424f-9c30-5b33d7f1b565', '59bd6c79-9316-4ace-aa87-ab94f3e0d4ab', 'D.', 'I ,II', 0),
	('6297f6f0-2e3f-4d98-8ab4-bbff7d4a8e56', '0faa82e8-8c1e-4f44-9093-0515efb08a72', 'A.', 'I', 0),
	('6312b631-71ca-49e7-9259-9aee707e02db', '9c359ff6-e75e-4b93-8e19-e7edcc0768f7', 'B.', 'II', 0),
	('63f841ff-c48e-4d7c-a331-f802e7781674', 'c8eb407c-d2ef-42d2-9b19-fa4dafc48ad3', 'D.', 'I ,II', 0),
	('65273d6e-80a5-43b7-8f41-cfc2675d6cb1', 'c52d727f-c1b5-446c-b76a-703d40be1a1e', 'C.', 'III', 0),
	('65e6fc64-3e07-43de-85aa-1d9476ff7003', 'c8eb407c-d2ef-42d2-9b19-fa4dafc48ad3', 'B.', 'II', 0),
	('65fbf2cd-2f53-4752-8f43-566bc03c6395', '2a11e28c-422a-4290-b04a-eb7f25d09619', 'A.', 'I', 0),
	('66e65f8a-ee32-48de-8375-ddeb505724cb', '52a8bf33-5497-40a7-81c1-bee3cb7e40fc', 'C.', 'III', 0),
	('670df82d-536b-4936-9691-a17abb269de3', 'cb442c91-8cc2-4c5f-ad34-c37b7fbb5abf', 'B.', 'II', 0),
	('67393b3d-6836-4a0b-aafd-8854560f7cf6', '24f5f940-566a-4b79-bfcb-3120f52e192f', 'D.', 'I ,II', 0),
	('678328dd-7904-46d9-acc7-8664db3e6519', '0f41d883-b6dc-4f25-9b00-c47cb50a444a', 'D.', 'I ,II', 0),
	('67c52768-91f4-4520-a382-496fbb8df863', '46281f6f-d8ed-4188-9880-c43fb06070c3', 'D.', 'I ,II', 0),
	('6854e816-e52c-4522-b305-bf7a812eeeb8', 'ac8df912-17c0-419c-a3ba-0ce660189874', 'C.', 'III', 0),
	('692ba2e7-2aa3-496a-bbed-8678788a3158', 'eda16afc-7e3e-4d9f-a1b9-0e108e8ed95d', 'C.', 'III', 0),
	('6a1aeabd-d639-4f4b-9059-e139d978e8f7', '1cc60090-dcba-4d6a-94c7-c837d37d589c', 'D.', 'I ,II', 0),
	('6a5a3a3b-049c-487c-8cf9-8ee26b898096', '945ce805-8512-4ba1-a7de-87e566a3322f', 'D.', 'I ,II', 0),
	('6a5b68fe-f60e-4de3-900d-d6cf420488b7', 'a5de2a9c-77ab-4e22-8019-1a4ff9989d0f', 'B.', 'II', 0),
	('6a684c6f-293c-4fad-84d2-5300eb2a82cd', 'eb30b0af-7aaf-4de0-aea3-064995e1e900', 'C.', 'III', 0),
	('6a8b6eb6-336e-4171-9cf3-3dbc8ac19008', '46abb62a-0b36-4896-bb3b-97fdf316376b', 'C.', 'III', 0),
	('6b48bf7e-d93b-4624-96c1-5b816b8813b2', '5da27581-faa9-4b7f-b581-4cc75b0baa64', 'D.', 'I ,II', 0),
	('6cb1d128-2ea6-4946-bea6-aa6362f557fb', '4d30a5fa-0493-40bd-b7b7-7c8f5ed87710', 'B.', 'II', 0),
	('6cef5e35-2210-4661-a495-69f2503d4c45', 'c3154d7b-b430-4fb7-95a2-4d3e6a30add7', 'C.', 'III', 0),
	('6d9bb7d5-84cc-49f2-87ed-988613213914', '7f9bbf1d-e14a-4e59-bf32-b769296d4e91', 'B.', 'II', 0),
	('6dab9d53-349b-4790-9d01-45e0f7c3ae39', '0f2e1b91-7126-4c81-b72a-fa13298cac02', 'D.', 'I ,II', 0),
	('6df1ee7e-b0e8-4731-9d1a-c88c29ca02c4', '9e920b8b-da3c-40a2-8923-3a69c32ccb59', 'A.', 'I', 0),
	('6e1ab8d2-f962-4c5c-a793-44ac0b6282a3', '0f41d883-b6dc-4f25-9b00-c47cb50a444a', 'A.', 'I', 0),
	('6ec4fe06-6c1a-4a6d-a218-6d390c522d94', '41746653-b4c7-4342-9161-6bd35eb0c701', 'C.', 'III', 0),
	('6f9fd4c4-d041-407e-b7d9-3f0d4c2e0ea7', '9ad10de1-252c-4c56-9808-9891c0cd9f25', 'B.', 'II', 0),
	('6fd5cd6e-1ab9-4632-9870-ab2cbf809787', 'cc70ab11-5828-4f4a-a868-212f81923e0e', 'D.', 'I ,II', 0),
	('6ffd59c8-ab6e-45c2-a7b9-443c09dcafbb', 'cb442c91-8cc2-4c5f-ad34-c37b7fbb5abf', 'A.', 'I', 0),
	('702e2c21-0b9c-4c2b-88b6-db638b226984', '1e2e5678-a96f-4884-b67e-116602c9de95', 'A.', 'I', 0),
	('7129b895-4364-46c2-93e6-04673186be1f', '945ce805-8512-4ba1-a7de-87e566a3322f', 'B.', 'II', 0),
	('7132dd86-c14c-4828-9b7b-0f1850e774fa', '46281f6f-d8ed-4188-9880-c43fb06070c3', 'A.', 'I', 0),
	('728a55fd-8457-465f-855a-6d195c0f1eb8', 'c52d727f-c1b5-446c-b76a-703d40be1a1e', 'B.', 'II', 0),
	('729c22f3-692a-416a-95df-8a0b63115b0f', '71dab035-67e4-4314-9af8-9f41b3937178', 'B.', 'II', 0),
	('73f07af0-5dad-4a18-812a-31cb54fbc052', 'a5de2a9c-77ab-4e22-8019-1a4ff9989d0f', 'C.', 'III', 0),
	('7566c5e7-4077-4971-a285-411daedce9f0', '14bd098b-845f-4554-842e-d92851df7503', 'B.', 'II', 0),
	('76ff86ed-ee8e-4ec3-b685-f8e2769f8ee1', 'eda16afc-7e3e-4d9f-a1b9-0e108e8ed95d', 'B.', 'II', 0),
	('770586e0-861e-462e-aaf0-04e7c6e52f9a', 'dce6ea7f-b67f-450b-b4c1-41f03ab2ea1a', 'A.', 'I', 0),
	('78067ffe-31c9-416c-95d1-b74dd255c671', '0faa82e8-8c1e-4f44-9093-0515efb08a72', 'C.', 'III', 0),
	('7b377c6e-9aff-43f8-a11b-a798a9039a57', '19ffb9d7-5872-4c8f-8faf-351608f6156b', 'D.', 'I ,II', 0),
	('7b795bb9-2e2a-4ab8-a603-096adc6735f7', '46abb62a-0b36-4896-bb3b-97fdf316376b', 'B.', 'II', 0),
	('7b7c7d3c-4d32-4fe4-92c1-17c9957fd17a', '75d29ffd-b2ae-4699-b321-c4e984ea10c9', 'B.', 'II', 0),
	('7cbc9ba8-ec28-4aa9-88ce-18e628dece01', '9e920b8b-da3c-40a2-8923-3a69c32ccb59', 'D.', 'I ,II', 0),
	('7cd44396-ce03-4766-bb7f-d26a8a87c0bf', '3c61e998-744d-4283-accd-87a96f1f6d69', 'C.', 'III', 0),
	('7df57d9e-12d0-4ed9-b037-1785b8923235', 'c3154d7b-b430-4fb7-95a2-4d3e6a30add7', 'D.', 'I ,II', 0),
	('7e76186d-3e50-4865-bb73-adff3340b15e', 'f8724139-bc5f-42ee-a5e4-529e9c52fac3', 'D.', 'I ,II', 0),
	('7e795e1e-4fa6-41b5-bc08-119d6a0bee07', 'dce6ea7f-b67f-450b-b4c1-41f03ab2ea1a', 'C.', 'III', 0),
	('7e8c4f90-b3ca-4947-9726-1e7fa1f4140e', '00b0c46b-59d9-4a69-b539-08810a294c3c', 'B.', 'II', 0),
	('80129b81-7316-4bde-a9e4-dc20622ed8b6', '51caf71f-f200-4e2b-b906-c3fda8cf6410', 'D.', 'I ,II', 0),
	('82fe16fd-d0d0-49e7-bc65-234e857b20f5', '38cfc021-6650-4f3d-90c2-063af3a1e9ad', 'C.', 'III', 0),
	('8317cbea-90fe-48fe-b398-77f57b73ca8e', 'c52d727f-c1b5-446c-b76a-703d40be1a1e', 'D.', 'I ,II', 0),
	('83a71c9a-463e-43d2-b29f-bfc08f41fe33', '8aeaae33-6dbb-4f35-9f6f-19995edb9973', 'C.', 'III', 0),
	('83b10e01-2f7a-4a0f-8deb-28d28948725d', '9b7bbb23-57dd-417c-a620-a4f76cf30a04', 'A.', 'I', 0),
	('8565539c-31f9-43c2-94aa-7b02394852d1', '9c359ff6-e75e-4b93-8e19-e7edcc0768f7', 'A.', 'I', 0),
	('86b67b6f-8eb3-44ab-9e10-28ac98b53824', 'cb442c91-8cc2-4c5f-ad34-c37b7fbb5abf', 'C.', 'III', 0),
	('873c3b45-4efc-4ac4-ac84-43cc0c97430d', '109f5113-f222-457e-83f6-ee6bf33da5a1', 'D.', 'I ,II', 0),
	('884312bf-58e4-4f78-ada7-aebc6d544bfe', '208cca4c-2959-41e8-90f0-52f2c7401edf', 'B.', 'II', 0),
	('88b41b90-ce75-49a1-810d-bdc98039cee8', 'bf05ccc8-4a57-415d-b9e4-300ce35844a0', 'A.', 'I', 0),
	('89fb820f-8381-4566-b4c8-b19c240aadaa', '01998e86-f219-4857-b5de-a9cb632f9d86', 'A.', 'I', 0),
	('8a0ab95f-2d57-4a42-947c-587d8122a46e', '3ed4acba-f1e5-4478-afcc-62aa64084aae', 'B.', 'II', 0),
	('8aac5f4b-3c27-4c4d-9208-5285a04987de', 'cc70ab11-5828-4f4a-a868-212f81923e0e', 'A.', 'I', 0),
	('8ac78513-bcf4-4b1f-b8d7-e513a03c32e9', 'ed04715b-82e1-4970-9d6d-0a728694f179', 'C.', 'III', 0),
	('8b6827de-1306-49a4-bea8-e0343f4f762b', '771aaaf4-2ca7-430c-8f83-560743298a5a', 'D.', 'I ,II', 0),
	('8b7a2f0e-1c91-4a7b-9fdb-9a00328f6e6c', 'a9b6938e-5937-4878-89e7-dc9c05fb72cb', 'C.', 'III', 0),
	('8bce013c-314b-4d66-8a6c-2b8bfd4d7f89', 'f99542c4-1a79-4d8b-be04-730d0307cab3', 'C.', 'III', 0),
	('8c66b8ca-32ff-44e9-8290-eac1abce3965', '2a11e28c-422a-4290-b04a-eb7f25d09619', 'C.', 'III', 0),
	('8ca31801-5a56-4681-b3fa-658be3697bf0', '7f9bbf1d-e14a-4e59-bf32-b769296d4e91', 'A.', 'I', 0),
	('8d20edb2-5285-41f5-a4cb-5db1ff6e3500', '985a496f-8b21-4942-bb44-3081f8463f39', 'C.', 'III', 0),
	('8d29e16f-97dc-44f9-8f31-7b5dc6aa8aef', 'ec68c3ce-d04a-4e6b-bb9f-a1ce740b2f10', 'A.', 'I', 0),
	('8d4ee6cc-eb43-4e2d-b65e-92ac1b4f2f68', '304f83a8-cba1-47be-9607-8eab8790247c', 'D.', 'I ,II', 0),
	('8e0e8f2d-494b-4360-9915-7715ba72d98a', '26a50f07-073a-44ce-b1bc-7decca324132', 'C.', 'III', 0),
	('8f59e72e-1398-4b10-ba5a-e0a23ae6c8d7', 'cd1baeff-5dd0-4da4-8fb4-852b05720d2d', 'D.', 'I ,II', 0),
	('9098f97f-3df6-4f54-a7e5-3d47b8ea5e52', '8f36e0f1-b29b-4901-91d8-727821190ca9', 'A.', 'I', 0),
	('91288b1d-9aab-4bbb-84b7-1c13dadb861c', 'f7c065a4-b618-4570-abf2-9c7aebc1691e', 'C.', 'III', 0),
	('913b8f18-ddda-4ade-bcd4-1b51877815c5', 'ac8df912-17c0-419c-a3ba-0ce660189874', 'A.', 'I', 0),
	('9167a5c6-9336-43c5-9597-90f522bad1d2', '150e7c35-c8f4-4cf6-891a-077d66f183ce', 'A.', 'I', 0),
	('935f8936-3359-4517-8335-fc6359994118', '8aeaae33-6dbb-4f35-9f6f-19995edb9973', 'A.', 'I', 0),
	('94eb7296-49db-4923-af8a-dfd38d250a82', 'acfe0b1d-43b7-4eee-80c4-2293a743f521', 'C.', 'III', 0),
	('95135dde-4da7-46ad-acef-9131c444d735', '150e7c35-c8f4-4cf6-891a-077d66f183ce', 'D.', 'I ,II', 0),
	('953c2b70-4d55-43b9-981c-fa4b8aa103ed', '109f5113-f222-457e-83f6-ee6bf33da5a1', 'A.', 'I', 0),
	('9580b773-06c8-4d79-8e0e-972bd6535a9c', '208cca4c-2959-41e8-90f0-52f2c7401edf', 'D.', 'I ,II', 0),
	('95821064-c5a4-4911-86d4-ac9daa3e3bbe', '304f83a8-cba1-47be-9607-8eab8790247c', 'C.', 'III', 0),
	('96ad152f-5d89-4743-85d3-e4a671e30074', '5a65f597-5b2b-42b8-bc24-d80207f23dac', 'C.', 'III', 0),
	('97cb6ce0-5977-4c5d-8d53-928c46411f2c', '1e2e5678-a96f-4884-b67e-116602c9de95', 'B.', 'II', 0),
	('98512c72-beaf-45ab-891b-e993251a67d8', '7f2e75fb-8317-42a2-9cc8-151d9b4aed7b', 'D.', 'I ,II', 0),
	('98e6d31b-8f58-4b07-8ae4-90e85065cc4d', '5a65f597-5b2b-42b8-bc24-d80207f23dac', 'A.', 'I', 0),
	('99039075-81ee-46f8-8f57-e742bec32edf', '0faa82e8-8c1e-4f44-9093-0515efb08a72', 'B.', 'II', 0),
	('9929c503-c940-4fda-b261-09acdb7d5388', '8f36e0f1-b29b-4901-91d8-727821190ca9', 'C.', 'III', 0),
	('9a4ca0f6-739a-4a31-987d-a3f32c2deef2', 'acfe0b1d-43b7-4eee-80c4-2293a743f521', 'A.', 'I', 0),
	('9b5dfb42-4acc-4f0f-886c-c7df75aa26d6', 'ac8df912-17c0-419c-a3ba-0ce660189874', 'B.', 'II', 0),
	('9b691b7d-b078-41a4-aa63-d8ee3a4ac58f', '26a50f07-073a-44ce-b1bc-7decca324132', 'A.', 'I', 0),
	('9c20f88b-9e4d-4c10-bf2c-e6081594bdba', '2e22feed-ffd1-468d-a326-8d74cf40e534', 'C.', 'III', 0),
	('9d1af844-f338-43cc-bfdd-48035f3b1a83', '8bbbe7a3-e590-4e96-af01-14ed12e4c238', 'C.', 'III', 0),
	('9d55356d-39fd-4637-a9b2-61e01a5f69b4', '77e0ac93-6916-4681-bfe2-05e5d5c167c0', 'C.', 'III', 0),
	('a01699e8-56fb-4821-8598-d83b09f2e1bb', '5433c316-9855-4bca-867d-0d0fb3c2d76b', 'D.', 'I ,II', 0),
	('a07ed10f-afd9-48d6-b71f-a2e7a2e75c92', '09c87ce6-a020-4360-89f3-80f7dd1c7023', 'B.', 'II', 0),
	('a081bbbc-f1b5-4d44-9563-7ff96f9f5957', '134448e5-d8af-44db-b6b1-e8e58b8d8472', 'D.', 'I ,II', 0),
	('a0907028-50a9-4f72-b005-c8ea398a60b2', 'f7c065a4-b618-4570-abf2-9c7aebc1691e', 'A.', 'I', 0),
	('a0c254cf-46a2-47bc-ba1c-f79ee889e6dc', '77e0ac93-6916-4681-bfe2-05e5d5c167c0', 'A.', 'I', 0),
	('a1e5a57b-2d1a-40fe-84b7-cb4fa00aeb0c', '7dabd62a-df09-4796-b076-bd3b64e0625d', 'A.', 'I', 0),
	('a30be0a3-8f6b-4368-9b84-bf1ef3214371', '9b7bbb23-57dd-417c-a620-a4f76cf30a04', 'C.', 'III', 0),
	('a3ef661e-db90-41fd-9489-ac23061ab738', 'b7f53c53-9366-4eeb-b649-185aa7ea8cbc', 'B.', 'II', 0),
	('a3f2c7a5-1ed7-49f7-9f01-ff5d4873cf3a', '7f2e75fb-8317-42a2-9cc8-151d9b4aed7b', 'C.', 'III', 0),
	('a4c0002f-94a7-45a6-acfb-cc2e048b72ad', 'f2b70421-e3e3-424a-b648-6a67d69ebb42', 'D.', 'I ,II', 0),
	('a4f9e071-c6b6-4be4-a048-98e87c3cb910', '93da65c1-2727-4e41-9458-307d7b755952', 'C.', 'III', 0),
	('a53d375d-95b3-4b07-aa9f-e0c4d3565038', 'f8724139-bc5f-42ee-a5e4-529e9c52fac3', 'C.', 'III', 0),
	('a5b5df61-28ca-4c9b-abaa-089b90479e6c', '52a8bf33-5497-40a7-81c1-bee3cb7e40fc', 'A.', 'I', 0),
	('a604745b-ac29-4c46-842f-f2c882126f95', '9a300d97-46f5-4602-b596-a12bac743438', 'A.', 'I', 0),
	('a655d534-af10-46ef-a172-4fb00f1dc585', '75d29ffd-b2ae-4699-b321-c4e984ea10c9', 'C.', 'III', 0),
	('a69748c8-d880-4111-b409-e97929f2665c', '5da27581-faa9-4b7f-b581-4cc75b0baa64', 'A.', 'I', 0),
	('a6981d12-ce00-4a1f-9195-7f5271199c2c', '304f83a8-cba1-47be-9607-8eab8790247c', 'B.', 'II', 0),
	('a6ac8e70-76f2-4404-b614-6e0a3397ab16', '09c87ce6-a020-4360-89f3-80f7dd1c7023', 'A.', 'I', 0),
	('a6b38475-b8c0-4ee0-b37f-579d4fd1a4e4', '81729de6-4a3d-48dc-92aa-d10fc091b5bb', 'D.', 'I ,II', 0),
	('a70eb104-c234-4541-a8ed-07b31c83e176', 'e2039756-a477-4b6d-a373-b6e79cd716f3', 'B.', 'II', 0),
	('a75d552c-22a4-44d7-97a5-06bfa51b4884', 'ed04715b-82e1-4970-9d6d-0a728694f179', 'B.', 'II', 0),
	('a7ef1b6e-2ff6-4860-9e9a-ece94a0660f5', '150e7c35-c8f4-4cf6-891a-077d66f183ce', 'B.', 'II', 0),
	('a90ad038-0ced-42b2-841f-8e26b4ccee9e', '687c1aed-5f3c-4f7b-9652-7d48da19087c', 'C.', 'III', 0),
	('a96fadfc-e782-4659-b854-47b42146d76b', '9c359ff6-e75e-4b93-8e19-e7edcc0768f7', 'D.', 'I ,II', 0),
	('a9710aa1-4294-482a-8e75-fb2bcd6a9bdf', '7c1d76d1-c517-4626-8ad6-0936394db1ab', 'B.', 'II', 0),
	('a9777d27-8b63-4be3-976a-1b37ecf9eb1a', '01998e86-f219-4857-b5de-a9cb632f9d86', 'C.', 'III', 0),
	('a9dc3084-f215-4e35-99be-18ddea687d78', 'ec68c3ce-d04a-4e6b-bb9f-a1ce740b2f10', 'B.', 'II', 0),
	('aa2f0b99-87f1-48b7-a39f-831b8fc6890d', '6ea9b30c-c1d1-4462-b6d2-4e242f403c18', 'A.', 'I', 0),
	('aa60e218-772d-4715-b2e4-515a7aac7406', '8346e346-7a4f-49b8-906d-d251b27cff89', 'A.', 'I', 0),
	('aa6948c3-5c53-46e7-aa68-8a68add12997', '433e47f2-3dad-4870-bb50-5e31d00db35e', 'B.', 'II', 0),
	('aafe2886-7cf5-43bd-937e-fd444f56f7e5', '1d42d416-c53b-4628-bf25-67950ed41db1', 'A.', 'I', 0),
	('ab4f627a-fbd3-4cef-a67c-66908cc493e5', 'c273b422-2c33-4bee-8b06-83f2afb264d5', 'B.', 'II', 0),
	('ab8dc00a-8ae3-437f-a288-ba4eef49f1bb', '51caf71f-f200-4e2b-b906-c3fda8cf6410', 'A.', 'I', 0),
	('abe2bed2-23d4-4a9e-aa75-7e4df106af98', '8f36e0f1-b29b-4901-91d8-727821190ca9', 'B.', 'II', 0),
	('ac2c29a6-52d6-421e-a217-f06b8c5d9119', '5eb1afc0-81ce-4ed4-bc3e-ca5ba5407ea6', 'C.', 'III', 0),
	('ac39786d-cb66-49ac-8d71-29f1d77e94ec', 'eda16afc-7e3e-4d9f-a1b9-0e108e8ed95d', 'D.', 'I ,II', 0),
	('accec718-56ae-46aa-ba50-698609b963a6', '2a11e28c-422a-4290-b04a-eb7f25d09619', 'B.', 'II', 0),
	('ad8d0036-745c-4753-b7ef-2dd61a66d384', '77e0ac93-6916-4681-bfe2-05e5d5c167c0', 'B.', 'II', 0),
	('ae856fd1-f241-4157-af91-b94835bf8e43', '65138538-b2c0-410e-9501-d4a617c38a45', 'B.', 'II', 0),
	('aed23f2b-d156-4e07-b548-11ccbe55e57d', '6ea9b30c-c1d1-4462-b6d2-4e242f403c18', 'D.', 'I ,II', 0),
	('afb9195f-9bd2-4084-ab5d-0fe840d5f395', '46281f6f-d8ed-4188-9880-c43fb06070c3', 'C.', 'III', 0),
	('b05f57b3-a6be-4d9e-838a-3eaf2bef6da6', '2e0cf3f5-1067-4bcb-b2a1-7bdd49018347', 'B.', 'II', 0),
	('b0dc74ec-d4ef-4a2e-9328-fdf60337b8cf', '7c14e572-e576-4b08-b684-7d78228261eb', 'C.', 'III', 0),
	('b130f985-c982-49de-9130-fdc0257a1a79', '433e47f2-3dad-4870-bb50-5e31d00db35e', 'D.', 'I ,II', 0),
	('b14ed1d5-145f-4655-b36e-ace7006f4ff0', '0f2e1b91-7126-4c81-b72a-fa13298cac02', 'A.', 'I', 0),
	('b23d863e-6fc0-4cd8-86dd-a1d9d8f41da6', '0faa82e8-8c1e-4f44-9093-0515efb08a72', 'D.', 'I ,II', 0),
	('b27243d3-426e-4a41-82cc-b612ccfcc107', '42c4334c-11bf-4a3f-9a4c-4b568a2ed885', 'B.', 'II', 0),
	('b2ad62ce-a7b1-4004-82ef-ced2ccf2e03a', '7767f523-970b-468a-919d-bce865255dab', 'D.', 'I ,II', 0),
	('b2c4dff0-c3fc-4ae6-be65-a27546370892', 'cd1baeff-5dd0-4da4-8fb4-852b05720d2d', 'B.', 'II', 0),
	('b2fe176e-8662-4877-b2f9-1fdb8eeb56da', 'dce6ea7f-b67f-450b-b4c1-41f03ab2ea1a', 'B.', 'II', 0),
	('b3b845b4-fcbc-4d3f-a7b8-ad07f2de3deb', '01998e86-f219-4857-b5de-a9cb632f9d86', 'B.', 'II', 0),
	('b3d6078e-b4d7-410c-88d5-e5b0ca46b5bf', 'acfe0b1d-43b7-4eee-80c4-2293a743f521', 'D.', 'I ,II', 0),
	('b42001ab-63bb-4f00-adb3-ba9cdbc5176f', '985a496f-8b21-4942-bb44-3081f8463f39', 'B.', 'II', 0),
	('b4227f21-b1df-4f94-abcd-2414a3031018', '38cfc021-6650-4f3d-90c2-063af3a1e9ad', 'A.', 'I', 0),
	('b52771c7-cfdf-497c-9fba-83fc7179f1fc', '77e0ac93-6916-4681-bfe2-05e5d5c167c0', 'D.', 'I ,II', 0),
	('b54e7392-bc79-4cd0-99b0-9bab0634f9e0', '7c1d76d1-c517-4626-8ad6-0936394db1ab', 'D.', 'I ,II', 0),
	('b5e3c3fa-d310-4ee0-a7e3-15080a72b0ad', '09c87ce6-a020-4360-89f3-80f7dd1c7023', 'C.', 'III', 0),
	('b74e47af-e986-4ce6-aee1-32d1f56a04dc', '9ad10de1-252c-4c56-9808-9891c0cd9f25', 'C.', 'III', 0),
	('b79bee20-04ae-4b24-9331-6fbf7758d540', '8346e346-7a4f-49b8-906d-d251b27cff89', 'B.', 'II', 0),
	('b819db91-1b2b-4ffc-9d7d-ebb1a4664d2e', '79b90d46-c78b-4266-9ac8-ac7dec393c3a', 'C.', 'III', 0),
	('b8954162-51bc-4134-b40b-8daf93cee512', '19ffb9d7-5872-4c8f-8faf-351608f6156b', 'B.', 'II', 0),
	('b8f48c5c-b666-4901-b498-9d07e0a70d17', '1e2e5678-a96f-4884-b67e-116602c9de95', 'C.', 'III', 0),
	('b9026364-2de0-4f2c-946c-da0216a963a8', '9ad10de1-252c-4c56-9808-9891c0cd9f25', 'A.', 'I', 0),
	('b9787697-e96b-4e6e-bc65-4e8f74a6537e', '2e0cf3f5-1067-4bcb-b2a1-7bdd49018347', 'C.', 'III', 0),
	('b9c07060-d05f-43e3-a279-f7ba5174e511', '134448e5-d8af-44db-b6b1-e8e58b8d8472', 'A.', 'I', 0),
	('bc01668b-abd2-40c9-9d69-ab73b9043abf', '134448e5-d8af-44db-b6b1-e8e58b8d8472', 'B.', 'II', 0),
	('bc0f9e9f-cb89-4071-bc8b-9e49d2a90e9d', '4d30a5fa-0493-40bd-b7b7-7c8f5ed87710', 'C.', 'III', 0),
	('bce23622-9af4-442d-a3ee-fd60e1803651', '6ea9b30c-c1d1-4462-b6d2-4e242f403c18', 'B.', 'II', 0),
	('bd509bcd-c15d-414d-aca7-655266f75393', '5433c316-9855-4bca-867d-0d0fb3c2d76b', 'C.', 'III', 0),
	('bdb5e3ed-033f-4bbe-b45e-a73d90adc26e', '7dabd62a-df09-4796-b076-bd3b64e0625d', 'D.', 'I ,II', 0),
	('be058f4a-8ebe-4ee1-bd35-273b0cb20228', '5f9db099-8db7-4996-b1ae-e1aa78c7f739', 'D.', 'I ,II', 0),
	('be6993bd-10b9-4a2a-bee9-840b48ba547e', '1d42d416-c53b-4628-bf25-67950ed41db1', 'B.', 'II', 0),
	('c0a9522b-64a6-4397-9ac3-032b6ff8aa92', '2e22feed-ffd1-468d-a326-8d74cf40e534', 'B.', 'II', 0),
	('c3c3f008-1f11-4b0f-99e7-453d8b90f5b8', '406cc5eb-a813-4629-a289-0a0c943f7ddd', 'A.', 'I', 0),
	('c4611f5d-839e-4fee-957f-18dfacfab22e', '2e22feed-ffd1-468d-a326-8d74cf40e534', 'A.', 'I', 0),
	('c47812f2-3657-4fba-bbdf-eed6c6b0e17f', 'a06d72cb-b4de-4d2c-9cc9-f094e23c4ecb', 'B.', 'II', 0),
	('c5780de5-2107-44b8-938a-395813f6d135', '1cc60090-dcba-4d6a-94c7-c837d37d589c', 'A.', 'I', 0),
	('c5ce9ecb-d233-4838-95f9-bc04ebf97a91', '2a9425e6-0f95-4d62-9953-1541903e6b65', 'D.', 'I ,II', 0),
	('c7af4409-b0f4-49fc-9da6-0acd921be00c', 'cc70ab11-5828-4f4a-a868-212f81923e0e', 'C.', 'III', 0),
	('c7b56084-7763-496d-bcaf-09f4673cd8eb', '71dab035-67e4-4314-9af8-9f41b3937178', 'C.', 'III', 0),
	('c8e302a4-65e2-4fd1-9a4f-f570b57dfffd', '3ed4acba-f1e5-4478-afcc-62aa64084aae', 'C.', 'III', 0),
	('ca716316-f95a-4151-9444-2f0f0701d761', 'bf05ccc8-4a57-415d-b9e4-300ce35844a0', 'D.', 'I ,II', 0),
	('caec1fc2-a0d9-4487-bbf6-481658844750', '63c9241c-90d7-4d76-bd88-31afb298192a', 'A.', 'I', 0),
	('cb7e272b-a4ee-4b20-a6e6-cc9b90e0baae', '5f9db099-8db7-4996-b1ae-e1aa78c7f739', 'A.', 'I', 0),
	('ccf9ea1d-1388-4651-b4bb-ccde987c9b30', 'eda16afc-7e3e-4d9f-a1b9-0e108e8ed95d', 'A.', 'I', 0),
	('cd438b70-0208-4876-a018-cc6f03f01f18', '75d29ffd-b2ae-4699-b321-c4e984ea10c9', 'D.', 'I ,II', 0),
	('cd706977-1801-4ba8-a411-58134df086c4', '687c1aed-5f3c-4f7b-9652-7d48da19087c', 'B.', 'II', 0),
	('cee05e1c-72a1-497e-9134-9599e27633cc', '4a9dfe9d-3588-4241-8adb-a626d9f4d7e7', 'D.', 'I ,II', 0),
	('cee8a374-dbf8-4e27-8455-f1631fc27b99', '79b90d46-c78b-4266-9ac8-ac7dec393c3a', 'D.', 'I ,II', 0),
	('cf3fde90-09fd-4833-80a4-6803be45564f', '46abb62a-0b36-4896-bb3b-97fdf316376b', 'A.', 'I', 0),
	('cf405731-6ca3-4a0f-b338-70939c8d8c49', '9df344f3-f24a-446e-97e0-bf44fa77a7f1', 'B.', 'II', 0),
	('cf4e8c93-79d4-40e5-b962-14c28473b6ba', '771aaaf4-2ca7-430c-8f83-560743298a5a', 'A.', 'I', 0),
	('cf76ab67-ea14-40f6-a6a7-1327f27743e3', '42c4334c-11bf-4a3f-9a4c-4b568a2ed885', 'A.', 'I', 0),
	('d00ec3fe-fda9-4500-ad99-ab4b254a9615', '771aaaf4-2ca7-430c-8f83-560743298a5a', 'B.', 'II', 0),
	('d1271cbf-64a3-4c15-bd85-6da2ea11baae', 'eb30b0af-7aaf-4de0-aea3-064995e1e900', 'B.', 'II', 0),
	('d181f488-4c5f-49de-b9ad-6e63b9cf2a62', 'ac8df912-17c0-419c-a3ba-0ce660189874', 'D.', 'I ,II', 0),
	('d2e3614e-79f3-46b7-96cc-f30f19516633', '2e0cf3f5-1067-4bcb-b2a1-7bdd49018347', 'A.', 'I', 0),
	('d3036641-7add-4553-9595-1864c2c2190e', 'e2039756-a477-4b6d-a373-b6e79cd716f3', 'C.', 'III', 0),
	('d3a761bd-29d6-47fc-8705-b873eead44fe', '1febe6b6-97d3-41e1-813a-fd18df937108', 'A.', 'I', 0),
	('d4bdfb75-371e-4d68-973a-fb61360ad5b4', '1febe6b6-97d3-41e1-813a-fd18df937108', 'D.', 'I ,II', 0),
	('d5103a6a-4c1e-4fd5-9002-c9d32270ec2a', '7ab6dfd8-2b3e-40b1-a904-317fd9af3793', 'B.', 'II', 0),
	('d52644d0-eead-4fc8-b64a-c56fc0623ca4', '5f9db099-8db7-4996-b1ae-e1aa78c7f739', 'C.', 'III', 0),
	('d54ec606-37dc-460a-ab0c-e82d23aef236', '3ed4acba-f1e5-4478-afcc-62aa64084aae', 'A.', 'I', 0),
	('d57534e1-7590-47a9-8be2-56dd5245b5be', '00b0c46b-59d9-4a69-b539-08810a294c3c', 'D.', 'I ,II', 0),
	('d58fde49-8c4b-47d0-8d57-5eac7392520f', '42c4334c-11bf-4a3f-9a4c-4b568a2ed885', 'D.', 'I ,II', 0),
	('d6e9f38b-703c-4709-9f6e-dff9d7fbb367', '433e47f2-3dad-4870-bb50-5e31d00db35e', 'C.', 'III', 0),
	('d70cbd78-6ad4-4d79-976b-99e1cf8744e1', '2e22feed-ffd1-468d-a326-8d74cf40e534', 'D.', 'I ,II', 0),
	('d772a6d0-2b5f-4c61-af42-68280ddc05ca', '52a8bf33-5497-40a7-81c1-bee3cb7e40fc', 'B.', 'II', 0),
	('d7987982-42d5-4d4e-934b-c7b9be2326a0', '406cc5eb-a813-4629-a289-0a0c943f7ddd', 'B.', 'II', 0),
	('d9a2938b-7c50-4bc5-84fe-c26fc9ee15d1', '5eb1afc0-81ce-4ed4-bc3e-ca5ba5407ea6', 'B.', 'II', 0),
	('d9ab62ec-abcd-4b1e-81ab-64c909eaf26d', '5433c316-9855-4bca-867d-0d0fb3c2d76b', 'A.', 'I', 0),
	('da3c0158-1926-4948-ab89-56bb45e617e5', '5f9db099-8db7-4996-b1ae-e1aa78c7f739', 'B.', 'II', 0),
	('dac78c1c-0c29-4faf-9423-4092959d9ac1', 'ec68c3ce-d04a-4e6b-bb9f-a1ce740b2f10', 'C.', 'III', 0),
	('db8774bc-7f21-4b4c-932d-afd71ea2c7fe', '7f2e75fb-8317-42a2-9cc8-151d9b4aed7b', 'A.', 'I', 0),
	('dc12a3ed-33e3-4c94-82de-f21da6538dca', '81729de6-4a3d-48dc-92aa-d10fc091b5bb', 'B.', 'II', 0),
	('dc349fc8-2fc8-4488-acaa-2252a5fd9c7e', 'cc70ab11-5828-4f4a-a868-212f81923e0e', 'B.', 'II', 0),
	('dc3867ed-7de3-4afb-ab6b-a00c3444081f', 'c52d727f-c1b5-446c-b76a-703d40be1a1e', 'A.', 'I', 0),
	('dc4f042e-cd26-4413-a473-e109f6b37592', '9a300d97-46f5-4602-b596-a12bac743438', 'C.', 'III', 0),
	('dce3a018-db6a-491a-969f-7cd92693e707', '1cc60090-dcba-4d6a-94c7-c837d37d589c', 'C.', 'III', 0),
	('dcef1f15-7ad5-45a5-8237-feaa414eb187', '96b12a7f-65cb-46b1-8490-3c6562f42f07', 'B.', 'II', 0),
	('dd2217ee-e6b3-44f9-8e89-4aee91c7d876', 'e59c0f95-8510-4304-b241-07a51b44c586', 'B.', 'II', 0),
	('de51e420-1260-478a-8c52-cc549d0626f4', 'f7c065a4-b618-4570-abf2-9c7aebc1691e', 'D.', 'I ,II', 0),
	('ded996a9-019e-4e49-9ca6-ad4502f49648', 'fea9e822-65c6-4d03-954a-fe40c9f3c562', 'B.', 'II', 0),
	('e07fff1c-a035-4614-874c-bd7cab92b8af', '09c87ce6-a020-4360-89f3-80f7dd1c7023', 'D.', 'I ,II', 0),
	('e1165b79-3903-4509-8465-962c6fc07b91', '7c1d76d1-c517-4626-8ad6-0936394db1ab', 'C.', 'III', 0),
	('e1e08dad-c1ec-4396-af7f-f466a73418af', '687c1aed-5f3c-4f7b-9652-7d48da19087c', 'D.', 'I ,II', 0),
	('e2318f4f-3f4c-4d93-8b12-e174feb2cb64', '8aeaae33-6dbb-4f35-9f6f-19995edb9973', 'B.', 'II', 0),
	('e2eb3498-bb6f-4628-acdc-cf6e04ec95f9', '5eb1afc0-81ce-4ed4-bc3e-ca5ba5407ea6', 'D.', 'I ,II', 0),
	('e3ae0ce6-dbc0-4685-bf7f-142d5f09fa75', '5a65f597-5b2b-42b8-bc24-d80207f23dac', 'D.', 'I ,II', 0),
	('e495d5c8-53f2-4987-ae08-051b77b99e79', '24f5f940-566a-4b79-bfcb-3120f52e192f', 'C.', 'III', 0),
	('e4b55f90-c869-4f8e-89ed-16f6286426f0', 'c273b422-2c33-4bee-8b06-83f2afb264d5', 'D.', 'I ,II', 0),
	('e53c4913-9828-474f-8952-944272a88bc5', 'a5de2a9c-77ab-4e22-8019-1a4ff9989d0f', 'A.', 'I', 0),
	('e550affd-ef05-4bbe-9fdf-56365dc375d1', '59bd6c79-9316-4ace-aa87-ab94f3e0d4ab', 'C.', 'III', 0),
	('e5723fc6-f768-4c17-8cd1-23ae59c076a5', '208cca4c-2959-41e8-90f0-52f2c7401edf', 'C.', 'III', 0),
	('e58572c2-2638-43b6-a3db-f69f49bb66a2', '59bd6c79-9316-4ace-aa87-ab94f3e0d4ab', 'A.', 'I', 0),
	('e585e4c4-0f21-4203-831a-5c2a58333aa5', '2e0cf3f5-1067-4bcb-b2a1-7bdd49018347', 'D.', 'I ,II', 0),
	('e602269e-3b14-46b8-9deb-0f95da1b5e8b', 'c273b422-2c33-4bee-8b06-83f2afb264d5', 'C.', 'III', 0),
	('e6c9b520-b01d-4d02-9a1e-25f768c0b1b1', '9a300d97-46f5-4602-b596-a12bac743438', 'D.', 'I ,II', 0),
	('e7893ea6-1968-48f2-b10b-d147f49cc97d', '41746653-b4c7-4342-9161-6bd35eb0c701', 'D.', 'I ,II', 0),
	('e8383746-5c62-40c0-b2cd-dc0b5bc221b3', '59bd6c79-9316-4ace-aa87-ab94f3e0d4ab', 'B.', 'II', 0),
	('e8b7d393-02eb-4422-835f-2c72c36a4cdb', '208cca4c-2959-41e8-90f0-52f2c7401edf', 'A.', 'I', 0),
	('e90ab6ec-b15d-4d90-a760-bedc746ec057', '8aeaae33-6dbb-4f35-9f6f-19995edb9973', 'D.', 'I ,II', 0),
	('e94cb7d2-1799-4cca-bda0-7165a9161681', '2a9425e6-0f95-4d62-9953-1541903e6b65', 'A.', 'I', 0),
	('e9a221bd-d8c2-47df-b52e-db63039cf8c6', '406cc5eb-a813-4629-a289-0a0c943f7ddd', 'C.', 'III', 0),
	('e9b5c593-c7d2-48bd-a5d2-fa131b092e4a', 'b7f53c53-9366-4eeb-b649-185aa7ea8cbc', 'A.', 'I', 0),
	('ea3cc323-6b9f-4940-b099-331dcfa65926', '109f5113-f222-457e-83f6-ee6bf33da5a1', 'C.', 'III', 0),
	('ea4bdf9d-5882-4289-93f6-53c55809b9d8', 'bf05ccc8-4a57-415d-b9e4-300ce35844a0', 'B.', 'II', 0),
	('eacd56aa-c4bc-4d40-ad64-f0e921b649e4', '65138538-b2c0-410e-9501-d4a617c38a45', 'C.', 'III', 0),
	('eb019093-b139-4ed8-8597-0114bbd6034b', '2a11e28c-422a-4290-b04a-eb7f25d09619', 'D.', 'I ,II', 0),
	('ec8680e7-875f-44c8-95e5-650b84a0658a', '26a50f07-073a-44ce-b1bc-7decca324132', 'B.', 'II', 0),
	('edf2897a-15b0-435f-9ff3-8d0478efd43f', 'fea9e822-65c6-4d03-954a-fe40c9f3c562', 'D.', 'I ,II', 0),
	('edfb181d-9335-4b1b-a0f4-2b430cf957a0', '8bbbe7a3-e590-4e96-af01-14ed12e4c238', 'B.', 'II', 0),
	('ee23d92a-f876-483f-9b62-03ab8aa0139f', '7767f523-970b-468a-919d-bce865255dab', 'A.', 'I', 0),
	('ef1eaea0-ca46-4bf2-af5f-c9d2ea1d657e', '81729de6-4a3d-48dc-92aa-d10fc091b5bb', 'C.', 'III', 0),
	('efd291ea-e9e8-46ee-ac8e-4c66bc5f3db5', 'a06d72cb-b4de-4d2c-9cc9-f094e23c4ecb', 'A.', 'I', 0),
	('f0170911-6752-4e57-8ac6-d455190d163c', 'cd1baeff-5dd0-4da4-8fb4-852b05720d2d', 'A.', 'I', 0),
	('f06fc145-86e7-433a-91bf-8d7f9bf57d2a', 'c273b422-2c33-4bee-8b06-83f2afb264d5', 'A.', 'I', 0),
	('f285c3e5-e043-4b0a-b5ef-80bd611bf1ee', '8346e346-7a4f-49b8-906d-d251b27cff89', 'C.', 'III', 0),
	('f2b26393-08ea-43df-8ece-a1d2bf49c0e1', '71dab035-67e4-4314-9af8-9f41b3937178', 'D.', 'I ,II', 0),
	('f2fd7ae5-fd76-4b98-9800-5c40f950d808', 'fea9e822-65c6-4d03-954a-fe40c9f3c562', 'C.', 'III', 0),
	('f4a8a51d-6925-4df3-8a19-71934a4e1570', 'a9b6938e-5937-4878-89e7-dc9c05fb72cb', 'D.', 'I ,II', 0),
	('f4c35c7a-3f39-49f5-b6e8-a762e4ce4c8e', 'a06d72cb-b4de-4d2c-9cc9-f094e23c4ecb', 'C.', 'III', 0),
	('f5f6e006-1800-4f27-bb46-47eff0bb6c9c', '79b90d46-c78b-4266-9ac8-ac7dec393c3a', 'B.', 'II', 0),
	('f65b9c56-2194-4bd2-97a7-2ec4ed54aaab', '51caf71f-f200-4e2b-b906-c3fda8cf6410', 'C.', 'III', 0),
	('f8557af7-2e77-4290-a859-04f998149360', 'ed04715b-82e1-4970-9d6d-0a728694f179', 'D.', 'I ,II', 0),
	('f8af13eb-00d7-41ff-8d98-b61e8a207193', '7ab6dfd8-2b3e-40b1-a904-317fd9af3793', 'C.', 'III', 0),
	('f92cd5cd-7d5f-4a10-bfe0-0b4a99512595', '0f41d883-b6dc-4f25-9b00-c47cb50a444a', 'B.', 'II', 0),
	('fa17fcb8-fc30-49a2-a22d-ee9df044acbb', 'e59c0f95-8510-4304-b241-07a51b44c586', 'D.', 'I ,II', 0),
	('fadb3dac-727a-4022-8468-d333ecf78f22', 'c3154d7b-b430-4fb7-95a2-4d3e6a30add7', 'B.', 'II', 0),
	('fbf2dd90-ab8e-402b-b0fb-346ac874fa5c', '304f83a8-cba1-47be-9607-8eab8790247c', 'A.', 'I', 0),
	('fc3815b9-35ba-4dca-b0fa-67a2b832b550', '24f5f940-566a-4b79-bfcb-3120f52e192f', 'A.', 'I', 0),
	('fe5e9f85-72d9-4cd0-a0d1-a7f92be81df4', '1d42d416-c53b-4628-bf25-67950ed41db1', 'D.', 'I ,II', 0),
	('fec31c56-1065-488a-9fca-9869bf1c6107', '75d29ffd-b2ae-4699-b321-c4e984ea10c9', 'A.', 'I', 0),
	('ff396805-67e3-4c43-a549-299bf7e96e6f', '9c359ff6-e75e-4b93-8e19-e7edcc0768f7', 'C.', 'III', 0),
	('ffabab48-e432-4542-a8df-25bbff478f16', '14bd098b-845f-4554-842e-d92851df7503', 'D.', 'I ,II', 0);
/*!40000 ALTER TABLE `questionbankansweroption` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentcourse
DROP TABLE IF EXISTS `studentcourse`;
CREATE TABLE IF NOT EXISTS `studentcourse` (
  `StudentCourseId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` char(36) NOT NULL,
  PRIMARY KEY (`StudentCourseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentcourse: ~1 rows (approximately)
/*!40000 ALTER TABLE `studentcourse` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentcourse` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentexam
DROP TABLE IF EXISTS `studentexam`;
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

-- Dumping data for table otsdb.studentexam: ~1 rows (approximately)
/*!40000 ALTER TABLE `studentexam` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentexam` ENABLE KEYS */;


-- Dumping structure for table otsdb.testitem
DROP TABLE IF EXISTS `testitem`;
CREATE TABLE IF NOT EXISTS `testitem` (
  `TestItemId` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `CourseId` char(36) NOT NULL,
  `Stimulus` longtext,
  `Stem` longtext,
  `StimulusFormating` longtext,
  `StemFormating` longtext,
  PRIMARY KEY (`TestItemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.testitem: ~0 rows (approximately)
/*!40000 ALTER TABLE `testitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `testitem` ENABLE KEYS */;


-- Dumping structure for table otsdb.testitemansweroption
DROP TABLE IF EXISTS `testitemansweroption`;
CREATE TABLE IF NOT EXISTS `testitemansweroption` (
  `AnswerOptionId` char(36) NOT NULL,
  `TestItemId` char(36) NOT NULL,
  `Label` varchar(255) DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`TestItemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.testitemansweroption: ~0 rows (approximately)
/*!40000 ALTER TABLE `testitemansweroption` DISABLE KEYS */;
/*!40000 ALTER TABLE `testitemansweroption` ENABLE KEYS */;


-- Dumping structure for table otsdb.testsheet
DROP TABLE IF EXISTS `testsheet`;
CREATE TABLE IF NOT EXISTS `testsheet` (
  `TestSheetId` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `CourseId` varchar(255) NOT NULL,
  `TestItemId` varchar(255) NOT NULL,
  PRIMARY KEY (`TestSheetId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.testsheet: ~1 rows (approximately)
/*!40000 ALTER TABLE `testsheet` DISABLE KEYS */;
/*!40000 ALTER TABLE `testsheet` ENABLE KEYS */;


-- Dumping structure for table otsdb.user
DROP TABLE IF EXISTS `user`;
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
DROP TABLE IF EXISTS `useraccount`;
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
DROP TABLE IF EXISTS `usertype`;
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
