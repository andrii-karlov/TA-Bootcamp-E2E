Feature: Search bar result and logo redirecting - newegg

Background: Preparation steps
Given I am on the main page

    Scenario: Search bar
        
        When I type the word "Windows" into the Search bar
        * I click to search
        Then I should be redirected to the search results page
        * I should see that at least one item appears

    Scenario: Internet shop logo button
        
        * I click to `Today's Best Deals` button
        * I am redirected to the `Today's Best Deals` tab
        When I click to the Logo button
        Then I should be redirected to the main page
