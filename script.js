document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'block';
});

function closePopup() {
  const popup = document.getElementById('welcome-popup');
  popup.classList.add('fade-out'); // Add fade-out class
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup after animation ends
  }, 500); // Adjust the time to match the animation duration
}

function closePopup() {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'none';
}
// Sample game data grouped by categories
const gamesByCategory = {
  all: [
    { name: "Minecraft Java & Bedrock", image: "minecraftJava.jpg", price: 1499, 
      description: "Explore, build, and survive in Minecraft's blocky world." },
    { name: "Minecraft Pocket Edition (shared)", image: "mcpefa.jpg", price: 300, description: "Your dream blocky game at affordable price"},
    { name: "Roblox Top Up", image: "roblox.jpg", description: "Robux Regular↓ \n80 Robux - ৳165 \n160 Robux - ৳315 \n240 Robux - ৳465 \n400 Robux - ৳660 \n800 Robux - ৳1305 \n1600 Robux - ৳2595 \n4500 Robux - ৳6515 \n \nRobux premium↓ \n1000 Robux ৳1365" },
    { name: "Discord Nuker", image: "nuker.jpg", price: 560 },
    { name: "Bitcoin", image: "btcs.jpg", price: 8573231 }
  ],
  crypto: [
    { name: "USDT - $1", image: "usdt.jpg", price: 135 },
    { name: "BTC - ₿0.00016", image: "btc.jpg", price: 8573231, description: "weekly updated price \n(depends on mkp)"},
    { name: "BINANCE TOP UP", image: "binance.jpg", description: "Amount depends on top up"}
  ],
  games: [
    { name: "Minecraft Java & Bedrock", image: "minecraftJava.jpg", price: 1499 },
    { name: "Minecraft Pocket Edition (personal)", image: "mcpe.jpg", price: 999 },
    { name: "Minecraft Pocket Edition (shared)", image: "mcpefa.jpg", price: 300 },
    { name: "Grand Theft Auto V (Rockstar)", image: "gtavRockstar.jpg", price: 1499 },
    { name: "Grand Theft Auto V (Steam personal)", image: "gtavSteam.jpg", price: 1799 }
  ],
  topups: [
    { name: "Roblox", image: "roblox.jpg", description: "Acc access needed \n \nRobux Regular↓ \n80 Robux - ৳165 \n160 Robux - ৳315 \n240 Robux - ৳465 \n400 Robux - ৳660 \n800 Robux - ৳1305 \n1600 Robux - ৳2595 \n4500 Robux - ৳6515 \n \nRobux premium↓ \n1000 Robux ৳1365" },
    { name: "Free Fire", image: "freefire.jpg", description: " UID only* \n \nDiamonds↓ \n25dm - ৳35 \n50dm - ৳55 \n115dm - ৳85 \n240dm - ৳160 \n355dm - ৳230 \n610dm - ৳395 \n850dm - ৳530 \n1240dm - ৳755 \n2530dm - ৳1500 \n \nPasses↓ \nWeekly - ৳160 \nMonthly - ৳750 \nLevel Up Pass - ৳170" },
    { name: "Efootball", image: "efootball.jpg", description: "KONAMI-linked accounts* \n \n130 coins ৳185 \n260 coins ৳355 \n390 coins ৳525 \n550 coins ৳670 \n1040 coins ৳1215 \n2130 coins ৳2430 \n3250 coins ৳3575 \n5700 coins ৳6005" }
  ],
  subscriptions: [
    { name: "Netflix", image: "netflix.jpg", description: "7days - ৳120 \n1month - ৳290 \n2months - ৳460 \n3months - ৳640" },
    { name: "Discord Nitro", image: "discord.jpg", description: "Basic↓ \n1month - ৳369 \n1year - ৳3299 \n \nServer Boost↓ \n1months - ৳1199 \n1year - ৳10999 \n \n14 Boost Server - ৳999" },
    { name: "Xbox", image: "xboxGamepass.jpg", description: "Ultimate↓ \n1month - ৳569 \n2months - ৳859 \n3months - ৳1849 \n4months - ৳3049 \n1year - ৳5549" },
    { name: "Crunchyroll", image: "crunchyroll.jpg", description: "Regular↓ \n1month - ৳149 \n3months - ৳399 \n \nPremium↓ \n1month - ৳949 \n3months - ৳2679 \n1year - ৳9249" }
  ],
  hosting: [
    { name: "Discord Bot", price: 135, image: "discordbot.jpg", description: "lan: Python, Node js, Java, Lua, Deno, Nodemon" },
    { name: "Telegram Bot", image: "telegrambot.jpg", price: 235, description: " lan: Python, Node js, Ruby, Php, Go, Scala, Clojure" },
    { name: "Discord Nuker", image: "nuker.jpg", price: 560 }
  ]
};

// Function to display games based on category
function displayGames(category = 'all') {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  const games = gamesByCategory[category];

  if (!games) {
    gameList.innerHTML = '<p>No games found in this category.</p>';
    return;
  }

  games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <div class="game-item-content">
        <h3>${game.name}</h3>
        <p>৳${game.price}</p>
        <p>${game.description}</p>
        <button onclick="addToCart('${game.name}', ${game.price})">ʙᴜʏ ɴᴏᴡ</button>
      </div>
    `;

    gameList.appendChild(gameItem);
  });
}

// Function to add item to cart
function BuyProduct(name, price) {
  // You can implement cart functionality here
  alert(`To buy ${name} at price ৳${price}.
  \n steps ↓
  - join discord 
  - open a ticket 
  - mention @owners 
  - place order`);
  window.location.href = "https://discord.gg/deluxestore";
}

// Display all games when the page loads
window.onload = () => displayGames('all');

function toggleMenu() {
  var categoryList = document.querySelector('.category-list');
  categoryList.classList.toggle('active');
}

// Function to toggle menu and change menu icon
function toggleMenu() {
  var categoryList = document.querySelector('.category-list');
  var menuBtn = document.querySelector('.menu-btn');

  categoryList.classList.toggle('active');

  if (menuBtn.classList.contains('active')) {
    menuBtn.classList.remove('active');
  } else {
    menuBtn.classList.add('active');
  }
}

// Function to display similar games based on category
function displaySimilarGames(category) {
  // Retrieve similar games based on the category (replace this with your logic)
  const similarGames = getSimilarGames(category);

  // Clear previous similar games
  const similarGameList = document.getElementById('similar-game-list');
  similarGameList.innerHTML = '';

  // Display similar games
  similarGames.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <div class="game-item-content">
        <h3>${game.name}</h3>
        <p>$${game.price}</p>
        <p>${game.description}</p>
        <button onclick="addToCart('${game.name}', ${game.price})">Add to Cart</button>
      </div>
    `;

    similarGameList.appendChild(gameItem);
  });
}


// Function to display games based on category
function showCategory(category) {
  // Display games based on the selected category
  displayGames(category);

  // Display similar games for the selected category
  displaySimilarGames(category);
}

// Get all category links
const categoryLinks = document.querySelectorAll('.category-list a');

// Add click event listener to each category link
categoryLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const category = this.textContent.toLowerCase(); // Get the category from the link text
    showCategory(category); // Call the showCategory function with the category
  });
});



// Function to format descriptions with HTML line breaks
function formatDescription(description) {
  return description ? description.replace(/\n/g, '<br>') : '';
}

function displayGames(category = 'all') {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  const games = gamesByCategory[category];

  if (!games) {
    gameList.innerHTML = '<p>No games found in this category.</p>';
    return;
  }

  games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    // Format the description with HTML line breaks
    const descriptionHTML = formatDescription(game.description);

    gameItem.innerHTML = `
      <div class="game-item-content">
        <h3>${game.name}</h3>
        ${game.price ? `<p>৳${game.price}</p>` : ''}
        <p>${descriptionHTML}</p>
        <button onclick="addToCart('${game.name}', ${game.price})">ʙᴜʏ ɴᴏᴡ</button>
      </div>
    `;
  
    // Add image only if the image URL is provided
    if (game.image) {
      const img = document.createElement('img');
      img.src = `${game.image}`;
      img.alt = game.name;
      gameItem.prepend(img);
    }

    gameList.appendChild(gameItem);
  });
}

function displayGames(category = 'all') {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  const games = gamesByCategory[category];

  if (!games) {
    gameList.innerHTML = '<p>No games found in this category.</p>';
    return;
  }

  games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    // Format the description with HTML line breaks
    const descriptionHTML = formatDescription(game.description);

    // Determine the color based on certain criteria, such as price
    let priceColor = '';
    if (game.price) {
      if (game.price < 500) {
        priceColor = 'green'; // Set color to green for cheaper items
      } else {
        priceColor = 'red'; // Set color to red for more expensive items
      }
    }

    gameItem.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <div class="game-item-content">
        <h3>${game.name}</h3>
        ${game.price ? `<p style="color: ${priceColor};">৳${game.price}</p>` : ''}
        <p>${descriptionHTML}</p>
        <button onclick="BuyProduct('${game.name}', ${game.price})">ʙᴜʏ ɴᴏᴡ</button>
      </div>
    `;

    gameList.appendChild(gameItem);
  });
}


