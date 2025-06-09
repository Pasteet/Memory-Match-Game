// Select language
const languageSelect = document.getElementById('language');

// Pair input reference
const pairCountInput = document.getElementById('pairCount');
const gameArea = document.getElementById('game-area');


// Defining word-image pairs
const categories = {
    lv:{
        animals: [
            { id: "kaķis", word: "kaķis", image: "assets/images/animals/cat.png" },
            { id: "suns", word: "suns", image: "assets/images/animals/dog.png" },
            { id: "govs", word: "govs", image: "assets/images/animals/cow.png" },
            { id: "zirgs", word: "zirgs", image: "assets/images/animals/horse.png" },
            { id: "vilks", word: "vilks", image: "assets/images/animals/wolf.png" },
            { id: "brieži", word: "brieži", image: "assets/images/animals/deer.png" },
            { id: "aļņi", word: "aļņi", image: "assets/images/animals/moose.png" },
            { id: "mežacūka", word: "mežacūka", image: "assets/images/animals/boar.png" },
            { id: "lapsa", word: "lapsa", image: "assets/images/animals/fox.png" },
            { id: "trusis", word: "trusis", image: "assets/images/animals/rabbit.png" },
            { id: "vāvere", word: "vāvere", image: "assets/images/animals/squirrel.png" },
            { id: "bebrs", word: "bebrs", image: "assets/images/animals/beaver.png" },
            { id: "lācis", word: "lācis", image: "assets/images/animals/bear.png" },
            { id: "pīle", word: "pīle", image: "assets/images/animals/duck.png" },
            { id: "žurka", word: "žurka", image: "assets/images/animals/rat.png" },
        ],
        furniture: [
            { id: "gulta" , word: "gulta", image: "assets/images/furniture/bed.png" },
            { id: "krēsls" , word: "krēsls", image: "assets/images/furniture/chair.png" },
            { id: "kafijas galdiņš" , word: "kafijas galdiņš", image: "assets/images/furniture/coffee_table.png" },
            { id: "galds" , word: "galds", image: "assets/images/furniture/table.png" },
            { id: "dīvāns" , word: "dīvāns", image: "assets/images/furniture/couch.png" },
            { id: "rakstāmgalds" , word: "rakstāmgalds", image: "assets/images/furniture/desk.png" },
            { id: "grāmatu plaukts" , word: "grāmatu plaukts", image: "assets/images/furniture/bookshelf.png" },
            { id: "spogulis" , word: "spogulis", image: "assets/images/furniture/mirror.png" },
            { id: "lampa" , word: "lampa", image: "assets/images/furniture/lamp.png" },
            { id: "galda lampa" , word: "galda lampa", image: "assets/images/furniture/desk_lamp.png" },
            { id: "biroja krēsls" , word: "biroja krēsls", image: "assets/images/furniture/office_chair.png" },
            { id: "plaukts" , word: "plaukts", image: "assets/images/furniture/shelf.png" },
            { id: "logs" , word: "logs", image: "assets/images/furniture/window.png" },
            { id: "spilvens" , word: "spilvens", image: "assets/images/furniture/pillow.png" },
            { id: "atvilktne" , word: "atvilktne", image: "assets/images/furniture/drawer.png" },
        ],
    },

    et:{
        animals: [
        { id: "kass", word: "kass", image: "assets/images/animals/cat.png" },
        { id: "koer", word: "koer", image: "assets/images/animals/dog.png" },
        { id: "lehm", word: "lehm", image: "assets/images/animals/cow.png" },
        { id: "hobune", word: "hobune", image: "assets/images/animals/horse.png" },
        { id: "hunt", word: "hunt", image: "assets/images/animals/wolf.png" },
        { id: "hirv", word: "hirv", image: "assets/images/animals/deer.png" },
        { id: "põder", word: "põder", image: "assets/images/animals/moose.png" },
        { id: "metssiga", word: "metssiga", image: "assets/images/animals/boar.png" },
        { id: "rebane", word: "rebane", image: "assets/images/animals/fox.png" },
        { id: "jänes", word: "jänes", image: "assets/images/animals/rabbit.png" },
        { id: "orav", word: "orav", image: "assets/images/animals/squirrel.png" },
        { id: "kobras", word: "kobras", image: "assets/images/animals/beaver.png" },
        { id: "karu", word: "karu", image: "assets/images/animals/bear.png" },
        { id: "part", word: "part", image: "assets/images/animals/duck.png" },
        { id: "rott", word: "rott", image: "assets/images/animals/rat.png" },
    ],
    furniture: [
        { id: "voodi" , word: "voodi", image: "assets/images/furniture/bed.png" },
        { id: "tool" , word: "tool", image: "assets/images/furniture/chair.png" },
        { id: "kohvilaud" , word: "kohvilaud", image: "assets/images/furniture/coffee_table.png" },
        { id: "laud" , word: "laud", image: "assets/images/furniture/table.png" },
        { id: "diivan" , word: "diivan", image: "assets/images/furniture/couch.png" },
        { id: "töölaud" , word: "töölaud", image: "assets/images/furniture/desk.png" },
        { id: "raamaturiiul" , word: "raamaturiiul", image: "assets/images/furniture/bookshelf.png" },
        { id: "peegel" , word: "peegel", image: "assets/images/furniture/mirror.png" },
        { id: "lamp" , word: "lamp", image: "assets/images/furniture/lamp.png" },
        { id: "laualamp" , word: "laualamp", image: "assets/images/furniture/desk_lamp.png" },
        { id: "kontoritool" , word: "kontoritool", image: "assets/images/furniture/office_chair.png" },
        { id: "riiul" , word: "riiul", image: "assets/images/furniture/shelf.png" },
        { id: "aken" , word: "aken", image: "assets/images/furniture/window.png" },
        { id: "padi" , word: "padi", image: "assets/images/furniture/pillow.png" },
        { id: "sahtel" , word: "sahtel", image: "assets/images/furniture/drawer.png" },
    ],
    }
    
};

// UI elements and start game
const startBtn = document.getElementById('startBtn');
const categorySelect = document.getElementById('category');
const gameBoard = document.getElementById('game-board');

let flippedCards = [];
let matchedPairs = [];

startBtn.addEventListener('click', startGame);




// Start game function
function startGame() {
  const language = languageSelect.value;
  const category = categorySelect.value;
  const requestedPairs = parseInt(pairCountInput.value);

  const languageCategories = categories[language];
  if (!languageCategories || !languageCategories[category]) {
    gameBoard.innerHTML = `<p>No data available for this language and category.</p>`;
    return;
  }

  const allItems = languageCategories[category];
  const totalAvailable = allItems.length;

  if (requestedPairs > totalAvailable) {
    gameBoard.innerHTML = `<p>❗ Only ${totalAvailable} pairs available in this category.</p>`;
    return;
  }

  document.getElementById('options-panel').classList.add('hidden');

  const shuffled = [...allItems];
  shuffle(shuffled);
  const selectedItems = shuffled.slice(0, requestedPairs);


  gameBoard.innerHTML = '';
  flippedCards = [];
  matchedPairs = [];

  const cards = [];

  selectedItems.forEach(item => {
    cards.push({ type: 'word', value: item.word, id: item.id });
    cards.push({ type: 'image', value: item.image, id: item.id });
  });

  shuffle(cards);

  cards.forEach((card, index) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.type = card.type;
    div.dataset.value = card.value;
    div.dataset.index = index;

    const handler = () => flipCard(div, card);
    div._clickHandler = handler;
    div.addEventListener('click', handler);

    gameBoard.appendChild(div);
  });
}



// Card flipping and matching logic
function flipCard(div, card) {
  if (div.classList.contains('flipped') || div.classList.contains('matched') || flippedCards.length === 2) return;

  div.classList.add('flipped');

  // Set content based on type
  if (card.type === 'word') {
    div.innerHTML = card.value;
  } else {
    const img = document.createElement('img');
    img.src = card.value;
    img.style.maxHeight = '80px';
    div.innerHTML = ''; // clear in case of re-use
    div.appendChild(img);
  }

  flippedCards.push({ div, card });

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}


function checkMatch() {
  const [first, second] = flippedCards;

  const isMatch =
    first.card.type !== second.card.type &&
    first.card.id === second.card.id;

  if (isMatch) {
    // Generate a shared color for the pair
    const pairColor = getRandomColor();

    // Apply the border color to both matched cards
    first.div.style.border = `4px solid ${pairColor}`;
    second.div.style.border = `4px solid ${pairColor}`;

    first.div.classList.add('matched');
    second.div.classList.add('matched');

    first.div.removeEventListener('click', first.div._clickHandler);
    second.div.removeEventListener('click', second.div._clickHandler);

    matchedPairs.push(first, second);
    flippedCards = [];

    const matchedPairCount = matchedPairs.length / 2;
    const totalPairs = document.querySelectorAll('.card').length / 2;

    if (matchedPairCount === totalPairs) {
        const winMessage = document.getElementById('win-message');
        winMessage.innerHTML = `
        🎉 You matched all ${totalPairs} pairs! Well done!<br>
        <button id="newGameBtn">🔄 New Game</button>
        `;
        winMessage.classList.remove('hidden');

        // Attach handler to the new button
        document.getElementById('newGameBtn').addEventListener('click', resetGame);
    } 
  }
  else {
        setTimeout(() => {
        first.div.classList.remove('flipped');
        second.div.classList.remove('flipped');
        first.div.innerHTML = '';
        second.div.innerHTML = '';
        flippedCards = [];
        }, 800);
    }
}

function resetGame() {
  // Clear board and message
  gameBoard.innerHTML = '';
  document.getElementById('win-message').classList.add('hidden');
  document.getElementById('win-message').innerHTML = '';

  // Show options
  document.getElementById('options-panel').classList.remove('hidden');

  // Reset state
  flippedCards = [];
  matchedPairs = [];
}


// Shuffle helper function
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


// Random border color helper function
let usedHues = [];

function getRandomColor() {
  if (usedHues.length >= 360 / 30) {
    usedHues = []; // Reset after enough unique colors
  }

  let hue;
  do {
    hue = Math.floor(Math.random() * 12) * 30; // steps of 30° on hue wheel -> MAX 12 pairs
  } while (usedHues.includes(hue));

  usedHues.push(hue);
  return `hsl(${hue}, 70%, 60%)`;
}

