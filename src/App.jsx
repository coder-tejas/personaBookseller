// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import BookImage from "./book.png";  // Use your own book image
import "./social.png"
function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BookStore</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>

      {/* Main Section */}
      <div className="main-section">
        <div className="text-section">
          <h1>Your Mind Deserves the Best Books</h1>
          <p>
            Discover a world of knowledge with our curated selection of books. Whether you're into fiction or non-fiction, we've got something for everyone.
          </p>
          <div className="button-group">
            <button className="shop-now">Shop Now</button>
            <button className="category-btn">Categories</button>
          </div>
          <div className="available-section">
            <p>Also Available On</p>
            <div className="store-icons">
              <img src="./social.png" alt="Amazon" />
              <img src="kindle-icon.png" alt="Kindle" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={BookImage} alt="Book" />
        </div>
      </div>
    </div>
  );
}

export default App;
