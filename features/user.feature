Feature: Automate the user management feature
  As an Automation Engr
  I need to automate way2automation.com
  So I can show my automation capabilities

  Background:
    Given user navigated to application url

  Scenario: Add a user and validate the user has been added to the table
    When  Add new user with mandatory details
    Then  validate the user has been added to the table

  Scenario: Delete user and validate user has been deleted
   When Delete user as "novak" after clicks on delete icon
   Then User as "novak" deleted and it removed from the table
