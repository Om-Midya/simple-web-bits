const greetings = [
  'Hope you are having a productive day!',
  'Remember to take small breaks and stay hydrated.',
  'Great things never come from comfort zones.',
  'Every line of code counts—keep going!'
];

const messageEl = document.getElementById('message');
const refreshBtn = document.getElementById('refresh');

function randomGreeting() {
  const index = Math.floor(Math.random() * greetings.length);
  return greetings[index];
}

function updateGreeting() {
  messageEl.textContent = randomGreeting();
}

refreshBtn.addEventListener('click', updateGreeting);

updateGreeting();
