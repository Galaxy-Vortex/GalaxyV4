fetch("a.json")
  .then((response) => response.json())
  .then((games) => {
    const appsContainer = document.querySelector(".games");

    games.forEach((game, index) => {
      const gameElement = document.createElement("div");
      gameElement.className = "game";
      gameElement.dataset.index = index; 

      gameElement.innerHTML = `
        <img src="/global/img/${game.image}" alt="${game.name}" class="cards">
        <h3 class="cardname">${game.name}</h3>
      `;

      gameElement.addEventListener("click", async () => {
        localStorage.setItem('previous', window.location.href);
        console.log('previous page is ' + window.location.href);
        if (game.url) {
          var ute = game.url;
          document.getElementById("search").value = ute;
          document.getElementById("submitbutton").click();
          document.getElementById("web").style.visibility = "visible";
          document.getElementById("controls").style.visibility = "visible";
      
        } else if (game.file) {
          var fil = game.file;
          localStorage.setItem('gameload', fil);
          window.location.href = "/load";
        }
      });

      appsContainer.appendChild(gameElement);
    });
  });
