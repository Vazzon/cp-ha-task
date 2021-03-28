// type definitions for Cypress object "cy"
/// <reference types="cypress-xpath" /> 

import {Then, Given, When, And} from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://pluto-customer-web-app-staging.herokuapp.com"

Given(/^home page is opened/, () => {
    cy
    .visit(BASE_URL)
  })

Then(/^I should see "(.*)" label/, label_text => {
    cy  
    .contains(label_text)
    .should('be.visible')
})

//hacky but didn't have enough knowledge to pass different way. Not proud of this solution
When(/^I close modal/,() => {
    cy
    .get('body')
    .click('topLeft')
})

When(/^I click element with class "(.*)"/, class_element => {  
    cy
    .get(`.${class_element}`)
    wait(1000)
    .click()
})

Then(/^I should see link to "(.*)"/, link_text => {
    cy
    .contains(link_text)
    .should('be.visible')
    cy
    .contains(link_text)
    .should('have.attr','href')
})

When(/^I click "(.*)" button/, element_button => {
    cy
    .get('button')
    .contains(element_button)
    .wait(1000)
    .invoke('click')
})

And(/^I select radio button with value "(.*)"/, radio_value => {
    cy
    .get('[type="radio"]')
    .wait(1000)
    .check(radio_value)
})

Then(/^I should see (not )?enabled button/, isDisabled => {
    if(isDisabled) {
        cy
        .get('button')
        .wait(1000)
        .should('be.disabled')
    } else {
        cy
        .get('button')  
        .wait(1000)
        .should('be.enabled')
    }
})

And(/^I fill in "(.*)" with "(.*)"/, (field, username) => {
    cy
    .get(`#${field}`)
    .wait(1000)
    .type(username)
})
And(/^I expect to see "(.*)" if I fill in "(.*)" with "(.*)"/, (validation_message, field, username ) => {
    cy
    .get(`#${field}`)
    .wait(1000)
    .type(username)
    cy
    .contains(validation_message)
})