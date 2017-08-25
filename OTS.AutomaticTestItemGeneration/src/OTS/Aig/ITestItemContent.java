/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

import java.util.List;

/**
 *
 * @author Eb
 */
public interface ITestItemContent {
    String ConstructStimulus();
    String PrepareStem();
    List<AnswerOption> CreateAnswerOptions();
}
