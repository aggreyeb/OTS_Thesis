package OTS.DataModels;
// Generated Dec 20, 2014 11:09:02 AM by Hibernate Tools 4.3.1



/**
 * Testitemtype generated by hbm2java
 */
public class Testitemtype  implements java.io.Serializable {


     private Integer testItemTypeId;
     private String name;

    public Testitemtype() {
    }

    public Testitemtype(String name) {
       this.name = name;
    }
   
    public Integer getTestItemTypeId() {
        return this.testItemTypeId;
    }
    
    public void setTestItemTypeId(Integer testItemTypeId) {
        this.testItemTypeId = testItemTypeId;
    }
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }




}


