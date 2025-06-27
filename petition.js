const modeBtn = document.querySelector('.mode-btn');
const reduceMotionBtn = document.querySelector('.reduce-motion-btn');
const signNow = document.querySelector('#sign-now-btn');
const userName = document.querySelector('.user-name');
const userLocation = document.querySelector('.user-location');
const signatures = document.querySelector('.signatures');
const signatureCount = document.getElementById('signature-count');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const personalizedMessage = document.getElementById('personalized-message');
const animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};

let count = 2;
let reduceMotion = false; // Default value for reduce motion

// Set light mode by default on page load
document.body.classList.add('light-mode');
modeBtn.textContent = 'Toggle Dark Mode';  // Initial text for the button

// Function to toggle dark and light mode
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');  // Toggle dark mode
  document.body.classList.toggle('light-mode');  // Ensure light mode is toggled off when dark mode is on
  // Update the button text based on current mode
  if (document.body.classList.contains('dark-mode')) {
    modeBtn.textContent = 'Toggle Light Mode';  // Update button text
  } else {
    modeBtn.textContent = 'Toggle Dark Mode';  // Update button text back
  }
});

// Add Signature
const addSignature = () => {
    const name = userName.value.trim();
    const location = userLocation.value.trim();
    const signatureElement = document.createElement('p');
    signatureElement.classList.add('signature');
    if (name && location) {
        signatureElement.textContent = `🖊️ ${name} from ${location} supports this.`;
        signatureElement.classList.add('valid');
        signatures.appendChild(signatureElement);
        count += 1;
        signatureCount.textContent = count;
        userName.value = '';
        userLocation.value = '';
        showModal(name, location); // Show modal after signing
    } else {
        signatureElement.textContent = `🖊️ Invalid signature. Please provide both name and location.`;
        signatureElement.classList.add('invalid');
        signatures.appendChild(signatureElement);
    }
};

// Show Modal with Personalized Message
const showModal = (name, location) => {
    personalizedMessage.textContent = `Thank you, ${name} from ${location}, for signing!`;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000); // Modal disappears after 5 seconds
};

// Close Modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Reduce Motion Feature
reduceMotionBtn.addEventListener('click', () => {
    reduceMotion = !reduceMotion;
    if (reduceMotion) {
        document.body.classList.add('reduce-motion');
    } else {
        document.body.classList.remove('reduce-motion');
    }
});

// Scroll Animation Logic
const revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < revealableContainers.length; i++) {
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance && !reduceMotion) {
            revealableContainers[i].classList.add('active');
        } else {
            revealableContainers[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Signing Button Event Listener
signNow.addEventListener('click', (e) => {
    e.preventDefault();
    addSignature();
});

// Initial call to reveal function on page load
reveal();
