// Unlimited quiet quotes
const quotes = [
  '"Silence is a source of great strength." – Lao Tzu',
  '"Being alone has a power very few can handle." – Steven Aitchison',
  '"Introverts live in two worlds: We visit the world of people, but solitude and quiet is our home." – Jenn Granneman',
  '"You’re allowed to be both a masterpiece and a work in progress." – Sophia Bush',
  '"The quieter you become, the more you can hear." – Ram Dass',
  '"My imagination functions much better when I don’t have to speak to people." – Patricia Highsmith',
  '"Sometimes quiet is violent." – Tyler Joseph',
  '"I restore myself when I’m alone." – Marilyn Monroe',
  '"Solitude is creativity’s best friend." – Susan Cain',
  '"A little hibernation never hurt an introvert." – Unknown',
  '"I’m not anti-social, I’m pro-quiet." – Unknown',
  '"Calmness is the cradle of power." – Josiah Gilbert Holland',
  '"Quiet people have the loudest minds." – Stephen Hawking',
  // 🔁 You can keep adding quotes infinitely here
];

let lastQuoteIndex = -1;

// Function to change the quote, ensuring it doesn’t repeat immediately
function changeQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastQuoteIndex); // Avoid repeat
  lastQuoteIndex = newIndex;
  document.getElementById("quote").textContent = quotes[newIndex];
}

// Optional: Automatic quote rotation every 10 seconds
let autoQuote = false; // Set to true to enable auto-rotation
if (autoQuote) {
  setInterval(changeQuote, 10000); // Change every 10 seconds
}


function changeQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

function shareProblem() {
  const input = document.getElementById("problemInput");
  const value = input.value.trim();

  if (value) {
    const li = document.createElement("li");
    li.textContent = `"${value}"`;
    document.getElementById("problemList").appendChild(li);
    input.value = "";
  }
}
// Initialize Web Audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Define soft notes (in Hz)
const notes = [261.63, 293.66, 329.63, 349.23, 392.00]; // C, D, E, F, G
let noteIndex = 0;

// Play a soft sad note
function playNote(freq, duration = 1) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine'; // Soft and smooth
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime); // volume

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Create a looping song
function playSadLoop() {
  setInterval(() => {
    playNote(notes[noteIndex], 2);
    noteIndex = (noteIndex + 1) % notes.length;
  }, 2500);
}

// Start on user interaction (required by browsers)
document.addEventListener("click", () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  playSadLoop();
}, { once: true }); // Only start once




