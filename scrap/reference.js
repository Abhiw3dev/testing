/*
name: Automation Tests

on:
  push:
    branches:
      - dev

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 20  

      - name: Install dependencies
        run: npm install

      - name: Run tests with Jest
        run: npm test # Add --coverage to generate test coverage report

      - name: Upload Jest Coverage Reports
        uses: actions/upload-artifact@v4.3.0
        if: always()
        with:
          name: test-reports
          path: coverage  # Specify the path where Jest stores coverage reports

      - name: Upload a jest test-report Artifact
        if: always()
        uses: actions/upload-artifact@v4.3.0
        with:
          name: jest-html-reporter
          path: newReport/test-report.html

      - name: Prepare Deployment Directory
        if: always()
        run: |
            mkdir deploy-directory # Create a new directory for deployment
            cp -r coverage deploy-directory/ # Copy coverage reports
            cp -r newReport deploy-directory/ # Copy newReport directory containing test-report.html
  

      - name: Deploy to GitHub Pages
        if: always()
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
            branch: gh-pages # The branch the action should deploy to.
            folder: . # The folder the action should deploy.
            target-folder: coverage-reports # The folder in the gh-pages branch where reports are stored
            single-commit: true # Overwrites the previous commit to keep the repo size small
            clean: true # Automatically remove deleted files from the deployment

      - name: Display Deployed Report Links
        run: |
          echo "Deployed Links for Report:"
          echo "1. Coverage Report: 'https://abhiw3dev.github.io/arbworkflow/coverage-reports/deploy-directory/coverage/lcov-report/index.html'"
          echo "2. Test Report: 'https://abhiw3dev.github.io/arbworkflow/coverage-reports/deploy-directory/newReport/test-report.html'"
          
 */