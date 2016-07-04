package OTS.DataModels;
// Generated 6-Feb-2016 4:41:34 PM by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Courseknowledgemap generated by hbm2java
 */
public class Courseknowledgemap  implements java.io.Serializable {


     private CourseknowledgemapId id;
     private Integer assignBy;
     private Date assignOn;
     private String actionText;
     private Boolean canEnableSelect;

    public Courseknowledgemap() {
    }

	
    public Courseknowledgemap(CourseknowledgemapId id) {
        this.id = id;
    }
    public Courseknowledgemap(CourseknowledgemapId id, Integer assignBy, Date assignOn, String actionText, Boolean canEnableSelect) {
       this.id = id;
       this.assignBy = assignBy;
       this.assignOn = assignOn;
       this.actionText = actionText;
       this.canEnableSelect = canEnableSelect;
    }
   
    public CourseknowledgemapId getId() {
        return this.id;
    }
    
    public void setId(CourseknowledgemapId id) {
        this.id = id;
    }
    public Integer getAssignBy() {
        return this.assignBy;
    }
    
    public void setAssignBy(Integer assignBy) {
        this.assignBy = assignBy;
    }
    public Date getAssignOn() {
        return this.assignOn;
    }
    
    public void setAssignOn(Date assignOn) {
        this.assignOn = assignOn;
    }
    public String getActionText() {
        return this.actionText;
    }
    
    public void setActionText(String actionText) {
        this.actionText = actionText;
    }
    public Boolean getCanEnableSelect() {
        return this.canEnableSelect;
    }
    
    public void setCanEnableSelect(Boolean canEnableSelect) {
        this.canEnableSelect = canEnableSelect;
    }




}


