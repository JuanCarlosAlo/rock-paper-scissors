const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const container = document.getElementById('container');

const movesOptions = ['paper', 'scissors', 'rock'];

const pcMoves = () => {
  let move = '';

  move =
    move +
    console.log(movesOptions[Math.floor(Math.random() * movesOptions.length)]);
};

container.addEventListener('click', e => {
  if (e.target.tagName === 'IMG' || e.target.classList.contains('game-item')) {
    pcMoves();
  }
});
