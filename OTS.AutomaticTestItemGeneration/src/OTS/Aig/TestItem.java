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
    public Boolean IsHigherCognitiveLevel;
    public String CongnitiveTypeId;
    public String CongniveTypeName;
    public Boolean HasError;
    public List<String> ErrorsMessage;

    public TestItem() {
       AnswerOptions= new ArrayList();
       ErrorsMessage= new ArrayList();
    }
    
    
}
