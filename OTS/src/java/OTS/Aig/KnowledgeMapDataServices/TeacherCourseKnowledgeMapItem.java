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
public class TeacherCourseKnowledgeMapItem {
    public String CourseId; 
    public String CourseName;
    public List<LookUpItem> CourseKnowledgeMaps;

    public TeacherCourseKnowledgeMapItem() {
       CourseKnowledgeMaps= new ArrayList();
    }
    
    
}
