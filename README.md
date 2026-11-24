# OrbitDesk — Helpdesk Ticketing System

OrbitDesk is a MERN stack-based helpdesk application designed to simplify customer support operations through ticket management, knowledge sharing, and support analytics.

Features

Role-based access: Separate experiences for customers, agents, and administrators.

Ticket management: Create, assign, prioritize, and track support tickets.

Internal notes: Maintain private communication between support agents.

Knowledge base: Create and manage helpful support articles.

SLA tracking: Monitor ticket deadlines and overdue requests.

Analytics dashboard: Track ticket volume, statuses, and support activity.

Tech Stack

Frontend

Backend

Database

React.js

Node.js

MongoDB Atlas

Vite

Express.js

Mongoose

CSS

JWT Authentication


# Additional tools: Node Cron, REST API.

# Project Structure

OrbitDesk/
├── client/       # React frontend
├── server/       # Express backend
├── package.json
└── README.md

## Setup
1. Open a terminal in the project root.
2. Configure the backend:
   `cd server` then copy `.env.example` to `.env`.
3. Set `MONGO_URI` and a long random `JWT_SECRET` in `server/.env`.
4. From project root install dependencies:
   `npm install`
   `npm install --prefix server`
   `npm install --prefix client`
5. Seed demo users and articles:
   `npm run seed --prefix server`
6. Start both apps from project root:
   `npm run dev`