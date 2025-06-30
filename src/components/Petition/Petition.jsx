import React, { useState, useEffect } from 'react';
import './Petition.css';

export default function Petition() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [signatures, setSignatures] = useState([
    { name: 'DJ', location: 'Brooklyn', valid: true },
    { name: 'Amy', location: 'Queens', valid: true },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [contactInput, setContactInput] = useState('');

  useEffect(() => {
    if (reduceMotion) return;

    function reveal() {
      const revealableContainers = document.querySelectorAll('.revealable');
      const windowHeight = window.innerHeight;

      revealableContainers.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 150) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, [reduceMotion]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleReduceMotion = () => setReduceMotion((prev) => !prev);

  const addSignature = (e) => {
    e.preventDefault();

    const trimmedName = nameInput.trim();
    const trimmedLocation = locationInput.trim();

    if (trimmedName && trimmedLocation) {
      const newSignature = {
        name: trimmedName,
        location: trimmedLocation,
        valid: true,
      };
      setSignatures((prev) => [...prev, newSignature]);
      setModalMessage(`Thank you, ${trimmedName} from ${trimmedLocation}, for signing!`);
      setModalVisible(true);
      setNameInput('');
      setLocationInput('');
      setContactInput('');
    } else {
      const invalidSignature = {
        name: 'Invalid signature. Please provide both name and location.',
        location: '',
        valid: false,
      };
      setSignatures((prev) => [...prev, invalidSignature]);
    }
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'} ${reduceMotion ? 'reduce-motion' : ''}`}>
      <h2>Equip the Next Generation</h2>
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
          <button className="reduce-motion-btn" onClick={toggleReduceMotion}>
            {reduceMotion ? 'Disable Reduce Motion' : 'Reduce Motion'}
          </button>
        </nav>
      </header>

      <div className="petition">
        <h3>Sign Our Petition 📢</h3>
        <div className="petition-container">
          <div className="petition-para revealable">
            <p>Sign this petition to help empower teens for financial success!</p>
          </div>
          <div className="signatures revealable">
            {signatures.map((sig, idx) => (
              <p
                key={idx}
                className={sig.valid ? 'signature valid' : 'signature invalid'}
              >
                {sig.valid ? `🖊️ ${sig.name} from ${sig.location} supports this.` : sig.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="petition-container revealable">
        <form id="sign-petition" title="sign-petition" onSubmit={addSignature}>
          <label htmlFor="userName">Full Name:</label>
          <input
            id="userName"
            type="text"
            className="user-name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
          />

          <label htmlFor="userLocation">Location:</label>
          <input
            id="userLocation"
            type="text"
            className="user-location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />

          <label htmlFor="contactInfo">Contact Info:</label>
          <input
            id="contactInfo"
            type="date"
            value={contactInput}
            onChange={(e) => setContactInput(e.target.value)}
          />

          <input type="submit" id="sign-now-btn" value="Sign Now" />
          <input type="reset" onClick={() => {
            setNameInput('');
            setLocationInput('');
            setContactInput('');
          }} />
        </form>
      </div>

      <div className="petition-container revealable">
        <h3>Total Signatures: <span id="signature-count">{signatures.filter(s => s.valid).length}</span></h3>
      </div>

      <div className="footer-container">
        <footer>
          <nav className="footer-navigation">
            <p id="copyrights">&copy; 2024 Financial Literacy for Teens. All rights reserved.</p>
            <ul>
              <li className="footer-item"><a href="#">Privacy Policy</a></li>
              <li className="footer-item"><a href="#">Terms of Service</a></li>
              <li className="footer-item"><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </footer>
      </div>

      {modalVisible && (
        <div id="modal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <h4>Your Petition Has Been Submitted!</h4>
            <p id="personalized-message">{modalMessage}</p>
            <img id="modal-image" src="images/modal-image.jpg" alt="Success" />
            <button id="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
