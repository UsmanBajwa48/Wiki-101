## Setup Playwright project
- Clone repo
- open terminal and install dependencies in project directory.
- npm install
- npx playwright install

## Run the playwright test

- npx playwright test
- npx playwright test --headed

## HTML report

- npx playwright show-report

## Runs a specific test file

npx playwright test  testName

## Runs the files specified

- npx playwright test  MyTest1.spec.js  MyTest2.spec.js 

## Execute following command to run all test cases headless

- npx playwright test

## Execute following command to run all test in debug mode

- npx playwright test testName --debug

## Execute following command to run all test cases headed in browser

- npx playwright test --project=chromium --headed

## Execute following command to run any specific test case headed in specified browser

- npx playwright test --project=chromium --headed  testCaseName# agoda-playwright-assignment
