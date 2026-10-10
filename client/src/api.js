const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://personal-portfolio-izr2.onrender.com'
  : 'http://localhost:5000';

export default API_BASE;
