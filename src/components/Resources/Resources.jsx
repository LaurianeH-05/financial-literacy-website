import React, { useState } from "react";
import "./Resources.css";

export default function Resources() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <nav className="main-navigation">
          <ul>
            <li className="header-item"><a href="/">Home</a></li>
            <li className="header-item"><a href="#">About</a></li>
            <li className="header-item"><a href="/resources">Resources</a></li>
            <li className="header-item"><a href="/petition">Petition</a></li>
          </ul>
          <button className="mode-btn" onClick={toggleDarkMode}>
            {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
          </button>
        </nav>
      </header>

      <section className="revealable">
        <h2>Welcome to Financial Literacy for Teens!</h2>
        <p>
          Managing your money can seem overwhelming at first, but with the right tools and
          knowledge, you can take control of your financial future. Here, we provide
          resources and tips for smart money management, investing, and saving.
        </p>
      </section>

      <section className="revealable">
        <h3>Links to Free Apps for Budgeting and Tracking Your Spending</h3>
        <ul>
          <li>
            <a href="https://www.mint.com" target="_blank" rel="noopener noreferrer">
              Mint - Budgeting & Bill Tracking
            </a>
          </li>
          <li>
            <a href="https://www.youneedabudget.com" target="_blank" rel="noopener noreferrer">
              YNAB (You Need A Budget) - Budgeting Tool for Teens
            </a>
          </li>
          <li>
            <a href="https://www.everydollar.com" target="_blank" rel="noopener noreferrer">
              EveryDollar - Create and track your budget easily
            </a>
          </li>
        </ul>
      </section>

      <section className="revealable">
        <h3>High-Yield Savings Accounts (HYSA) Recommendations</h3>
        <ul>
          <li>
            <a href="https://www.ally.com" target="_blank" rel="noopener noreferrer">
              Ally Bank - A top choice for HYSAs with competitive rates
            </a>
          </li>
          <li>
            <a href="https://www.capitalone.com" target="_blank" rel="noopener noreferrer">
              Capital One 360 - Easy to use with no fees
            </a>
          </li>
        </ul>
      </section>

      <section className="revealable">
        <h3>Understanding Compound Interest</h3>
        <img
          src="/images/Compound interest.jpg"
          alt="Visualization of compound interest"
          id="credit-card-visualizer"
        />
      </section>

      <section className="revealable">
        <h3>Financial Literacy Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.investopedia.com/terms/f/financial-literacy.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Investopedia - Financial Literacy
            </a>
          </li>
          <li>
            <a
              href="https://www.khanacademy.org/college-careers-more/personal-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khan Academy - Personal Finance Courses
            </a>
          </li>
        </ul>
      </section>

      <section className="revealable">
        <h3>Smart Budgeting Tips</h3>
        <ul>
          <li>
            <strong>Pay Yourself First:</strong> Always set aside a portion of your income for
            savings before spending.
          </li>
        </ul>
      </section>

      <section className="revealable">
        <h3>Investing for Teens: Why Start Early?</h3>
        <ul>
          <li>
            <strong>Compound Interest:</strong> Compound interest works best when you have time
            on your side.
          </li>
        </ul>
      </section>

      <div id="modal" className="modal">
        <div className="modal-content">
          <span id="closeModal" className="close-btn">
            &times;
          </span>
          <p id="modalMessage"></p>
          <img
            src="images/Compound interest.jpg"
            alt="Modal Animation"
            className="modal-image"
          />
        </div>
      </div>
    </div>
  );
}
