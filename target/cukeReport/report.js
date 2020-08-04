$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resource/Features/Computer.feature");
formatter.feature({
  "line": 3,
  "name": "i am on home page so i can buy a products from computer category,",
  "description": "so that i can review the product and send gift with email to friend",
  "id": "i-am-on-home-page-so-i-can-buy-a-products-from-computer-category,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computer"
    }
  ]
});
formatter.before({
  "duration": 11070851200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "i able to purchase products",
  "description": "",
  "id": "i-am-on-home-page-so-i-can-buy-a-products-from-computer-category,;i-able-to-purchase-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the computer category",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on desktop from computer category",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on first product it is a Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the Email a friend",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the friend\u0027s email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter my email address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I write the masage to friend \"Hope you are doing well\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the send email Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should able to buy product and submit review with massage successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_homepage()"
});
formatter.result({
  "duration": 149172800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_computer_category()"
});
formatter.result({
  "duration": 1371476400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_desktop_from_computer_category()"
});
formatter.result({
  "duration": 2034234500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_first_product_it_is_a_Build_your_own_computer()"
});
formatter.result({
  "duration": 2288580000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_Email_a_friend()"
});
formatter.result({
  "duration": 1431886200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_the_friend_s_email_address()"
});
formatter.result({
  "duration": 140814000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_my_email_address()"
});
formatter.result({
  "duration": 173094000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hope you are doing well",
      "offset": 30
    }
  ],
  "location": "MyStepDef.i_write_the_masage_to_friend(String)"
});
formatter.result({
  "duration": 188111800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_the_send_email_Button()"
});
formatter.result({
  "duration": 682864100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_should_able_to_buy_product_and_submit_review_with_massage_successfully()"
});
formatter.result({
  "duration": 86900,
  "status": "passed"
});
formatter.after({
  "duration": 28100,
  "status": "passed"
});
});