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
  `RootId` char(36) DEFAULT NULL,
  `ParentId` char(36) DEFAULT NULL,
  PRIMARY KEY (`ConceptSchemaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.conceptschema: ~20 rows (approximately)
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
CREATE TABLE IF NOT EXISTS `course` (
  `Id` char(36) NOT NULL,
  `Number` varchar(30) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Createdby` int(6) unsigned NOT NULL,
  `Createdon` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.course: ~1 rows (approximately)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
REPLACE INTO `course` (`Id`, `Number`, `Name`, `Createdby`, `Createdon`) VALUES
	('181d408d-fcab-4b2c-993e-f852284e61f2', '', 'Test Course', 2, '2017-08-30 11:49:49');
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
/*!40000 ALTER TABLE `courseknowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.domainconcept
CREATE TABLE IF NOT EXISTS `domainconcept` (
  `DomainConceptId` char(36) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DomainConceptId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.domainconcept: ~0 rows (approximately)
/*!40000 ALTER TABLE `domainconcept` DISABLE KEYS */;
/*!40000 ALTER TABLE `domainconcept` ENABLE KEYS */;


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

-- Dumping data for table otsdb.knowledgemap: ~2 rows (approximately)
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
REPLACE INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('1656f736-27e2-4994-9470-ed7e22328d50', 'Interface', 'Common data structures interface and its implementations', '2017-08-29 10:24:24', '[{"id":"1656f736-27e2-4994-9470-ed7e22328d50","text":"Interface","nodes":[{"id":"4f8df074-2801-4d59-be73-981c50a1a747","name":"List","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","name":"Array-Based List","parentNodeId":"4f8df074-2801-4d59-be73-981c50a1a747","text":"Array-Based List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"c1070c20-73c4-4692-b8a4-0d57832629f0","name":"ArrayStack","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":3,"parentId":2},{"id":"8174a1ec-5099-4acd-9bf6-a5dca6b1f1fe","name":"ArrayQueue","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayQueue","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":4,"parentId":2},{"id":"4c735e89-b942-497b-b6f4-559cdb584024","name":"ArrayDeque","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"ArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":5,"parentId":2},{"id":"7d78d44d-2e82-4a9c-8176-5b380ffbe480","name":"DualArrayDeque","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"DualArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":6,"parentId":2},{"id":"a9f90b95-12a4-4a22-afb6-84406ffc82c0","name":"RootishArrayStack","parentNodeId":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","text":"RootishArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"69ab3943-dd5c-4865-b0b3-a1b555d4e557","parentname":"Array-Based List","nodeId":7,"parentId":2}],"data":{"RelationType":"Implements"},"parentid":"4f8df074-2801-4d59-be73-981c50a1a747","parentname":"List","nodeId":2,"parentId":1},{"id":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","name":"Linked List","parentNodeId":"4f8df074-2801-4d59-be73-981c50a1a747","text":"Linked List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"a528fd7b-ee4a-43f8-9ee0-cfad4d8ee3f6","name":"SLList (Singly-Linked List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"SLList (Singly-Linked List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":9,"parentId":8},{"id":"775ef5ed-21a0-433a-9f97-6b3965194521","name":"DLList (Doubly-Linked List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"DLList (Doubly-Linked List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":10,"parentId":8},{"id":"2330c2dc-a0c6-4ce9-b615-e9d15e7654ef","name":"SEList (Space-Efficient List)","parentNodeId":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","text":"SEList (Space-Efficient List)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"2e98c05c-9522-4792-b3fb-1e85f0f4aa87","parentname":"Linked List","nodeId":11,"parentId":8}],"data":{"RelationType":"Implements"},"parentid":"4f8df074-2801-4d59-be73-981c50a1a747","parentname":"List","nodeId":8,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":1,"parentId":0},{"id":"24a3cebf-fc4a-4bb0-946f-75225296a810","name":"USet","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"USet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","name":"HashTable","parentNodeId":"24a3cebf-fc4a-4bb0-946f-75225296a810","text":"HashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"18adc384-89d4-426c-b44f-c584a254bfdc","name":"ChainedHashTable","parentNodeId":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","text":"ChainedHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","parentname":"HashTable","nodeId":14,"parentId":13},{"id":"816a5cdc-edca-442b-bc20-151192c8b315","name":"LinearHashTable","parentNodeId":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","text":"LinearHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"147ea0e4-682b-4ae9-beca-a7837f9c27e4","parentname":"HashTable","nodeId":15,"parentId":13}],"data":{"RelationType":"Implements"},"parentid":"24a3cebf-fc4a-4bb0-946f-75225296a810","parentname":"USet","nodeId":13,"parentId":12}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":2,"parentId":0},{"id":"6c932620-3172-4728-ad1f-2818b610e541","name":"SSet","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"SSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"38469e8c-d26a-420b-9c01-b8d692c3b059","name":"SkipListSet","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"SkipListSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":17,"parentId":16},{"id":"c39729fe-2282-48d7-8c04-b93c76a78eb9","name":"Treap","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"Treap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":18,"parentId":16},{"id":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","name":"Binary Tree","parentNodeId":"6c932620-3172-4728-ad1f-2818b610e541","text":"Binary Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","name":"Binary Search Tree","parentNodeId":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","text":"Binary Search Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"024f57d0-80f0-41ca-9104-23a10f6af236","name":"Random Binary Search Tree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"Random Binary Search Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":21,"parentId":20},{"id":"a33283d5-eb44-4b3e-9de0-4fa25b33cc66","name":"ScapegoatTree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"ScapegoatTree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":22,"parentId":20},{"id":"acc513fb-3077-4eb1-a83a-7ce34dd43be3","name":"Read-Black Tree","parentNodeId":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","text":"Read-Black Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"993a6e79-7a0d-455e-b8bd-70b0309cfe5d","parentname":"Binary Search Tree","nodeId":23,"parentId":20}],"data":{"RelationType":"TypeOf"},"parentid":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","parentname":"Binary Tree","nodeId":20,"parentId":19},{"id":"f607abdf-4a97-4d7b-b003-2097549cea62","name":"Heap","parentNodeId":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","text":"Heap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"540ddcbf-4d2a-4339-a744-af7d4007735c","name":"BinaryHeap","parentNodeId":"f607abdf-4a97-4d7b-b003-2097549cea62","text":"BinaryHeap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f607abdf-4a97-4d7b-b003-2097549cea62","parentname":"Heap","nodeId":25,"parentId":24},{"id":"57effcf3-98a9-484f-864f-6c854c94caeb","name":"MeldableHeap","parentNodeId":"f607abdf-4a97-4d7b-b003-2097549cea62","text":"MeldableHeap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f607abdf-4a97-4d7b-b003-2097549cea62","parentname":"Heap","nodeId":26,"parentId":24}],"data":{"RelationType":"TypeOf"},"parentid":"fd99a229-9b9b-4773-a9c9-f1629f0a4957","parentname":"Binary Tree","nodeId":24,"parentId":19}],"data":{"RelationType":"Implements"},"parentid":"6c932620-3172-4728-ad1f-2818b610e541","parentname":"SSet","nodeId":19,"parentId":16}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":3,"parentId":0},{"id":"99f67694-f366-4be9-b921-a98ba7e675ec","name":"Graph","parentNodeId":"1656f736-27e2-4994-9470-ed7e22328d50","text":"Graph","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"6bf38507-6c13-4761-981b-f8d753786856","name":"AjacencyMatrix","parentNodeId":"99f67694-f366-4be9-b921-a98ba7e675ec","text":"AjacencyMatrix","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"99f67694-f366-4be9-b921-a98ba7e675ec","parentname":"Graph","nodeId":28,"parentId":27},{"id":"7ba64e1c-3dd8-4639-8a0c-0d05c4c9960f","name":"AdjacencyList","parentNodeId":"99f67694-f366-4be9-b921-a98ba7e675ec","text":"AdjacencyList","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"Implements"},"parentid":"99f67694-f366-4be9-b921-a98ba7e675ec","parentname":"Graph","nodeId":29,"parentId":27}],"data":{"RelationType":"TypeOf"},"parentid":"1656f736-27e2-4994-9470-ed7e22328d50","parentname":"Interface","nodeId":27,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0,"name":"Interface","parentname":""}]', NULL, 0, 0, 1, 2),
	('50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea', 'Performance Analysis ', 'Analyzing Correctness, Time Complexity and Space Complexity of data structures', '2017-08-30 09:32:35', '[{"id":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Performance Analysis ","nodes":[{"id":"2b2903fa-2fa0-4cec-b634-927586d1654d","name":"Correctness","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Correctness","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"0ef2c055-0856-44db-9572-c8c349f3c025","name":"Proof","parentNodeId":"2b2903fa-2fa0-4cec-b634-927586d1654d","text":"Proof","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"e79bfb97-569e-4f5c-a6d1-993c6a65ef23","name":"Construction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Construction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":3,"parentId":2},{"id":"99d85c48-ca9d-4183-969d-61ea9f936283","name":"Induction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Induction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":4,"parentId":2},{"id":"ebad7431-6d9d-4c4f-b4ec-762936d8aacd","name":"Contradiction","parentNodeId":"0ef2c055-0856-44db-9572-c8c349f3c025","text":"Contradiction","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"0ef2c055-0856-44db-9572-c8c349f3c025","parentname":"Proof","nodeId":5,"parentId":2}],"data":{"RelationType":"TypeOf"},"parentid":"2b2903fa-2fa0-4cec-b634-927586d1654d","parentname":"Correctness","nodeId":2,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":1,"parentId":0},{"id":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","name":"Time Complexity","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Time Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"fd7951b1-01eb-4201-ba76-398673993d83","name":"Worst-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Worst-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":7,"parentId":6},{"id":"a87df1f7-490d-4eb1-8c87-f2cec8cb14bf","name":"Average-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Average-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":8,"parentId":6},{"id":"169567d1-33a9-4426-a239-71e518b0ed46","name":"Best-Case Complexity","parentNodeId":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","text":"Best-Case Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"f469bfac-c3f2-4226-9ab9-e1b4176f5b7f","parentname":"Time Complexity","nodeId":9,"parentId":6}],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":6,"parentId":0},{"id":"41b5b8fd-f380-49a5-9f82-5deb9675ab2d","name":"Space Complexity","parentNodeId":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","text":"Space Complexity","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"50f1cd14-b1d6-4fc1-a6f7-8c9c4f9ecbea","parentname":"Performance Analysis ","nodeId":10,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2);
/*!40000 ALTER TABLE `knowledgemap` ENABLE KEYS */;


-- Dumping structure for table otsdb.questionbank
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

-- Dumping data for table otsdb.questionbank: ~102 rows (approximately)
/*!40000 ALTER TABLE `questionbank` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionbank` ENABLE KEYS */;


-- Dumping structure for table otsdb.questionbankansweroption
CREATE TABLE IF NOT EXISTS `questionbankansweroption` (
  `AnswerOptionId` char(36) NOT NULL,
  `TestItemId` char(36) NOT NULL,
  `Label` varchar(255) DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  `IsKey` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`AnswerOptionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.questionbankansweroption: ~408 rows (approximately)
/*!40000 ALTER TABLE `questionbankansweroption` DISABLE KEYS */;
/*!40000 ALTER TABLE `questionbankansweroption` ENABLE KEYS */;


-- Dumping structure for table otsdb.studentcourse
CREATE TABLE IF NOT EXISTS `studentcourse` (
  `StudentCourseId` char(36) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `CourseId` char(36) NOT NULL,
  PRIMARY KEY (`StudentCourseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.studentcourse: ~0 rows (approximately)
/*!40000 ALTER TABLE `studentcourse` DISABLE KEYS */;
REPLACE INTO `studentcourse` (`StudentCourseId`, `StudentId`, `CourseId`) VALUES
	('71901b7d-bac6-4bd3-bb1d-784269aaed7d', 70, '181d408d-fcab-4b2c-993e-f852284e61f2');
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


-- Dumping structure for table otsdb.testitem
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
CREATE TABLE IF NOT EXISTS `testsheet` (
  `TestSheetId` char(36) NOT NULL,
  `TestId` char(36) NOT NULL,
  `CourseId` varchar(255) NOT NULL,
  `TestItemId` varchar(255) NOT NULL,
  PRIMARY KEY (`TestSheetId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.testsheet: ~0 rows (approximately)
/*!40000 ALTER TABLE `testsheet` DISABLE KEYS */;
/*!40000 ALTER TABLE `testsheet` ENABLE KEYS */;


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
