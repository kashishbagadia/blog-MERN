# Blog - MERN
### :dart: A MERN stack blogging web app, with user SignUp/Login

## Getting Started
* After cloning the project, cd into the directories and ```npm install```
* Create a ```.env``` file in the api folder and store the following so that you can use correct connection URL for your MongoDB database:
  * mongoUser 
  * pwd
  * dbName
* Run the server on PORT 3000
* npm start/yarn start
#### You can obtain the MONGO_URI after create a collection on [mongodb atlas](https://www.mongodb.com/cloud/atlas).

## Info 
* This is a blogging app with user SignUp/Login that lets users read the existing blog posts without logging in. The frontend of the app is built using React.
* In order to write a new blog post, the user has to login. While the user can read existing blog posts of other users, the user will be allowed to *edit* or *delete* posts of their own account.

## Technologies Used
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) : It provides a free cloud service to store MongoDB collections.
* [React.js](https://reactjs.org/) : A JavaScript library for building user interfaces.
* [Node.js](https://nodejs.org/en/) : A runtime environment to help build fast server applications using JS.
* [Express.js](https://expressjs.com/) : A popular Node.js framework to build scalable server-side for web applications.
* [Mongoose](https://mongoosejs.com/) : An ODM(Object Data Modelling)library for MongoDB and Node.js
