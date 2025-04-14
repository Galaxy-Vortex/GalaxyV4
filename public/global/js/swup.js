const swup = new Swup();

function initGsapAnimations() {
    gsap.fromTo(
        ".game1",
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".game2",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".game3",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".game4",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".game5",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.to(".games", {
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
      });
      gsap.fromTo(
        ".settings1",
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings2",
        {
          opacity: 0,
          y: -20,
        },
        {
          delay: 0.3,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings3",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings4",
        {
          opacity: 0,
          y: -50,
        },
        {
          delay: 0.1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings5",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings6",
        {
          opacity: 0,
          y: -30,
        },
        {
          delay: 0.4,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings7",
        {
          opacity: 0,
          x: -30,
        },
        {
          delay: 0.1,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings8",
        {
          opacity: 0,
          x: -30,
        },
        {
          delay: 0.3,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".settings9",
        {
          opacity: 0,
          y: -30,
        },
        {
          delay: 0.2,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      
      gsap.to(".h1one", {
        opacity: 1,
        x: 40,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(".h1two", {
        opacity: 1,
        x: 25,
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.1,
      });
      gsap.to(".h1three", {
        opacity: 1,
        x: 10,
        delay: 0.2,
        duration: 1.2,
        ease: "expo.inOut",
      });
      
      gsap.to(".h1four", {
        opacity: 1,
        x: -10,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.to(".h1five", {
        opacity: 1,
        x: -25,
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.1,
      });
      gsap.to(".h1six", {
        opacity: 1,
        x: -40,
        delay: 0.2,
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.fromTo(
        ".gradient-3",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: -0,
          ease: "expo.inOut",
          duration: 1.2,
        }
      );
      gsap.fromTo(
        ".feature-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.2,
        }
      ),
        gsap.fromTo(
          ".app1",
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "expo.inOut",
          }
        );
      gsap.fromTo(
        ".app2",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".app3",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.fromTo(
        ".app4",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.inOut",
        }
      );
      gsap.to(".games", {
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
      });
      fetch("../g/g.json")
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
    const selectedGenres = Array.from(document.querySelectorAll(".genre-filter:checked")).map(
      (checkbox) => checkbox.value.toLowerCase()
    );

    const games = document.querySelectorAll(".game");

    games.forEach((game) => {
      const gameGenre = game.querySelector(".cardgenre").textContent.toLowerCase();
      if (selectedGenres.length === 0 || selectedGenres.includes(gameGenre)) {
        game.style.display = "flex";
      } else {
        game.style.display = "none";
      }
    });
  });
});
fetch("a.json")
  .then((response) => response.json())
  .then((games) => {
    const appsContainer = document.querySelector(".apps");

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
    const selectedGenres = Array.from(document.querySelectorAll(".genre-filter:checked")).map(
      (checkbox) => checkbox.value.toLowerCase()
    );

    const games = document.querySelectorAll(".game");

    games.forEach((game) => {
      const gameGenre = game.querySelector(".cardgenre").textContent.toLowerCase();
      if (selectedGenres.length === 0 || selectedGenres.includes(gameGenre)) {
        game.style.display = "flex";
      } else {
        game.style.display = "none";
      }
    });
  });
});
try {
    var analyticsScript = document.createElement("script");
    analyticsScript.src =
      "https://www.googletagmanager.com/gtag/js?id=G-PYBNSB93F8";
    analyticsScript.async = true;
    document.head.appendChild(analyticsScript);
    var analyticsScript2 = document.createElement("script");
    analyticsScript2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-PYBNSB93F8');
  `;
    document.head.appendChild(analyticsScript2);
  } catch {}
  
  let inIframe;
  try {
    inIframe = window.self !== window.top;
  } catch (e) {
    inIframe = true;
  }
  const educationalSites = ["https://classroom.google.com"];
  
  function ABCloak(redirectToEducationalSite) {
    try {
      if (!inIframe) {
        const popup = open("about:blank", "_blank");
        if (popup) {
          const doc = popup.document;
          const iframe = doc.createElement("iframe");
          const style = iframe.style;
          const link = doc.createElement("link");
  
          var name = "Google Classroom";
          var icon =
            "https://ssl.gstatic.com/classroom/favicon.png";
          if (localStorage.getItem("cloakTitle") !== null) {
            name = localStorage.getItem("cloakTitle");
            icon = localStorage.getItem("cloakIcon");
          }
          doc.title = name;
          link.rel = "icon";
          link.href = icon;
  
          iframe.src = location.href;
          style.border = style.outline = "none";
          style.width = style.height = "100%";
          style.overflow = "hidden";
          doc.body.style.margin = style.margin = 0;
          style.padding = 0;
          doc.head.appendChild(link);
          doc.body.appendChild(iframe);
          doc.URLBeforeCloak = location.href;
  
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.innerHTML =
            `
            window.onmessage = function (e) {
              if (e.data == 'cancelABCloak') {
                location.replace("` +
            location.href +
            `");
              } else {
                try {
                  var msg = JSON.parse(e.data);
                  if (msg.msg === "changeCloak") {
                    document.title = msg.title
                    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    link.type = 'image/x-icon';
                    link.rel = 'shortcut icon';
                    link.href = msg.icon;
                    document.getElementsByTagName('head')[0].appendChild(link);
                  }
                } catch { }
              }
            };`;
          doc.body.append(script);
  
          if (redirectToEducationalSite)
            location.replace(
              educationalSites[
                Math.floor(Math.random() * educationalSites.length)
              ]
            );
        }
      }
    } catch {
      ABCloak(true);
    }
  }
  
  if (localStorage.getItem("autoAB") == "true") {
    ABCloak(true);
  }
  function checkPopupsBlocked() {
    const testPopup = window.open('', '_blank');
  
    if (!testPopup || testPopup.closed || typeof testPopup.closed === 'undefined') {
      alert('Popups needs to be enabled');
    } else {
      testPopup.close();
    }
  }
  
  
  console.log("GSAP animations reinitialized!");
}

swup.hooks.on("page:view", () => {
    // Reinitialize GSAP animations
    initGsapAnimations();
  
    // Ionicons module logic
    const ionicons = document.querySelectorAll("ion-icon");
    ionicons.forEach((icon) => {
      console.log("Ionicon reinitialized:", icon);
    });
  
    // Lucide icons setup
    lucide.createIcons();
  
  });
  
  