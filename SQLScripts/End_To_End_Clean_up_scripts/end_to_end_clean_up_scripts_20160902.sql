/*Clean up test for end-to-end test*/
delete from testanswersheet;
delete from testitemoption; 
delete from testitem;
delete from questionlineitem;
delete from question;
delete from studentcourseregistration;
delete from studenttest;
delete from studenttestanswersheet;
delete from studenttesthistory;
delete from teachercoursetest;
delete from test;

delete from knowledgemap where CreatedBy>2;
delete from  user where userId >2;
delete  from useraccount where UserAccountId >2;

/*select scripts */
select * from testanswersheet;
select * from testitemoption; 
select * from testitem;
select * from questionlineitem;
select * from question;
select * from studentcourseregistration;
select * from studenttest;
select * from studenttestanswersheet;
select * from studenttesthistory;
select * from teachercoursetest;
select * from test;


