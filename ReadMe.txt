CPU Inventory Management System

Thursday, August 3rd / 2023  

Overview

This is a take-home assignment for the job interview at Varonis Systems. The task is to create a simple single-page application that allows users to manage a list of CPUs for an inventory system. The backend should be built using Node.js, and the frontend using React.

Frontend dependencies

npm install axios react-toastify react-router-dom
npm install -D tailwindcss
npm install @tailwindcss/forms

Backend dependencies

npm install express mysql2 cors --save

Running the project

-> database	

	install mysql
	in terminal sign in: mysql -u root -p
					“put password here”

	1. CREATE DATABASE Varonis;
	2. Use Varonis;
	2. Create table using instructions below

CREATE TABLE IF NOT EXISTS `cpu` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  manufacturer varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  coreCount int(11) NOT NULL,
  clockSpeed float NOT NULL,
  price float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-> backend

	1. Cd Varonis
	2. Cd backend
	3. Npm install
	4. Set up a MySQL database and configure the database connection in the backend/config/db.config.js file.
	5. Node server.js

-> frontend

	1. Cd varonis
	2. Cd frontend
	3. npm install
	4. Npm run start

 Additional Notes

As you know this is my first time using this stack, and I did my best to complete the entire assignment in under 5 hours. That being said, there are a variety of different things I would add and change about this assignment to improve the codebase for both scale and performance. I look forward to discussing those details with you in the future.

Thanks!  

Will
