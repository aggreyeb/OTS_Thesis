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

-- Dumping data for table otsdb.conceptschema: ~99 rows (approximately)
/*!40000 ALTER TABLE `conceptschema` DISABLE KEYS */;
REPLACE INTO `conceptschema` (`ConceptSchemaId`, `ConceptNodeId`, `RelationName`, `ConceptName`, `ActionName`, `AttributeName`, `AttributeValue`, `RootId`, `ParentId`) VALUES
	('0dd6b21c-841e-4566-8dde-c079f664499d', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description', 'provides specification about type of argument of suppoted opetions', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('1df4bd6a-ac39-4b4d-b5c5-0abbc6cc4ab7', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description', 'provides specification about return values of supported operations', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('37ae2297-c47f-416a-a80c-5b6a0d4c6c48', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description ', 'defines sopported operations', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('57a23bfa-081e-4bce-8c1f-e3a183765996', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit', 'promote plug and play software architeture', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('7670c66c-3c79-4e10-b85a-731f95ae50a1', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit', 'support dessign by contract', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('94b29861-1ed5-49a3-b3b4-4f29ea26a68a', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application', 'achieve polymophism in software design', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('9b024f13-d542-4c1a-ab7f-4506a687186d', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', ' Benefit ', 'allows dyanmic swapping of implementation', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('9f6e0833-944f-46dc-9a45-d72741703f7d', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', ' Benefit ', 'promote usability of softare component', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('c60ff382-d129-446c-a93d-0310fa177156', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour  Description', 'defines semantics or meaning of supported operations', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('c6d97887-7fcf-434a-8082-260012c39b35', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour  Description', 'can have multiple implementation', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('d677de6d-c869-44ac-8ad9-f59570e97ae7', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application', 'resolve multiple inheritance issues', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null'),
	('e4b96b03-3714-4746-8c01-54296d6afd21', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description', 'describes what data structure does', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'null');
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


-- Dumping structure for table otsdb.domainconcept
CREATE TABLE IF NOT EXISTS `domainconcept` (
  `DomainConceptId` char(36) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DomainConceptId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table otsdb.domainconcept: ~7 rows (approximately)
/*!40000 ALTER TABLE `domainconcept` DISABLE KEYS */;
REPLACE INTO `domainconcept` (`DomainConceptId`, `Name`, `Description`) VALUES
	('19CE8A5B-205E-497A-BAE6-A295BF1A0252', 'Application', NULL),
	('49629042-84BE-4253-86DC-14FA3105FABD', 'Implementation Specification', NULL),
	('78456222-5FC1-47AF-A36A-79879551AB9A', 'Algorithm', NULL),
	('7F019DFB-E29F-4127-837E-AF1A8E1D960D', 'Behaviour  Description', NULL),
	('93AD8252-099A-4E77-A637-D89B0161E6FE', 'Implementation', NULL),
	('9B78BCF4-DFEF-4C0D-8290-A1F204CF35A7', 'Interface Specification', NULL),
	('C410E3AA-309F-44D2-9342-01F6019E8F81', 'Interface', NULL),
	('C7D0823D-A861-4E6D-AC76-050A13C861C7', 'Software Solution', NULL),
	('C8A72B54-E1B7-4E3A-B12C-5A0B289E5866', 'Representation', NULL),
	('EDA64986-DC20-4AC0-BC51-04430BB817DE', 'Operation', NULL),
	('F18B03E1-E614-468A-BF14-5F5887F5D089', 'Benefit', NULL);
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

-- Dumping data for table otsdb.knowledgemap: ~4 rows (approximately)
/*!40000 ALTER TABLE `knowledgemap` DISABLE KEYS */;
REPLACE INTO `knowledgemap` (`KnowledgeMapId`, `Name`, `Description`, `CreateOn`, `Concepts`, `LastUpdated`, `IsPublic`, `IsImported`, `IsSharing`, `CreatedBy`) VALUES
	('1deb9103-faf7-4c97-88c8-6c87d39220cd', 'Data Structure Implementation', 'Data Structure Implementation concepts', '2017-08-23 14:10:15', '[{"id":"1deb9103-faf7-4c97-88c8-6c87d39220cd","text":"Data Structure Implementation","nodes":[{"id":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","name":"List Implementation","parentNodeId":"1deb9103-faf7-4c97-88c8-6c87d39220cd","text":"List Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"c8bc683e-2b47-415f-892b-866e1a2f34e4","name":"ArrayStack","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"ArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":2,"parentId":1},{"id":"10fb3da6-5240-49de-afcc-3e9de62bfc4c","name":"ArrayDeque","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"ArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":3,"parentId":1},{"id":"39dac3b7-ed6c-4022-90be-14ff5abf5386","name":"DualArrayDeque","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"DualArrayDeque","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":4,"parentId":1},{"id":"8991c282-4cd3-4d16-860b-8207fd3b3930","name":"RootishArrayStack","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"RootishArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":5,"parentId":1},{"id":"f9822255-10cb-456d-a387-2a8fc0a7c5db","name":"Doubly-Linked List (DLList)","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"Doubly-Linked List (DLList)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":6,"parentId":1},{"id":"1157e691-6173-447a-8bbd-c14f4dea2de8","name":"Singly-Linked List (SLList)","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"Singly-Linked List (SLList)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":7,"parentId":1},{"id":"7c7227a9-5de9-4da8-84b9-e55e5a3da8ff","name":"Space-Efficient Linked List (SEList)","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"Space-Efficient Linked List (SEList)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":8,"parentId":1},{"id":"f26065ab-c471-4b7e-baf9-e3418d3d0b42","name":"RoottishArrayStack","parentNodeId":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","text":"RoottishArrayStack","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"8cc686b5-6bbb-452a-b8a9-0da8a259c9c8","parentname":"List Implementation","nodeId":9,"parentId":1}],"data":{"RelationType":"TypeOf"},"parentid":"1deb9103-faf7-4c97-88c8-6c87d39220cd","parentname":"Data Structure Implementation","nodeId":1,"parentId":0},{"id":"13707ad7-92e6-4741-b39a-42c1fb9a7ebc","name":"UnOrdered Set (USet) Implementation ","parentNodeId":"1deb9103-faf7-4c97-88c8-6c87d39220cd","text":"UnOrdered Set (USet) Implementation ","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"79a8edb9-033a-439f-ab0b-6f4c2ba99c5d","name":"ChainedHashTable","parentNodeId":"13707ad7-92e6-4741-b39a-42c1fb9a7ebc","text":"ChainedHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"13707ad7-92e6-4741-b39a-42c1fb9a7ebc","parentname":"UnOrdered Set (USet) Implementation ","nodeId":10,"parentId":9},{"id":"1f7aaad9-97a0-4b4d-ab03-94a7e045199d","name":"LinearHashTable","parentNodeId":"13707ad7-92e6-4741-b39a-42c1fb9a7ebc","text":"LinearHashTable","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"13707ad7-92e6-4741-b39a-42c1fb9a7ebc","parentname":"UnOrdered Set (USet) Implementation ","nodeId":11,"parentId":9}],"data":{"RelationType":"TypeOf"},"parentid":"1deb9103-faf7-4c97-88c8-6c87d39220cd","parentname":"Data Structure Implementation","nodeId":2,"parentId":0},{"id":"077950f7-c595-4b4e-8853-679f904eb152","name":"Sorted List (SSet) Implementation","parentNodeId":"1deb9103-faf7-4c97-88c8-6c87d39220cd","text":"Sorted List (SSet) Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"07529ab2-029c-4f55-9377-9683990f5d76","name":"SkiplistSSet","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"SkiplistSSet","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":13,"parentId":12},{"id":"016776ee-6b49-444b-8925-372f7af7d48c","name":"Treap","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"Treap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":14,"parentId":12},{"id":"f60a1f69-1bc7-424c-a825-fcc60a062e0c","name":"ScapegoatTree","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"ScapegoatTree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":15,"parentId":12},{"id":"3bb66b50-bedf-4b59-b5c1-545ea2453ca8","name":"RedBlackTree","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"RedBlackTree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":16,"parentId":12},{"id":"11fa4e02-0b2c-415d-a090-330c36c9dfb5","name":"BinaryTrie","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"BinaryTrie","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":17,"parentId":12},{"id":"8fdcf4d4-4705-4d1b-8ecf-226871f16fa0","name":"XFastTrie","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"XFastTrie","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":18,"parentId":12},{"id":"99ece626-36d8-420a-9cdb-fbe9578610bb","name":"YFastTrie","parentNodeId":"077950f7-c595-4b4e-8853-679f904eb152","text":"YFastTrie","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"077950f7-c595-4b4e-8853-679f904eb152","parentname":"Sorted List (SSet) Implementation","nodeId":19,"parentId":12}],"data":{"RelationType":"TypeOf"},"parentid":"1deb9103-faf7-4c97-88c8-6c87d39220cd","parentname":"Data Structure Implementation","nodeId":3,"parentId":0},{"id":"4bc9ea99-42a9-4ed0-936d-81f65b1aa710","name":"Priority Queue Implementation","parentNodeId":"1deb9103-faf7-4c97-88c8-6c87d39220cd","text":"Priority Queue Implementation","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[{"id":"4d81b542-b521-4a44-8770-3a598d44a3ab","name":"Binaryheap","parentNodeId":"4bc9ea99-42a9-4ed0-936d-81f65b1aa710","text":"Binaryheap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"4bc9ea99-42a9-4ed0-936d-81f65b1aa710","parentname":"Priority Queue Implementation","nodeId":21,"parentId":20},{"id":"13f8e6c9-bf2e-49c5-8588-e1ca6df7bcfc","name":"MeldableHeap","parentNodeId":"4bc9ea99-42a9-4ed0-936d-81f65b1aa710","text":"MeldableHeap","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"4bc9ea99-42a9-4ed0-936d-81f65b1aa710","parentname":"Priority Queue Implementation","nodeId":22,"parentId":20}],"data":{"RelationType":"TypeOf"},"parentid":"1deb9103-faf7-4c97-88c8-6c87d39220cd","parentname":"Data Structure Implementation","nodeId":20,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2),
	('8da2f17c-acbe-46c5-b084-38a799c20030', 'Graph', 'Graph Concepts', '2017-08-23 17:27:48', '', NULL, 0, 0, 1, 2),
	('928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'Data Structure Interface', 'Data Structure Interface', '2017-08-21 10:10:26', '[{"id":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"Data Structure Interface","nodes":[{"id":"1bfa0dd4-b09c-4066-beb7-92b586833551","name":"List","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"List","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":1,"parentId":0},{"id":"cd967062-ef97-4750-b190-486643014fea","name":"UnOrdered Set (USet)","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"UnOrdered Set (USet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":2,"parentId":0},{"id":"dd3a2b00-486e-495b-8538-13403f2d3356","name":"Sorted Set (SSet)","parentNodeId":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","text":"Sorted Set (SSet)","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"928fc2f8-c965-4e9f-a085-bd6b80f84af6","parentname":"Data Structure Interface","nodeId":3,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2),
	('a190f9bd-81f2-4dd1-a6f1-bddb560bb452', 'Binary Tree', 'Binary Tree Concepts', '2017-08-23 16:56:37', '[{"id":"a190f9bd-81f2-4dd1-a6f1-bddb560bb452","text":"Binary Tree","nodes":[{"id":"2bc31264-0128-4bac-854c-d465937660ee","name":"Binary Search Tree","parentNodeId":"a190f9bd-81f2-4dd1-a6f1-bddb560bb452","text":"Binary Search Tree","icon":"","selectedIcon":"","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":false},"tags":[],"nodes":[],"data":{"RelationType":"TypeOf"},"parentid":"a190f9bd-81f2-4dd1-a6f1-bddb560bb452","parentname":"Binary Tree","nodeId":1,"parentId":0}],"icon":"","selectedIcon":"-","color":"#000000","backColor":"#FFFFFF","href":"","selectable":true,"state":{"checked":false,"disabled":false,"expanded":true,"selected":true},"nodeId":0}]', NULL, 0, 0, 1, 2);
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
