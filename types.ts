// Game Interface
export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  gameUrl: string;
  rating: number;
  plays: number;
  likes: number;
  createdAt: Date;
  uploadedBy: string;
  featured: boolean;
}

// User Interface
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  playedGames: string[];
  favorites: string[];
  achievements: Achievement[];
  createdAt: Date;
  isAdmin: boolean;
}

// Comment Interface
export interface Comment {
  id: string;
  gameId: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  text: string;
  rating: number;
  createdAt: Date;
}

// Achievement Interface
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

// Category Type
export type Category = 
  | 'All'
  | 'Action'
  | 'Puzzle'
  | 'Racing'
  | 'Sports'
  | 'Adventure'
  | 'Strategy'
  | 'Arcade'
  | 'Multiplayer';

// Theme Type
export type Theme = 'light' | 'dark';
