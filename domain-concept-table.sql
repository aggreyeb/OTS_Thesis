CREATE TABLE IF NOT EXISTS `DomainConcept` (
  `DomainConceptId` char(36) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  
  PRIMARY KEY (`DomainConceptId`)
) ;


insert into DomainConcept(DomainConceptId,Name) Values('19CE8A5B-205E-497A-BAE6-A295BF1A0252','Application');
insert into DomainConcept(DomainConceptId,Name) Values('78456222-5FC1-47AF-A36A-79879551AB9A','Algorithm');
insert into DomainConcept(DomainConceptId,Name) Values('7F019DFB-E29F-4127-837E-AF1A8E1D960D','Behaviour  Description');
insert into DomainConcept(DomainConceptId,Name) Values('F18B03E1-E614-468A-BF14-5F5887F5D089','Benefit');
insert into DomainConcept(DomainConceptId,Name) Values('C410E3AA-309F-44D2-9342-01F6019E8F81','Interface');
insert into DomainConcept(DomainConceptId,Name) Values('93AD8252-099A-4E77-A637-D89B0161E6FE','Implementation');
insert into DomainConcept(DomainConceptId,Name) Values('EDA64986-DC20-4AC0-BC51-04430BB817DE','Operation');
insert into DomainConcept(DomainConceptId,Name) Values('C8A72B54-E1B7-4E3A-B12C-5A0B289E5866','Representation');

insert into DomainConcept(DomainConceptId,Name) Values('C7D0823D-A861-4E6D-AC76-050A13C861C7','Software Solution');
insert into DomainConcept(DomainConceptId,Name) Values('9B78BCF4-DFEF-4C0D-8290-A1F204CF35A7','Interface Specification');
insert into DomainConcept(DomainConceptId,Name) Values('49629042-84BE-4253-86DC-14FA3105FABD','Implementation Specification');