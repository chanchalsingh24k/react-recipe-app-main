import React, { useState } from 'react';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import loginImg from '../assets/login_img.jpg';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the recipe ID from the location state if it exists
  const recipeId = location.state?.recipeId;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Redirect to the recipe page if a recipe ID was passed, otherwise go to home
      if (recipeId) {
        navigate(`/recipe/${recipeId}`);
      } else {
        navigate('/');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <img src={loginImg} alt="Login background" />
      </div>
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-title">Welcome Back</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 