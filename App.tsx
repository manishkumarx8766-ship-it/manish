import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';

// Lazy load other pages for better performance
const Games = React.lazy(() => import('./pages/Games'));
const GamePlayer = React.lazy(() => import('./pages/GamePlayer'));
const UploadGame = React.lazy(() => import('./pages/UploadGame'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const About = React.lazy(() => import('./pages/About'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Header />
            <main>
              <React.Suspense fallback={
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  minHeight: '100vh',
                  fontSize: '1.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  Loading...
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/game/:id" element={<GamePlayer />} />
                  <Route path="/upload" element={<UploadGame />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </React.Suspense>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
