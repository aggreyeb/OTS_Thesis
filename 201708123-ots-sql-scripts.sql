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

-- Dumping data for table otsdb.conceptschema: ~96 rows (approximately)
/*!40000 ALTER TABLE `conceptschema` DISABLE KEYS */;
REPLACE INTO `conceptschema` (`ConceptSchemaId`, `ConceptNodeId`, `RelationName`, `ConceptName`, `ActionName`, `AttributeName`, `AttributeValue`) VALUES
	('02fbfeaa-78f5-42b5-a9d1-b8cb1acb3fde', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'get'),
	('03951bd4-1905-4d1d-a42b-31d10e144b68', '7c7227a9-5de9-4da8-84b9-e55e5a3da8ff', 'is', 'stack', '', '', ''),
	('03b6c1c0-768d-421c-88f3-510e7915ecc3', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'Operation', 'resize'),
	('03fe0110-38b9-407e-94b3-6b7d502a1dbd', '6c290465-2698-416f-97af-b32a0e55f7c0', 'has', '', '', 'interface', 'list'),
	('0613296b-a6e3-45da-9701-91e2585efd69', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Representation', 'Matrix'),
	('066eb08b-4277-408a-8e1c-bb6a65603822', '1f7aaad9-97a0-4b4d-ab03-94a7e045199d', 'has', '', '', 'interface', 'UnOrdered Set (USet)'),
	('0780b1a5-4775-4086-a32d-ca144d3e72ac', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'is', '', '', 'Operation ', 'size'),
	('0ad315df-2367-4f13-8bd1-ecd3e5a164bd', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation ', 'size'),
	('112fbcd9-2631-4034-a024-aa67acf761c9', '8991c282-4cd3-4d16-860b-8207fd3b3930', 'has', '', '', 'interface', 'list'),
	('147904d5-7680-4dc9-8397-12148febc358', '39dac3b7-ed6c-4022-90be-14ff5abf5386', 'has', '', '', 'interface', 'list'),
	('164ec242-b470-4fec-b982-e7cb7b1ae356', '4d81b542-b521-4a44-8770-3a598d44a3ab', 'is', '', '', 'queue', ''),
	('182cf8b9-03f2-44be-83ec-bb12d9fa557f', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation ', 'set'),
	('1a758aee-e01e-4275-88f3-ed503b8cfff7', 'f60a1f69-1bc7-424c-a825-fcc60a062e0c', 'has', '', '', 'SkiplistSSet', 'interfeace'),
	('1b201418-8b75-4521-9d75-a7dc98d072eb', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'behaviour description', 'last-in first-out (LIFO)'),
	('1c390539-e4f3-4486-8389-70c1f9d9f66d', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'has', '', '', 'Operation', 'find'),
	('1e10f748-01d0-45c0-be51-426285e3c477', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Search Algorithm ', 'recursive'),
	('1e5560f8-8a37-408b-b96b-07ac75a4ff04', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'Application', 'reverse a word'),
	('201cb2ce-457a-4a0e-8c5c-8f6b5bc3a373', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'Application', 'Language processing'),
	('2367b2a1-a8f6-4759-b00c-7dcd259d8c7b', 'f60a1f69-1bc7-424c-a825-fcc60a062e0c', 'is', 'binary tree', '', '', ''),
	('24203bed-d035-4d67-bb14-45d5b2d4cc81', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Operations', 'inEdges'),
	('25c12e4e-cde9-4e28-8599-bc8ac45ad7b3', '79a8edb9-033a-439f-ab0b-6f4c2ba99c5d', 'has', '', '', 'interface', 'UnOrdered Set (USet)'),
	('2e1bfed2-2be4-461a-909e-1cc9d1b57864', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Sorting Algorithm', 'Quicksort'),
	('2fbc426d-3953-4bf0-b36c-889d017766da', '1deb9103-faf7-4c97-88c8-6c87d39220cd', 'has', '', '', 'Behaviour Description', 'describes the  implemented operations'),
	('30b68e20-d809-4b1d-a25c-965d38a1ed12', 'f26065ab-c471-4b7e-baf9-e3418d3d0b42', 'is', 'stack', '', '', ''),
	('351ab6d9-5b85-46bd-8c4f-8de396ba3ac4', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'is', 'stack', '', '', ''),
	('36bd99fe-1be4-4036-9e73-1f9529fb26fc', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'add'),
	('39b136ef-488a-472b-a35a-c48764077488', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit ', 'promoting  plug and play architecture'),
	('3cb37359-d9f5-49af-a059-eae2356a6cac', '1157e691-6173-447a-8bbd-c14f4dea2de8', 'has', '', '', 'interface', 'list'),
	('3f9735d5-74e2-4b22-9c82-49def9a90715', '1deb9103-faf7-4c97-88c8-6c87d39220cd', 'has', '', '', 'Behaviour Description', 'includes internal representative of data structure'),
	('4144a84a-8c5c-4dca-8356-d2687d43de4d', '07529ab2-029c-4f55-9377-9683990f5d76', 'has', '', '', 'Interface', 'SkiplistSSet'),
	('44c66afb-4e93-4fb0-9fe1-29b773029244', '8cc686b5-6bbb-452a-b8a9-0da8a259c9c8', 'can', 'linkedList-based', 'have', '', ''),
	('454d00ea-3a49-454e-af36-ac5fc418deef', '1f7aaad9-97a0-4b4d-ab03-94a7e045199d', 'is', 'hashtable', '', '', ''),
	('4751169c-fa55-4461-ad95-d2c77b105565', '7c7227a9-5de9-4da8-84b9-e55e5a3da8ff', 'is', '', '', 'stack', ''),
	('4b5e7498-af44-4ed0-99f6-ddb15050c76b', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Operation', 'addEdge'),
	('4d930f9c-3c32-4e24-b340-3a0dcb9625c6', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation', 'set'),
	('50c7367d-8d5d-4c70-8791-d88ab1898c26', '11fa4e02-0b2c-415d-a090-330c36c9dfb5', 'is', '', '', 'interface', 'SkiplistSSet'),
	('51d4c31a-d18f-4de9-a173-8637ef5d9ad0', '2bc31264-0128-4bac-854c-d465937660ee', 'is', '', '', 'Algorithm', 'depth first (DFA)'),
	('55dc73ae-762f-46de-bd9b-b40d650d4360', '79a8edb9-033a-439f-ab0b-6f4c2ba99c5d', 'has', '', '', 'Application', '?'),
	('588b214b-f5c2-4725-a9cd-52c34e2ee9e3', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'has', '', '', 'Operation', 'set'),
	('59e29b8d-565d-4b32-aabf-70ed90a686a7', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application ', 'object composition'),
	('5b9b9f2d-e3f5-469b-b7f2-f21395b797d1', '39dac3b7-ed6c-4022-90be-14ff5abf5386', 'is', 'stack', '', '', ''),
	('5c76d5b5-33c6-4e48-83b2-0e2b386556db', '1f7aaad9-97a0-4b4d-ab03-94a7e045199d', 'has', '', '', 'Application', '?'),
	('6cbce1e6-cf2f-47ee-9187-7f8f0e559e27', 'f9822255-10cb-456d-a387-2a8fc0a7c5db', 'is', 'stack', '', '', ''),
	('781f893a-7b74-49e1-a177-650553de15ca', '99ece626-36d8-420a-9cdb-fbe9578610bb', 'has', '', '', 'interface', 'SkiplistSSet'),
	('7ab57444-97a7-4e96-a0bc-8b34123b9298', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'remove'),
	('7c827b4a-0c49-47a3-b5c9-40617255339f', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Operation ', 'add'),
	('81fcfdb6-b046-453b-906f-43e94265dfe9', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Benefit', 'supporting design by contract'),
	('83c08554-eb44-4ffd-8e02-e48a7f0eed72', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'has', '', '', 'Operation', 'remove'),
	('84c52f5e-2477-41b3-aed8-fb21b2e05d2f', '79a8edb9-033a-439f-ab0b-6f4c2ba99c5d', 'is', 'hashtable', '', '', ''),
	('873ea4c9-c5ad-4f02-b37e-5479817e496f', '13707ad7-92e6-4741-b39a-42c1fb9a7ebc', 'is', '', '', 'interface', 'UnOrdered Set (USet)'),
	('8774ed5a-7399-445e-a379-c74104e014bc', '13f8e6c9-bf2e-49c5-8588-e1ca6df7bcfc', 'is', '', '', '', ''),
	('891920e0-7671-4ee1-8530-7bf27479b369', '10fb3da6-5240-49de-afcc-3e9de62bfc4c', 'has', '', '', 'interface', 'list'),
	('89390d1c-0239-43e3-bf00-fdff2db9dd8e', '1bfa0dd4-b09c-4066-beb7-92b586833551', 'has', '', '', 'Operation', 'size'),
	('8ba9e438-c90d-4855-b940-5ff7155979bf', '8fdcf4d4-4705-4d1b-8ecf-226871f16fa0', 'is', '', '', 'interface', 'SkiplistSSet'),
	('8d47f88f-2429-4122-b6ee-8e651efd3dec', '8cc686b5-6bbb-452a-b8a9-0da8a259c9c8', 'can', 'array-based', 'have ', '', ''),
	('8e4ea45f-bebe-40a0-8b21-9cac5d8efcc2', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation ', 'get'),
	('918ae32b-c6c6-4859-a67f-7a722dad3481', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'is', '', '', 'Application', 'Back/Forward on browsers'),
	('983911b8-0a14-4233-8103-f3cae3b5dd55', '3bb66b50-bedf-4b59-b5c1-545ea2453ca8', 'is', 'binary tree', '', '', ''),
	('9ecba866-7cbd-4f88-99e5-cf378efcd841', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Sorting Algorithm ', 'Merge-Sort'),
	('a3d761a6-32d6-451c-8cbf-406ab1008130', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation', 'find'),
	('a4a8c412-a097-45ed-873f-03964480df53', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'interface', 'list'),
	('a7ca1cd1-82cf-44a2-a5ec-29fdce2e0fc6', '3bb66b50-bedf-4b59-b5c1-545ea2453ca8', 'has', '', '', 'interface', 'SkiplistSSet'),
	('ad160ba3-7363-40a5-9bad-ca0758435075', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'Application', 'recursion'),
	('af19dcc0-6ac7-4a6e-b909-b8692551088c', '13f8e6c9-bf2e-49c5-8588-e1ca6df7bcfc', 'is', '', '', 'queue', ''),
	('b0d99432-55f1-4ca5-84e2-b311bce5f495', '1deb9103-faf7-4c97-88c8-6c87d39220cd', 'has', '', '', 'Behaviour Description', 'describe how data structure works'),
	('b30233a5-eee0-44a9-baea-52dc61f7e168', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Operation', 'outEdges'),
	('b407099b-a585-4b3b-b734-5e266485c149', '7c7227a9-5de9-4da8-84b9-e55e5a3da8ff', 'has', '', '', 'Interface', 'list'),
	('b5ff50dc-e4dc-407e-bcac-cdcf961e1e9d', '1deb9103-faf7-4c97-88c8-6c87d39220cd', 'has', '', '', 'Behaviour Description', 'defines algorithm for the operation'),
	('bc3bfc73-d522-4dcd-b64a-4aa60016b0af', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Representation', 'Collection of list'),
	('beae88a2-2072-46a6-8b05-fa4966afafc3', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour Description', 'can have multiple implementation'),
	('bf205564-3c8b-41b8-807e-ac226fd64bc6', '2bc31264-0128-4bac-854c-d465937660ee', 'is', '', '', 'Operation', 'find'),
	('c2ba7b1a-7e05-4b0b-babb-e9486fc9f748', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application ', 'Resolve multiple inheritance issue'),
	('c3e79973-8334-4f8f-8693-f9e30fb58b19', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Behaviour  Description', 'describes what the data structure does'),
	('c530e17f-c90f-433d-bd35-a6c2dd8b15e6', '10fb3da6-5240-49de-afcc-3e9de62bfc4c', 'is', 'stack', '', '', ''),
	('c6fb1aac-085b-485d-899d-166c38cc6a21', '016776ee-6b49-444b-8925-372f7af7d48c', 'is', '', '', 'interface', 'SkiplistSSet'),
	('c91b7048-a438-4c40-b784-ae80a26e68bd', '8da2f17c-acbe-46c5-b084-38a799c20030', 'is', '', '', 'Search algorithm', 'Depth-First'),
	('ca7b1ba4-357d-467c-b942-4cf1c4da42ee', 'c8bc683e-2b47-415f-892b-866e1a2f34e4', 'has', '', '', 'Application', 'An "undo" mechanism in text editors'),
	('cf57bf26-7283-4b86-9e1e-e3b0650e1b46', '4bc9ea99-42a9-4ed0-936d-81f65b1aa710', 'has', '', '', 'Behaviour Description ', 'first in, first out (FIFO)'),
	('d312fc57-b32e-4ec5-8dc4-4d12c5406a6b', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'has', '', '', 'Operation', 'get'),
	('d5002847-ad5a-45e2-81e0-374deef69128', 'f9822255-10cb-456d-a387-2a8fc0a7c5db', 'has', '', '', 'interface', 'list'),
	('d7fd2f94-bf86-46e9-9045-8f733ec7ca23', 'f9822255-10cb-456d-a387-2a8fc0a7c5db', 'is', '', '', 'interface', 'list'),
	('dacbca79-845c-4f4e-9dc1-d7626fb2ceb2', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Operation', 'removeEdge'),
	('e1d67cb4-17f6-4a77-b4a6-59386a9ec665', '8991c282-4cd3-4d16-860b-8207fd3b3930', 'is', 'stack', '', '', ''),
	('e633775a-43e4-4031-b773-2fa49548b55d', '1157e691-6173-447a-8bbd-c14f4dea2de8', 'is', 'stack', '', '', ''),
	('e67a7107-1a44-4598-98cc-0d319106a5bc', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Search algorithm', 'breadth-first'),
	('e6d5e305-797b-418a-9008-7fdfcb0e74cd', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'can', 'method signtatures', 'contain', '', ''),
	('e8152d26-5d5d-40f8-80ef-239bb952b461', '928fc2f8-c965-4e9f-a085-bd6b80f84af6', 'has', '', '', 'Application', 'Polymophism'),
	('f121a8a9-f995-4d6d-83bd-fbe0e9493e84', 'dd3a2b00-486e-495b-8538-13403f2d3356', 'has', '', '', 'Operation', 'add'),
	('f1231e50-ff49-43b5-aad4-009c01f3bccf', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Operation', 'hasEdge'),
	('f4b3d378-2cff-4519-97d9-17569febab98', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Operation', 'remove'),
	('f5fda740-ab81-4eb0-83c8-0090f0f41bd4', '8da2f17c-acbe-46c5-b084-38a799c20030', 'has', '', '', 'Application', 'Street networks'),
	('f9783cd7-665b-44af-aa98-f7d6be3e56b4', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation', 'add'),
	('fa907f6b-7575-40d0-b430-7a18820a254a', '8da2f17c-acbe-46c5-b084-38a799c20030', 'is', '', '', 'Application', 'computer networks'),
	('fdd4b035-f912-44bc-a2da-71539ab9c918', 'f26065ab-c471-4b7e-baf9-e3418d3d0b42', 'has', '', '', 'interface', 'list'),
	('fe2df887-11cf-4543-b6bf-900215e5eecf', '2bc31264-0128-4bac-854c-d465937660ee', 'has', '', '', 'Search Algorithm ', 'breath first (BFA)'),
	('ffd60ccf-eb6d-4303-a8a9-5f674b288e4a', 'cd967062-ef97-4750-b190-486643014fea', 'has', '', '', 'Operation', 'remove');
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
