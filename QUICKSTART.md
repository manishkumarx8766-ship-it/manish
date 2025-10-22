# 🚀 Quick Start Guide

## Prerequisites Check

Before starting, verify you have Node.js installed:

```bash
node --version
# Should show v16.0.0 or higher
```

If not installed, download from: https://nodejs.org/

## Installation Steps

### 1. Install Dependencies

```bash
cd gaming-website
npm install
```

**Note**: This may take a few minutes on first install.

### 2. Firebase Setup (Required)

#### Create Firebase Project:
1. Go to https://console.firebase.google.com/
2. Click "Add Project" or "Create a project"
3. Enter project name (e.g., "my-gaming-site")
4. Disable Google Analytics (optional)
5. Click "Create project"

#### Enable Authentication:
1. In Firebase Console, go to **Build > Authentication**
2. Click "Get started"
3. Enable **Email/Password** sign-in method
4. Enable **Google** sign-in method
5. Save changes

#### Create Firestore Database:
1. Go to **Build > Firestore Database**
2. Click "Create database"
3. Select "Start in **production mode**"
4. Choose a location closest to you
5. Click "Enable"

#### Enable Storage:
1. Go to **Build > Storage**
2. Click "Get started"
3. Start in **production mode**
4. Click "Done"

#### Get Your Config:
1. Go to **Project Settings** (gear icon)
2. Scroll to "Your apps" section
3. Click the **Web** icon `</>`
4. Register app with a nickname
5. **Copy the firebaseConfig object**

#### Update Your Code:
Open `src/services/firebase.ts` and replace:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 3. Run the Application

```bash
npm run dev
```

The app will open at: http://localhost:3000

## First Time Usage

### 1. Create Your Account
- Click "Sign Up" in the header
- Create an account with email/password OR use Google Sign-In

### 2. Make Yourself Admin (Optional)
To upload games, you need admin access:

1. Go to Firebase Console > Firestore Database
2. Click on the `users` collection
3. Find your user document (it will have your email)
4. Click on it
5. Click "Add field"
   - Field: `isAdmin`
   - Type: `boolean`
   - Value: `true`
6. Save

### 3. Upload Your First Game
1. Login as admin
2. Click "Upload Game" in the navigation
3. Fill in the form:
   - Title: "My First Game"
   - Description: "A fun game to play"
   - Category: Select one
   - Game URL: Any HTML5 game URL or use: `https://tbot.xyz/math/`
   - Upload a thumbnail image
4. Click "Publish Game"

## Common Issues & Solutions

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Firebase errors on startup
**Solution**: Make sure you updated `src/services/firebase.ts` with your actual config

### Issue: "Permission denied" when uploading
**Solution**: 
1. Check you set `isAdmin: true` in Firestore
2. Verify Firebase Storage rules are set correctly

### Issue: TypeScript errors in IDE
**Solution**: These are expected until dependencies are installed. Run `npm install`

### Issue: Port 3000 already in use
**Solution**: The app will automatically try port 3001, 3002, etc.

## Testing the Features

### Test Search
1. Go to Home page
2. Use the search bar to search for games
3. Results will filter in real-time

### Test Dark Mode
1. Click the sun/moon icon in the header
2. Theme should toggle between light and dark

### Test Game Playing
1. Click on any game card
2. Game should load in an iframe
3. Try the "Restart" button
4. Leave a comment and rating

### Test Filters
1. Go to "Games" page
2. Click on different categories
3. Games should filter by category

## Next Steps

1. **Add Real Games**: Upload actual HTML5 games or use embedding URLs
2. **Customize Design**: Edit colors in `src/index.css`
3. **Add More Features**: Extend the codebase as needed
4. **Deploy**: Follow deployment instructions in README.md

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run tsc
```

## Getting Help

- Check README.md for detailed documentation
- Check Firebase Console for database/auth issues
- Check browser console (F12) for error messages

## Demo Credentials

For testing without Firebase setup, the app includes mock data. However, for full functionality including:
- User authentication
- Game uploads
- Comments
- Persistence

You MUST set up Firebase as described above.

---

**You're all set! Happy coding! 🎮**
