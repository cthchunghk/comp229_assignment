# COMP229 Web Application Development Assignment 1

## 0. Platform
This application is using:
* Node.js v.16.17.0
===
## 1. Project Structure
* /bin
* /public
    * /css
    * /images
    * /javascripts
    * /js
    * /static
* /routes
* /views
* app.js

** Anything does not mentioned is useless in this project. But I have no time to clean up.

## 2. Details
1. */bin* is the folder auto generated by express-generator. It contains the starting point of the web application. DO NOT MODIFY until you are clearly know what you are going to.
2. */public* is the folder auto generated by express-generator. It contains the static resources that will be provided in the web application. 
    1. */css* is the folder containing any CSS file.
    2. */images* is the folder containing any image files 
    3. */javascripts* is generated by express-generator and its function is same with the following folder: */js*. I don't have time to clean up it
    4. */js* is a folder for storing the javascript file needed.
    5. */static* is a folder for storing any other static files.
3. */routes* stores all routing table using. However, in this project, I put all the routing path into a file first.
4. */views* contains all the page will be shown. In this project, using EJS engine.
5. *app.js* is the application configuration file. DO NOT MODIFY unless you know what are going to.

## 3. Run the application
Live demo: https://cencol-comp229-assignment1.herokuapp.com/    
If you need to run in your local machine, please:
1. git clone - To clone this source code to your local machine
2. npm install - To installing the dependency this application needed.
3. npm start - To serve the application. It should be start at localhost:3000. Enjoy.