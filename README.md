
📰 The Daily Pulse – News App
A modern, responsive news application built with React (Vite) and styled for a sleek user experience. Fetches real-time news based on selected country and category.

📌 Features
🌍 Country & Category Filters – Choose from multiple countries and news categories.

📱 Responsive Design – Works across desktop and mobile devices.

📰 Real-Time News Fetching – Powered by News API.

🔒 User Authentication – Register and login functionality.

🎨 Gradient UI Theme – Attractive color scheme for a modern look.

📂 Project Structure
my-app/
  ├── public/             # Static files
  ├── src/                # Application source code
  │   ├── components/     # Reusable UI components
  │   ├── pages/          # Page-level components (Home, Register, Login, etc.)
  │   ├── App.jsx         # Main app component
  │   ├── main.jsx        # Entry point
  ├── package.json        # Project metadata & dependencies
  ├── vite.config.js      # Vite configuration
  └── README.md           # Project documentation

  📦 Dependencies
Main libraries used:

react – UI library

react-dom – DOM bindings for React

react-router-dom – Routing between pages

axios – API requests

vite – Build tool & development server

You can check full list in package.json.

``bash
⚙️ Installation & Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/nagesh-makanapur /daily-pulse-news-app.git
cd daily-pulse-news-app
2️⃣ Install dependencies
bash
npm install
3️⃣ Add environment variables
Create a .env file in the root directory:

4️⃣ Start the development server
bash
npm run dev
App will run at: http://localhost:5173
