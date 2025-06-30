import React, { useState } from 'react';
import '../../globals.css';

export default function Homepage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log("Homepage rendered");

  function toggleMode() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="header-container">
        <header>
          <h1 id="main-title">Financial Literacy for Teens: Empowering the Next Generation</h1>
          <nav className="main-navigation">
            <ul>
              <li className="header-item"><a href="#">Home</a></li>
              <li className="header-item"><a href="#">About</a></li>
              <li className="header-item"><a href="Resources.jsx">Resources</a></li>
              <li className="header-item"><a href="petition.jsx">Petition</a></li>
            </ul>
            <button className="mode-btn" onClick={toggleMode}>
              {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            </button>
          </nav>
          <p className="tagline">Empowering teens with financial knowledge</p>
          <div className="header-button">
            <button className="user-btn">Login</button>
            <button className="user-btn">SignUp</button>
          </div>
          <div id="header-img">
            <img
              src={isDarkMode ? '/images/dark-mode-cat.gif' : '/images/light-mode-cat.gif'}
              alt="a cute cat gif"
              className="cat-gif"
              id="cat-image"
            />
          </div>
        </header>
      </div>

      <div className="content-container">
        <h3>Short Description:</h3>
        <p>
          Our Financial Literacy for Teens website is dedicated to equipping young people with the essential tools and knowledge to make smart financial decisions.
          From budgeting and saving to understanding credit, we provide resources to help teens confidently manage their money and secure a financially stable future. Coming soon!
        </p>

        <h3>About Our Mission:</h3>
        <p>
          In today's world, managing money wisely is a crucial skill, yet many young people enter adulthood without a clear understanding of how to handle their finances.
          Our goal is to bridge this gap by offering teens accessible and practical guidance on personal finance topics that matter most.
          Whether it's building good credit, saving for a first car, or understanding the basics of taxes, we aim to demystify the complexities of financial management for teenagers.
        </p>

        <h3>Why Financial Literacy Matters for Teens:</h3>
        <p>
          Financial literacy sets the foundation for a healthy financial future. When teens learn how to budget, save, and invest early,
          they develop habits that will serve them well into adulthood.
          Unfortunately, many teens aren't taught these skills in school, leaving them unprepared for real-world financial responsibilities.
          Our website provides a solution by offering easy-to-understand resources and tools tailored specifically to young people.
        </p>

        <h3>What You Can Expect:</h3>
        <p>
          Our site will feature engaging articles, interactive tools, and real-life scenarios to help teens navigate key financial decisions.
          From managing allowance money to setting long-term financial goals, we’re committed to helping teens take control of their financial futures.
          The content will grow with your needs, tackling more advanced topics as you progress on your financial journey.
          We're here to help you start building a strong financial foundation now so that you can achieve your dreams later.
        </p>

        <img
          src="/images/visualizer.png"
          alt="picture of financial literacy circle"
          id="circle-visualizer"
        />
        <figcaption className="caption">an illustration of topics to be discussed.</figcaption>

        <img
          src="/images/image.png"
          alt="brief visualisation of tips for credit cards"
          id="credit-card-visualizer"
        />
        <figcaption className="caption">
          an illustration of tips we will be going over regarding credit cards.
        </figcaption>
      </div>

      <div className="footer-container">
        <footer>
          <nav className="footer-navigation">
            <p id="copyrights">© 2024 Financial Literacy for Teens. All rights reserved.</p>
            <ul>
              <li className="footer-item"><a href="#">Privacy Policy</a></li>
              <li className="footer-item"><a href="#">Terms of Service</a></li>
              <li className="footer-item"><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
