# CompareKarma
CompareKarma is a web-based search index that allows you to compare between prices, ratings, and offerings of existing online bootcamps on the market, allowing you to choose what is best for your budget.
## Release Notes
### Version 0.4.0

#### New Features
* Business users can now update their bootcamp's information
* Business users can now delete their bootcamps 
* Business users can now toggle the password visibility when creating their account
* Business users can now create bootcamps through a modal pop-up

#### Bug Fixes
*  Fixed a bug where upon registering, the post button did not show
*  Fixed a bug where bootcamp posts duplicate when searching
*  Fixed a bug where first option of dropdowns are permanently highlighted

#### Known Issues
* Length of bootcamp card is sized incorrectly depending on text length
* User must manually refresh the page when creating a post through the modal
---
### Version 0.3.0

#### New Features
* Business users can now post their bootcamps
* Business users can view their bootcamps on login
* Business users can have their bootcamps marked as sponsored
* Bootcamp listings can now include a link to their website

#### Bug Fixes
*  Fixed a bug where business users could register with an email that was already being used

#### Known Issues
* First option of multiselect of course type in register page is permanently highlighted even when hovering over another option
---
### Version 0.2.0

#### New Features
* Business users can login and register for an account
* Business users recieve email confirmation upon account registration
* Business users can access a dashboard upon account login

#### Bug Fixes
* N/A

#### Known Issues
* First option of multiselect of course type in register page is permanently highlighted even when hovering over another option
---
### Version 0.1.0

#### New Features
* Database set up
* Sample bootcamp data for UI

#### Bug Fixes
* N/A
---
<!-- 
### Version 0.1.0:
#### New Features
* Feature 1
* feature 2...

#### Bug Fixes
N/A

----->
## Install Guide


Store the unzipped file into a folder. You will navigate to it later.

Download Node version v16.14.2

Download Visual Studio Code and go through the installer.

Download MySQL community edition and go through the installer.
Make sure to note the username and password you used in the installation.
Find the starter code for the database. It is labeled sqlstartercode.txt in the files.

Create a new schema in the database. You can do this by pressing the layered cylinders icon under the query tab.
Label it "comparekarma",case sensitive, and hit the apply button.

Click the button underneath the file tab labeled "create a new SQL tab" and copy and paste the sqlstartcode.
Click the thunderbolt icon that is bare and has no other images on it.
The database has been created.

Using Visual Studio Code, go to file, open the folder.


### Build Instructions

In the .env file found in the project files which should look like JIE-2317-CompareKarma\env, fill in the user name and password to the sql database you setup earlier

Use the terminal to navigate to the "express" folder. For example if you start from the JIE-2317-CompareKarma folder,
you can type cd node/express
Once you are in  this folder "JIE-2317-CompareKarma\node\express" you can type node index.js

A message saying "Connected!" should appear

Open a new terminal start from the JIE-2317-CompareKarma folder.

Type the command "cd src"

You should be in the file path JIE-2317-CompareKarma\src

Type "npm install" at this point and it mayt take a few moments to finish

After it is done, type in "npm start"

You can navigate to http://localhost:3000/ to see the webpage
### Troubleshooting

"Module error not found":
Try "npm i " followed by the name of the module

"ER_ACCESS_DENIED_ERROR":
Verify in the .env file you have the correct DBPASS set


This is the end of the guide.









