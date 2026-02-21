# Node.js Private Messaging App with Socket.io & MongoDB

This project is a real-time private messaging application built using Node.js, Express, MongoDB, and Socket.io. It features user authentication, persistent chat history, and a dynamic dashboard for interacting with other registered users.

## 🚀 Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose ORM)
- **Real-time Communication:** Socket.io
- **Templating Engine:** EJS (Embedded JavaScript)
- **Security:** bcryptjs (Password hashing)
- **Session Management:** express-session, cookie-parser

## 📁 Project Structure
```text
.
├── models/
│   ├── User.js          # Mongoose schema for user accounts
│   └── Message.js       # Mongoose schema for private messages
├── views/
│   ├── login.ejs        # Login page template
│   ├── register.ejs     # Registration page template
│   └── dashboard.ejs    # Main chat interface template
├── index.js             # Main server file (Express + Socket.io logic)
├── package.json         # Project dependencies and scripts
└── public/              # Static assets (CSS/JS)
```

## ⚙️ How It Works

### 1. Authentication Flow
- **Registration:** Users provide a username and password. The password is encrypted using `bcryptjs` before being stored in MongoDB.
- **Login:** The system verifies the username and compares the provided password with the hashed version in the database.
- **Session:** Upon successful login, a session is created using `express-session`, storing the user's ID and username.
- **Middleware:** The `isAuthenticated` middleware protects the `/dashboard` and `/chat-history` routes, redirecting unauthenticated users to the login page.

### 2. Real-time Messaging (Socket.io)
- **Connection:** When a user logs in and opens the dashboard, they connect to the Socket.io server.
- **Registration:** The client emits a `register` event with their `userId`. The server maps this `userId` to the specific `socket.id` in a `Map` object (`userSockets`).
- **Private Messaging:**
  1. User A selects User B and sends a message.
  2. The message is sent to the server via the `private_message` event.
  3. The server saves the message to MongoDB.
  4. The server looks up User B's `socket.id` from the map.
  5. If User B is online, the server emits `receive_message` specifically to User B's socket ID.

### 3. Data Persistence
- All messages are stored in the `messages` collection in MongoDB with fields for `sender`, `receiver`, `message`, and `timestamp`.
- When a user clicks on a contact in the dashboard, the frontend fetches the conversation history from the `/chat-history/:receiverId` endpoint to populate the chat window.

## 🛠️ Setup Instructions
1. **Ensure MongoDB is running** on your local machine (`mongodb://localhost:27017`).
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
4. **Access the app:** Open `http://localhost:3000` in your browser. Open a second browser or an incognito window to register another user and test the private chat.

## 📝 Key Features
- **Secure Hashing:** No plain-text passwords.
- **Private Rooms:** Messages are not broadcast; they are targeted to specific users.
- **History:** Messages persist even after refreshing the page or restarting the server.
- **User List:** Automatically excludes the logged-in user from their own contact list.
