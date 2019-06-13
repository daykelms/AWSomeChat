Getting Started
1. Clone this repository and cd into it.
2. Execute npm install to download dependencies.
3. See tutorial for notes on how to get the required credentials from AWS
4. Open client/src/methods.js and .env and update them with your Chatkit credentials
5. Run node server.js to start the Express server
6. cd into the client folder, run npm install followed by npm start to start the development server. View http://localhost:3000 in your browser.


Pre-requisites
Node.js and npm

Built With
React - For creating the application frontend
Chatkit - Chat features
Amazon Translate - Realtime language translation

notes: If for any reason user credentials in AWS are changed or deleted. 
Make sure to reinstall the AWS SDK to save the new user (by running in the root folder:
npm install aws-sdk --save ). Only  saving it in the .env file wont work.
 
 Special Thanks to Danelia Sanchez and Maurice Pruna who help with the AWS setup.