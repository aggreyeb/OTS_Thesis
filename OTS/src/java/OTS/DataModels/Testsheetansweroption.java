package OTS.DataModels;
// Generated 12-Jul-2015 3:34:46 PM by Hibernate Tools 4.3.1



/**
 * Testsheetansweroption generated by hbm2java
 */
public class Testsheetansweroption  implements java.io.Serializable {


     private Integer answerOptionId;
     private Test test;
     private Testsheet testsheet;
     private Integer lineNumber;
     private String lineLetterNumber;
     private String optionText;
     private Boolean optionValue;
     private Boolean isCorrect;

    public Testsheetansweroption() {
    }

	
    public Testsheetansweroption(Test test) {
        this.test = test;
    }
    public Testsheetansweroption(Test test, Testsheet testsheet, Integer lineNumber, String lineLetterNumber, String optionText, Boolean optionValue, Boolean isCorrect) {
       this.test = test;
       this.testsheet = testsheet;
       this.lineNumber = lineNumber;
       this.lineLetterNumber = lineLetterNumber;
       this.optionText = optionText;
       this.optionValue = optionValue;
       this.isCorrect = isCorrect;
    }
   
    public Integer getAnswerOptionId() {
        return this.answerOptionId;
    }
    
    public void setAnswerOptionId(Integer answerOptionId) {
        this.answerOptionId = answerOptionId;
    }
    public Test getTest() {
        return this.test;
    }
    
    public void setTest(Test test) {
        this.test = test;
    }
    public Testsheet getTestsheet() {
        return this.testsheet;
    }
    
    public void setTestsheet(Testsheet testsheet) {
        this.testsheet = testsheet;
    }
    public Integer getLineNumber() {
        return this.lineNumber;
    }
    
    public void setLineNumber(Integer lineNumber) {
        this.lineNumber = lineNumber;
    }
    public String getLineLetterNumber() {
        return this.lineLetterNumber;
    }
    
    public void setLineLetterNumber(String lineLetterNumber) {
        this.lineLetterNumber = lineLetterNumber;
    }
    public String getOptionText() {
        return this.optionText;
    }
    
    public void setOptionText(String optionText) {
        this.optionText = optionText;
    }
    public Boolean getOptionValue() {
        return this.optionValue;
    }
    
    public void setOptionValue(Boolean optionValue) {
        this.optionValue = optionValue;
    }
    public Boolean getIsCorrect() {
        return this.isCorrect;
    }
    
    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }




}


