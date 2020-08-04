package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef {

    Computer computer = new Computer();

    @Given("^I am on homepage$")
    public void i_am_on_homepage() {
    }

    @When("^I click on the computer category$")
    public void i_click_on_the_computer_category() {
        computer.computerPage();
    }

    @When("^I click on desktop from computer category$")
    public void i_click_on_desktop_from_computer_category() {
        computer.desktopPage();
    }


    @When("^I click on first product it is a Build your own computer$")
    public void i_click_on_first_product_it_is_a_Build_your_own_computer() {
        computer.clickOnFirstProduct();
    }

    @When("^I click on the Email a friend$")
    public void i_click_on_the_Email_a_friend() {
        computer.emailAFriend();
    }

    @When("^I enter the friend's email address$")
    public void i_enter_the_friend_s_email_address() {
        computer.friendAEmail();
    }

    @When("^I enter my email address$")
    public void i_enter_my_email_address() {
        computer.yourEmailAddress();
    }

    @When("^I write the masage to friend \"([^\"]*)\"$")
    public void i_write_the_masage_to_friend(String arg1) {
        computer.personalMessage();
    }

    @When("^I click on the send email Button$")
    public void i_click_on_the_send_email_Button() {
        computer.sendEmail();
    }

    @Then("^I should able to buy product and submit review with massage successfully$")
    public void i_should_able_to_buy_product_and_submit_review_with_massage_successfully() {
    }

}