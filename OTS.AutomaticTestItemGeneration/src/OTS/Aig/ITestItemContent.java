/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

/**
 *
 * @author Eb
 */
public interface ITestItemContent {
    String ConstructStimulus(ConceptNode conceptNode,CognitiveType congnitiveType);
    String PrepareStem(ConceptNode conceptNode,CognitiveType congnitiveType);
    String CreateAnswerOptions(ConceptNode conceptNode,CognitiveType congnitiveType);
}
