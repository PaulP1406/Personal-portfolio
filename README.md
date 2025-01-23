# Personal Portfolio Website

This is a full-stack personal portfolio website built to showcase my projects, skills, and contact information. The project utilizes a React-based frontend, a Node.js/Express backend, and a MongoDB database to manage dynamic content.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)


## Live Demo

You can access the live version of the website [here](https://paul-pham.com).

## Features

1. **Home Page**: Introduction to the portfolio with a personalized greeting and links to Resume and Leave a Quote.
2. **About Page**: Information about me, including a brief introduction, tech stack, and links to download my resume or contact me.
3. **Projects Page**: A card-style display of projects showcasing images, descriptions, and technologies used. Includes links to project GitHub repositories.
4. **Contact Page**: A form where users can contact me. The form uses Nodemailer to send email notifications.
5. **Leave a Quote Page**: Users can submit a motivational quote, which is saved in a MongoDB database and displayed in a dynamic list.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React-Router-DOM**: For routing between different pages.
- **React-Icons**: For adding icons to the UI.
- **React-Confetti**: Confetti animation for successful form submissions.

### Backend

- **Node.js & Express**: Backend server for handling API routes and serving the React frontend.
- **Nodemailer**: Library to send emails from the server.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB to manage database interactions.

### Database

- **MongoDB**: NoSQL database for storing user-submitted quotes.

### Deployment

- **Frontend**: Deployed on **Vercel**.
- **Backend**: Deployed on **Heroku**.
- **MongoDB Atlas**: Used for cloud-hosted MongoDB.

## Getting Started

### Prerequisites

- **Node.js**: v14 or above
- **npm** or **yarn** for managing dependencies
- **MongoDB**: You need a MongoDB connection URI for storing quotes.
- **Heroku CLI** (for deploying backend)
- **Vercel CLI** (optional, for deploying frontend)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PaulP1406/Personal-portfolio
   cd portfolio-website
   ```

2. **Install Dependencies**:
   - Install server dependencies:
     ```bash
     cd server
     npm install
     ```
   - Install client dependencies:
     ```bash
     cd ../client
     npm install
     ```

### Running the Application

1. **Backend**:

   - Set environment variables as explained in [Environment Variables](#environment-variables).
   - Run the backend:
     ```bash
     cd server
     npm start
     ```
   - By default, the server will run on port **5000**.

2. **Frontend**:

   - Run the frontend:
     ```bash
     cd ../client
     npm start
     ```
   - The React application will run on port **3000**.

3. **Access the Website**:
   - Go to `http://localhost:3000` to view the frontend.

## Environment Variables

Create a `.env` file in the root of your `server` directory with the following variables (use your own if you wanted to test):

```env
MONGO_URI=<your-mongo-db-connection-uri>
EMAIL=<your-email-address>
PASSWORD=<your-email-password-or-app-password>
PORT=5000
```
