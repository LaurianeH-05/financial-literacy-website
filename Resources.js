let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '0.6s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
};

let revealableContainers = document.querySelectorAll('.revealable');
let reduceMotionBtn = document.getElementById('reduceMotion');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('closeModal');
let modalMessage = document.getElementById('modalMessage');

function reveal() {
  let windowHeight = window.innerHeight;
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - 100) {
      revealableContainers[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal();

reduceMotionBtn.addEventListener('click', () => {
  document.body.style.transition = 'none';
  let sections = document.querySelectorAll('.revealable');
  sections.forEach((section) => {
    section.style.transition = 'none';
  });
});

function showModal(message) {
  modal.style.display = 'block';
  modalMessage.textContent = message;
  setTimeout(() => {
    modal.style.display = 'none';
  }, 5000);
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  showModal('Thank you for your submission!');
});