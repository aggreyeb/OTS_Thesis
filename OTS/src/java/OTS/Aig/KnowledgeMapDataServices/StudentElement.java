/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author MEA
 */
public class StudentElement {
  public  int Id;
  public  String FirstName;
  public  String LastName;
  public  String Email;
  public  String Phone;
  public  int UserTypeId;
  public  int AccountId;
  public  String UserName;
  public  String Password;
  public List<StudentCourseElement> Courses;
  public Boolean MarkedDelete;
    public StudentElement() {
       Courses= new ArrayList();
       MarkedDelete=false;
    }
  
  
}
