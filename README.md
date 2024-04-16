# Spotify Clone Backend

This project is a Spotify clone backend, which provides the necessary APIs and services to mimic the functionality of the Spotify music streaming platform.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data, playlists, and music metadata.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **bcrypt**: For password hashing and encryption.
- **Axios**: Promise-based HTTP client for making HTTP requests to external APIs (e.g., Spotify's API for fetching music data).

## Getting Started

To set up the Spotify clone backend locally, follow these steps:

1. **Clone the Repository**: 
git clone -m https://github.com/deevanshugarg/Spotify-Clone-main.git
2. **Install Dependencies**:
cd spotify-clone-backend
npm install


3. **Set Up Environment Variables**:
Create a `.env` file in the root directory of the project and add the following variables:
PORT=3000
MONGODB_URI=mongodb://localhost/spotify_clone
JWT_SECRET="yoursecretkey"

4. **Start the Server**:
cd /Backend
npx nodemon Index.js


5. **Testing the Endpoints**:
You can use tools like Postman or curl to test the available endpoints. Here are some example endpoints:
- `POST /signup`: Register a new user.
- `POST /login`: Login an existing user.
- `GET /getPlaylistByArtistId/:artistId`: Get all playlists.
- `POST /createPlaylist`: Create a new playlist.
- etc.

# Spotify Clone Frontend

This project is the frontend part of a Spotify clone, built using React and Vite for a fast and efficient development experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for modern web development.
- **React Router**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for making HTTP requests to the backend API.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **React Icons**: Icons for React applications.
- **React Player**: A React component for playing audio files.

## Getting Started

To set up the Spotify clone frontend locally, follow these steps:

1. **Clone the Repository**: 


2. **Install Dependencies**:
cd spotify-clone-frontend
npm install


3. **Set Up Environment Variables**:
Create a `.env` file in the root directory of the project and add the following variable:


4. **Start the Development Server**:
npm run dev

