@Computer

Feature: i am on home page so i can buy a products from computer category,
  so that i can review the product and send gift with email to friend

  Scenario: i able to purchase products

    Given I am on homepage
    When I click on the computer category
    And  I click on desktop from computer category
    And I click on first product it is a Build your own computer
    And I click on the Email a friend
    And I enter the friend's email address
    And I enter my email address
    And I write the masage to friend "Hope you are doing well"
    And I click on the send email Button
    Then I should able to buy product and submit review with massage successfully
