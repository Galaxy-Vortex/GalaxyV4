fetch("g.json")
  .then((response) => response.json())
  .then((games) => {
    const appsContainer = document.querySelector(".games");

    games.forEach((game, index) => {
      const gameElement = document.createElement("div");
      gameElement.className = "game";
      gameElement.dataset.index = index;

      gameElement.innerHTML = `
      <div class="innergame">
        <img src="/global/img/${game.image}" alt="${game.name}" class="cards" loading="lazy">
        <h3 class="cardname">${game.name}</h3>
        <h2 class="cardgenre">${game.genre}</h2>
      </div>
      `;

      gameElement.addEventListener("click", async () => {
        localStorage.setItem("previous", window.location.href);
        console.log("previous page is " + window.location.href);
        if (game.url) {
          var ute = game.url;
          document.getElementById("search").value = ute;
          document.getElementById("submitbutton").click();
          document.getElementById("web").style.visibility = "visible";
          document.getElementById("controls").style.visibility = "visible";
        } else if (game.file) {
          var fil = game.file;
          localStorage.setItem("gameload", fil);
          window.location.href = "/load";
        }
      });

      appsContainer.appendChild(gameElement);
    });
  });

document.getElementById("gamesearch").addEventListener("input", function () {
  const searchitem = this.value.toLowerCase();
  const games = document.querySelectorAll(".game");
  games.forEach((game) => {
    const gameName = game.querySelector("h3").textContent.toLowerCase();
    const gameTag = game.querySelector("h2").textContent.toLowerCase();
    if (gameName.includes(searchitem) || gameTag.includes(searchitem)) {
      game.style.display = "flex";
    } else {
      game.style.display = "none";
    }
  });
});
document.querySelectorAll(".genre-filter").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedGenres = Array.from(
      document.querySelectorAll(".genre-filter:checked")
    ).map((checkbox) => checkbox.value.toLowerCase());

    const games = document.querySelectorAll(".game");

    games.forEach((game) => {
      const gameGenre = game
        .querySelector(".cardgenre")
        .textContent.toLowerCase();
      if (selectedGenres.length === 0 || selectedGenres.includes(gameGenre)) {
        game.style.display = "flex";
      } else {
        game.style.display = "none";
      }
    });
  });
});
function pickRandomGame() {
  const games = document.querySelectorAll(".game");
  if (games.length > 0) {
    // Use crypto.getRandomValues for more randomness
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const randomIndex = array[0] % games.length; // Modulo to fit within the array size
    games[randomIndex].click(); // Simulate a click on the random game
  }
}

// Add the button click event listener
document.addEventListener("DOMContentLoaded", () => {
  const randomGameButton = document.getElementById("randomGameButton");

  randomGameButton.addEventListener("click", pickRandomGame);
});
