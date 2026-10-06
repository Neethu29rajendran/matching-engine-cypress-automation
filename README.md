# Matching Engine Cypress Automation Assessment

## Overview

This project contains a Cypress automation test created for the Matching Engine technical assessment.

The test covers:
- Opening the Matching Engine website
- Expanding the Solutions menu
- Verifying the Solutions displayed
- Selecting Distribution Processing
- Scrolling to the "All-in-one solution for scale" section
- Verifying the content of the section

## Technology

- Cypress
- JavaScript
- Google Chrome

## Prerequisites

- Node.js
- npm
- Google Chrome

## Installation

Clone the repository and install the required dependencies:

npm install

## Running the Test

Open Cypress:

npx cypress open

Select E2E Testing, choose Google Chrome, and run:

cypress/e2e/matching-engine.cy.js

Alternatively, run the test from the command line:

npx cypress run --browser chrome

## Test Website

https://www.matchingengine.com/
