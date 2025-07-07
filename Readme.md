# 🐄 Smart Dairy Farm Management System

A full-stack MERN application to manage and monitor dairy farm operations efficiently — from tracking livestock and milk production to managing tasks, expenses, and daily performance.

## Pitch Deck
https://docs.google.com/presentation/d/e/2PACX-1vT1hkNmDVf-LQxTOGsQi8CaBECdIpM8vzwREoLx-8miPOXWLwUlo-BUZouNRJGcBROn4pTl5H49K9ca/pub?start=false&loop=false&delayms=3000

## 🚀 Features

### 👤 User Management
- Admin login & authentication (JWT-based)
- Role-based access (Admin, Worker, Vet)

### 🐮 Livestock Management
- Add, edit, and delete cow records
- Track cow details: breed, age, health, and productivity

### 🥛 Milk Production Tracker
- Daily milk recording per cow
- Weekly/monthly milk output graphs and summaries

### 📆 Task Scheduler
- Create, assign, and monitor tasks (feeding, cleaning, vet checks)
- Calendar integration for scheduling

### 💰 Expense & Income Tracking
- Record operational costs and revenue
- Visual profit/loss reports

### 🔔 Alerts & Notifications
- Health or productivity warnings
- Daily reminders for scheduled tasks

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js (with Hooks)
- Tailwind CSS / Bootstrap
- Axios for API calls
- Recharts / Chart.js for data visualization

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for auth

---

## 📂 Folder Structure (Basic)

smart-dairy-farm/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js
├── server/ # Node + Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
├── .env
├── package.json
└── README.md

---

## 🛠️ Setup Instructions

### Prerequisites:
- Node.js
- MongoDB (local or Atlas)
- Git

### Backend Setup

```bash
cd server
npm install
# create a .env file and add your Mongo URI and JWT secret
npm run dev

Frontend Setup

cd client
npm install
npm start

🌐 Environment Variables (.env)

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

📈 Future Improvements
SMS/email alerts (Twilio/SendGrid)

Mobile app (React Native)

Biogas/water usage modules

AI-based milk yield predictions

📸 Screenshots
(Add screenshots here once your UI is ready)

🤝 Contributing
PRs are welcome! Feel free to fork this project and open pull requests.

📄 License
This project is open-source under the MIT License.

📬 Contact
Made by [Denis Kipkurui]
Email: deniskipkurui2024@gmail.com