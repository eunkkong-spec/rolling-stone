const mickFrames = [
  'images/walk/01_contact_4-1.png',
  'images/walk/02_down_4-3.png',
  'images/walk/03_passing_1-r3c3.png',
  'images/walk/04_opposite_1-r3c2.png'
];

mickFrames.forEach(src => {
  const frame = new Image();
  frame.src = src;
});

const mick = document.getElementById('mick');
let mickFrame = 0;
let mickTimer = null;

function startWalk() {
  if (!mick || mickTimer) return;
  mickFrame = 0;
  mick.src = mickFrames[mickFrame];
  mickTimer = setInterval(() => {
    mickFrame = (mickFrame + 1) % mickFrames.length;
    mick.src = mickFrames[mickFrame];
  }, 450);
}

function stopWalk() {
  if (mickTimer) clearInterval(mickTimer);
  mickTimer = null;
  mickFrame = 0;
  if (mick) mick.src = mickFrames[0];
}
