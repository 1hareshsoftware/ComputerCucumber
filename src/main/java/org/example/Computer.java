package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.utils.*;

public class Computer extends Utils {

    LoadProp loadprop = new LoadProp();

    private By _Computer=By.xpath("//a[@href='/computers']");
    private By _Desktop=By.cssSelector("a [title='Show products in category Desktops']");
    private By _clickOnFirstProduct = By.cssSelector("a[title='Show details for Build your own computer']");
    private By _emailaFriend = By.cssSelector("div[class='email-a-friend']");
    private By _friendaEmail = By.id("FriendEmail");
    //String emailTimestamp = "Test"+ timeStamp()+"@gmail.com";
    private By _youremailaddress= By.id("YourEmailAddress");
    private By _personalMessage = By.id("PersonalMessage");
    private By _sendEmail =By.cssSelector("div[class='buttons']");

    public void computerPage(){
        ClickOnElement(_Computer);
    }

    public void desktopPage() {
        waitForElementToBeDisplay(_Desktop,20);
        ClickOnElement((_Desktop));
    }

    public void clickOnFirstProduct(){
        waitForElementToBeDisplay(_clickOnFirstProduct,20);
        ClickOnElement(_clickOnFirstProduct);
    }

    public void emailAFriend() {
        ClickOnElement(_emailaFriend);
    }

    public void friendAEmail () { enterText(_friendaEmail, loadprop.getProperty("FriendaEmail"));}

    public void yourEmailAddress () { enterText(_youremailaddress, "haresh@google.com"); }

    public void personalMessage () { enterText(_personalMessage, loadprop.getProperty("PersonalMessage"));}

    public void sendEmail () { ClickOnElement(_sendEmail);}

}
