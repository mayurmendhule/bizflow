<div align="center">
  <h1>BizFlow — CRM & Business Management Platform</h1>
  <p>A customized CRM built on a Node.js / React.js / MongoDB stack, restyled and extended for real business workflows.</p>
</div>
## About this project
 
BizFlow is a CRM and business management platform for handling customers, invoices, quotes, and payments in one place. It's built on the MERN stack (MongoDB, Express, React, Node.js) with Ant Design and Redux, customized with a dedicated brand identity, a rebuilt theme system, and demo data tooling for showcasing the app.
 
 
## Features
 
- **Customer management** — track client details and history
- **Invoicing** — create, send, and track invoice status and payments
- **Quotes** — generate and convert quotes to invoices
- **Payments** — record and manage payments against invoices, with multiple payment modes
- **Dashboard** — visual overview of business activity
- **Tax configuration** — manage tax rates applied to invoices
- **Role-based admin access** — secure login for authorized users
## Tech stack
 
| Layer      | Technology |
|------------|------------|
| Frontend   | React 18, Ant Design 5, Redux Toolkit, Vite |
| Backend    | Node.js, Express |
| Database   | MongoDB (Mongoose) |
| Auth       | JWT-based authentication |
 
## Getting started
 
### 1. Clone this repository
 
```bash
git clone <your-repo-url>
cd bizflow-crm
```
 
### 2. Set up MongoDB
 
- Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a database user and note the password
- Whitelist your IP address (or `0.0.0.0/0` for open access during development)
- Copy your connection string
### 3. Configure environment variables
 
In `backend/.env`, set:
 
```
DATABASE="mongodb+srv://<user>:<password>@<cluster-url>/<db-name>?retryWrites=true&w=majority"
JWT_SECRET="your_own_secret_key"
```
 
### 4. Install and run the backend
 
```bash
cd backend
npm install
npm run setup       # creates the admin login (admin@admin.com / admin123)
npm run seed:demo   # optional — adds sample customers & invoices
npm run dev          # starts on http://localhost:8888
```
 
### 5. Install and run the frontend
 
```bash
cd frontend
npm install
npm run dev          # starts on http://localhost:3000
```
 
Visit `http://localhost:3000` and log in with the admin credentials created in step 4.
 
## Deployment
 
- **Frontend**: build with `npm run build` (Vite), deploy the `dist/` output to Vercel, Netlify, or similar.
- **Backend**: deploy to Render, Railway, or similar Node.js host. Set the same environment variables as above on the host.
- **Database**: MongoDB Atlas (already set up in step 2).
Set `frontend/.env`'s `VITE_BACKEND_SERVER` to your deployed backend URL before building for production.
 
## License
 
This project is based on [bizflow ERP CRM](https://github.com/bizflow/bizflow-erp-crm), licensed under the MIT License. See `LICENSE` for details.