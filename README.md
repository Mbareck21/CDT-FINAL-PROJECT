# Legal-Inquiry-Submission

This project is inspired by my job as a legal program manager. I built the Legal-Inquiry-Submission app to allow clients to submit legal inquiries to their lawyers easily and securely from anywhere. This platform is designed to streamline the legal process and make it more convenient for clients to communicate with their lawyers. The app is accessible through https://legal-inquiry.herokuapp.com/.


----
## Technical Overview
The Legal-Inquiry-Submission app is built with:

* **Front-End**: Bootstrap and EJS
* **Back-End**: Node.js and MongoDB
* **Authentication**: Passport

The app follows the **Model-View-Controller (MVC)** architecture pattern, where the model represents the data, the view represents the UI, and the controller handles user interactions.

----
## Main Functionalities
## User Authentication
The app uses Passport authentication to ensure secure access to the restricted page where all inquiries are stored. Users can sign up and create an account, and then log in to use the application. 

#### Sign up
Users can create a new account by providing their basic information and unique email and password. 

#### Log in 
After creating an account, users can log in with their email and password to access the app's functionalities.


### CRUD Methods
Admins and users can easily implement CRUD methods to manage their inquiries.
* Create new inquiries
* View existing inquiries
* Edit inquiries
* Delete inquiries

### Error Handling
* The app has error handling middleware to handle any errors that occur during the application's execution.
----
The Legal-Inquiry-Submission app is a user-friendly platform that streamlines the legal process. With its implementation of user authentication and CRUD methods, it is designed to provide a secure and efficient way for clients to submit legal inquiries to their lawyers.
