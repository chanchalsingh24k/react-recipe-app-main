import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'layout';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { auth } from './firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/FavRecipes';
import NotFound from './pages/NotFound';
import SingleRecipe from './pages/SingleRecipe';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <MainLayout>
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={
              <ProtectedRoute>
                <SingleRecipe />
              </ProtectedRoute>
            } />
            <Route path="/favorites" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </MainLayout>
  );
}

export default App;
