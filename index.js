// HOME
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

// GUEST
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

// Update leading score highlighting
function updateLeading() {
  homeScoreEl.classList.remove("leading");
  guestScoreEl.classList.remove("leading");
  
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("leading");
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("leading");
  }
}

function addHomeOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  updateLeading();
}

function addHomeTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  updateLeading();
}

function addHomeThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  updateLeading();
}

function addGuestOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  updateLeading();
}

function addGuestTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  updateLeading();
}

function addGuestThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  updateLeading();
}

// RESET
function resetScore() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  updateLeading();
}

// Make functions globally available for onclick handlers
window.addHomeOne = addHomeOne;
window.addHomeTwo = addHomeTwo;
window.addHomeThree = addHomeThree;
window.addGuestOne = addGuestOne;
window.addGuestTwo = addGuestTwo;
window.addGuestThree = addGuestThree;
window.resetScore = resetScore;
