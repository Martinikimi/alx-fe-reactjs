# React Router Advanced - ALX Project

This project demonstrates advanced routing techniques in React using React Router v6, including nested routes, dynamic routing, and protected routes.

## Project Overview

The application showcases three main routing concepts:
- **Nested Routes**: Profile section with Details and Settings sub-pages
- **Dynamic Routes**: Blog posts with variable URLs (/blog/:postId)
- **Protected Routes**: Profile pages that require authentication

## Features

### 1. Nested Routes (/profile)
- Parent route with shared layout
- Nested routes for ProfileDetails and ProfileSettings
- Outlet component for rendering nested content
- Active link styling for navigation

### 2. Dynamic Routes (/blog/:postId)
- URL parameters with useParams hook
- Programmatic navigation with useNavigate
- Dynamic content based on route parameters
- Back navigation functionality

### 3. Protected Routes
- Authentication context using Context API
- ProtectedRoute wrapper component
- Redirect unauthenticated users to login
- Preserve intended destination with state

### 4. Additional Features
- Layout component with persistent navbar
- 404 redirect for unknown routes
- Active link highlighting with NavLink
- Loading states and error handling
- Responsive design

## Technologies Used

- React 18
- React Router v6
- Context API for Auth
- Vite (build tool)
- CSS3 (vanilla CSS)

## Installation & Setup

1. **Create the project:**
```bash
npm create vite@latest react-router-advanced -- --template react
cd react-router-advanced
