#React Firebase Chat Application

A real-time chat application built with React and Firebase. This project features user authentication, real-time messaging, multimedia support, and user management options like blocking. The application is designed for seamless interaction, with a clean and responsive UI optimized for desktop and mobile.

##Features
User Authentication: Secure account creation and login with Firebase Authentication.
Real-Time Messaging: Send and receive messages instantly, powered by Firebase Firestore.
Multimedia Support: Share images and files within the chat.
User Blocking: Block and unblock users as needed.



##Demo
Watch the Demo Video for a complete overview of the app's capabilities.

##Screenshots
Chat Interface
![Screenshot 2024-10-24 122606](https://github.com/user-attachments/assets/91e0ea0a-9f4f-423e-87d5-ba0bf8f870fb)

##Login and Registration Page
![Screenshot 2024-11-11 161137](https://github.com/user-attachments/assets/d0ea0b44-c060-422a-bf9b-cb2ccbc45bac)


#Technologies Used
Frontend: React, CSS
Backend: Firebase (Firestore for data storage, Firebase Authentication for user management)


Getting Started
Prerequisites
Node.js (version 14 or higher)
Firebase account (for backend setup)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
Install Dependencies:

bash
Copy code
npm install
Configure Firebase:

Go to the Firebase Console, create a new project, and enable Firestore and Authentication.

Create a .env file in the root of your project with the following Firebase configuration details:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Run the Application:

bash
Copy code
npm start
Access the app locally at http://localhost:3000.

Project Structure
plaintext
Copy code
src/
├── components      # Reusable components (Chat, Sidebar, etc.)
├── pages           # Main pages (ChatPage, Login, Register)
├── services        # Firebase configuration and API functions
├── utils           # Helper functions
└── App.js          # Main application file
Future Improvements
Enhanced User Profiles: Allow users to update profile pictures and additional information.
Dark Mode: Toggle between light and dark themes.
Group Chat Functionality: Create group conversations.
Message Reactions and Read Receipts: Add more interactivity to messages.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
