/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Eb
 */
public class TestItem {
    public int Number;
    public int SortOrder;
    public String Stimulus;
    public String Stem;
    public List<AnswerOption> AnswerOptions;
    public AnswerOption CorrectAnswer;
    public Boolean IsHigherCognitiveLevel;
    public String CongnitiveTypeId;
    public String CognitiveTypeName;
    public Boolean HasError;
    public List<String> ErrorsMessage;
    public String StimulusFormatting;
    public String StemFormatting;
    public String TestId;
    public String CourseId;
    public TestItem() {
       AnswerOptions= new ArrayList();
       ErrorsMessage= new ArrayList();
       CorrectAnswer= new AnswerOption();
    }
    
    
}
