// HOME
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

// Highlight the leading team's score
function updateLeadingHighlight() {
  // Remove highlight from both
  homeScoreEl.classList.remove("leading");
  guestScoreEl.classList.remove("leading");
  // Add highlight to the team with higher score
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("leading");
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("leading");
  }
  // If tied, no highlight
}

function addHomeOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  updateLeadingHighlight(); // Update highlight after score change
}

function addHomeTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  updateLeadingHighlight();
}

function addHomeThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  updateLeadingHighlight();
}


function addGuestOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  updateLeadingHighlight();
}

function addGuestTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  updateLeadingHighlight();
}

function addGuestThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  updateLeadingHighlight();
}

// RESET
function resetScore() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  updateLeadingHighlight(); // Remove highlight on reset
}
