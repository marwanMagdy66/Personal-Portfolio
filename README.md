Personal Portfolio
Overview
This is a personal portfolio project built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). The portfolio showcases your projects and skills, with a dashboard that allows you to upload pictures, manage your content, and perform full CRUD (Create, Read, Update, Delete) operations on your projects and skills.

Features
Home Page: Displays an overview of your portfolio, including featured projects and skills.
Dashboard: A secured section where you can upload images and manage your projects and skills.
CRUD Operations: Easily create, view, update, and delete projects and skills.
Responsive Design: Optimized for both desktop and mobile devices.
Technologies Used
Frontend: Angular
Backend: Node.js, Express.js
Database: MongoDB
Installation
Prerequisites
Ensure you have the following installed:

Node.js
Angular CLI
MongoDB
Setup Instructions
Clone the repository:

bash
git clone https://github.com/yourusername/portfolio-website.git
Navigate to the project directory:

bash
cd portfolio-website
Install backend dependencies:

bash
cd backend
npm install
Install frontend dependencies:

bash
cd ../frontend
npm install
Start the MongoDB server:

bash
mongod
Start the backend server:

bash

cd ../backend
npm start
Start the Angular frontend:

bash

cd ../frontend
ng serve
Access the application:

Home Page: http://localhost:4200/portfolio-website/home
Dashboard: http://localhost:4200/portfolio-website/dashboard
Usage
Home Page: Navigate to http://localhost:4200/portfolio-website/home to view the portfolio.
Dashboard: Use the dashboard to upload project images, add new projects and skills, and manage existing ones.
Configuration
Environment Variables:
Ensure you have a .env file in the backend directory with the necessary configurations such as your MongoDB connection string.
Example .env file:
env
Copy code
MONGO_URI=mongodb://localhost:27017/portfolio-db
PORT=3000
