/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.ObjectModels;

/**
 *
 * @author MEA
 */
public class UserAccountItem {
    public int Id;
    public String FirstName;
    public String LastName;
    public String Phone;
    public String Email;
    public String Password;
    public int UserTypeId;
    public String Status;
    public Boolean IsAutogeneratedPassword;

    public UserAccountItem() {
        this.IsAutogeneratedPassword=true;
    }
    
    
}
