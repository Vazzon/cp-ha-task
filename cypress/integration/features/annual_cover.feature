Feature: Annual cover
As a Pluto user I want to be able to order annual cover
So that I should be able to have cover for my trips

Background: Open homepage
Given home page is opened
Given I should see "Important message for you about COVID-19" label
Given I close modal

Scenario: Happy path
When I click "Recommended if you travel 2+ times per year" button
Then I should see "Some details about your trip" label
And I select radio button with value "Europe"
When I click "Next" button
Then I should see not enabled button
And I fill in "username" with "Jane Doe"

Scenario: Validation
When I click "Recommended if you travel 2+ times per year" button
Then I should see "Some details about your trip" label
And I select radio button with value "Europe"
When I click "Next" button
Then I should see not enabled button
And I expect to see "Can we get the last name too please" if I fill in "username" with "Jane"