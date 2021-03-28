Feature: Home Page Content
As a Pluto user I want to be able to enter homepage
So that I should be able to select annual or single trip cover

Background: Open homepage
Given home page is opened

Scenario: Enter home page, assert content
Then I should see "Important message for you about COVID-19" label
When I close modal
Then I should see "Annual cover" label
And I should see "Single trip cover" label
When I click element with class "menu-container"
Then I should see link to "About us"
And I should see link to "Claims"
And I should see link to "Contact"
And I should see link to "Return home"