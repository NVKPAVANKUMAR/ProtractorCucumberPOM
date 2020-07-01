### Framework Structure
#### Cucumber with PageObject Design Pattern
1. Features     
2. Data
3. Reports
4. src
     - Pages
          -  add_user_page.js
          -  user_management_page.js
5. stepdefination
     - usersteps.js     
6. util
     - hooks.js
     - timeout.js

Pre-requisite: 
Node.js including NPM should be installed on the system and path environment variable must be updated.                 
 
Steps to run the test </br>
Installation/Setup:  npm run setup </br>
To run the Test:     npm  test </br>

Note: once test run completed then reports will be created under ./reports folder
