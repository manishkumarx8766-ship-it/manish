# 🎮 CrazyGames - Online Gaming Website

A modern, feature-rich online gaming platform similar to CrazyGames, built with React, TypeScript, and Firebase.

## ✨ Features

### 🏠 Main Sections
- **Home Page**: Featured games, categories, search functionality
- **Games Page**: Complete game library with filtering and search
- **Game Player Page**: Embedded HTML5 games with comments and ratings
- **Upload Page** (Admin Only): Add new games to the platform
- **Profile Page**: User stats, played games history, favorites
- **About/Contact**: Information about the platform

### 🎯 Key Functionalities

#### 🔍 Search & Discovery
- Real-time search across all games
- Category-based filtering (Action, Puzzle, Racing, Sports, Adventure, Strategy, Arcade, Multiplayer)
- Featured games showcase
- Popular games section

#### 🎮 Game Features
- **Play Button**: Instant game launch
- **Like/Favorite**: Save favorite games
- **Rating System**: 5-star rating
- **Comments**: User reviews and feedback
- **Play Counter**: Track game popularity
- **Restart Button**: Reload game
- **Share**: Share games with friends

#### 👤 User System
- **Email/Password Authentication**
- **Google OAuth Login**
- **User Profiles**: Track gaming history
- **Achievements & Rewards**: Unlock badges
- **Favorites System**: Save liked games

#### 🌙 Advanced Features
- **Dark/Light Mode**: Toggle themes
- **Responsive Design**: Mobile, tablet, desktop support
- **Loading Animations**: Smooth transitions
- **Background Music Control**: Audio settings
- **Firebase Integration**: Real-time database

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **CSS Modules** - Scoped styling
- **Vite** - Build tool

### Backend & Services
- **Firebase Authentication** - User management
- **Cloud Firestore** - Database
- **Firebase Storage** - Media storage
- **Firebase Hosting** - Deployment

## 📦 Installation

### Prerequisites
Before you begin, make sure you have:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Firebase Account** - [Create free account](https://firebase.google.com/)

### Step 1: Install Node.js and npm

If you don't have Node.js installed:

1. Download Node.js from https://nodejs.org/
2. Run the installer
3. Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd gaming-website
npm install
```

This will install:
- react
- react-dom
- react-router-dom
- firebase
- typescript
- vite
- And all development dependencies

### Step 3: Firebase Setup

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Follow the setup wizard

2. **Enable Services**:
   - **Authentication**: Enable Email/Password and Google Sign-In
   - **Firestore Database**: Create database in production mode
   - **Storage**: Enable for thumbnail uploads

3. **Get Configuration**:
   - Go to Project Settings > General
   - Scroll to "Your apps" > Web app
   - Copy the Firebase config object

4. **Update Configuration**:
   - Open `src/services/firebase.ts`
   - Replace the placeholder values with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 4: Firestore Security Rules

Set up security rules in Firebase Console > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /games/{gameId} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth.uid == userId;
    }
    
    match /comments/{commentId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Step 5: Storage Security Rules

Set up storage rules in Firebase Console > Storage > Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /thumbnails/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🏃 Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
gaming-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── GameCard.tsx
│   │   └── GameCard.module.css
│   ├── contexts/       # React contexts
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Games.tsx
│   │   ├── GamePlayer.tsx
│   │   ├── UploadGame.tsx
│   │   ├── Profile.tsx
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── About.tsx
│   ├── services/       # External services
│   │   └── firebase.ts
│   ├── utils/          # Utility functions
│   ├── types.ts        # TypeScript interfaces
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Changing Colors

Edit `src/index.css` to customize the color scheme:

```css
:root {
  --primary-color: #6366f1;     /* Main brand color */
  --secondary-color: #8b5cf6;   /* Secondary color */
  --accent-color: #ec4899;      /* Accent color */
  /* ... other colors */
}
```

### Adding New Game Categories

Edit `src/types.ts`:

```typescript
export type Category = 
  | 'All'
  | 'Action'
  | 'Puzzle'
  | 'YourNewCategory';  // Add here
```

## 🔐 Admin Access

To make a user an admin:

1. User must sign up first
2. Go to Firebase Console > Firestore Database
3. Find the user document in `users` collection
4. Set `isAdmin: true` field

## 📝 Adding Games

### As Admin:

1. Login with admin account
2. Navigate to `/upload`
3. Fill in the form:
   - **Game Title**: Name of the game
   - **Description**: Short description
   - **Category**: Select category
   - **Game URL**: Link to HTML5 game or iframe URL
   - **Thumbnail**: Upload game preview image
   - **Featured**: Mark as featured (optional)
4. Click "Publish Game"

### Supported Game Formats:
- HTML5 games
- Embedded iframes
- Any web-based game with a URL

## 🌐 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```
- Select "Hosting"
- Choose your project
- Set build directory to `dist`
- Configure as single-page app: Yes

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## 🐛 Troubleshooting

### Firebase Errors

**Error: "Firebase: Error (auth/configuration-not-found)"**
- Solution: Update Firebase configuration in `src/services/firebase.ts`

**Error: "Permission denied"**
- Solution: Check Firestore and Storage security rules

### Build Errors

**Error: "Cannot find module 'react'"**
- Solution: Run `npm install`

**TypeScript Errors**
- Solution: Run `npm install --save-dev @types/react @types/react-dom`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Icons: Emoji icons (native)
- Placeholder images: via.placeholder.com
- Framework: React + Vite
- Backend: Firebase

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Contact: support@crazygames.com
- Documentation: See Firebase docs

---

**Happy Gaming! 🎮**

Made with ❤️ using React, TypeScript, and Firebase
