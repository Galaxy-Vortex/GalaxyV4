let inIframe;
try {
  inIframe = window.self !== window.top;
} catch (e) {
  inIframe = true;
}
const educationalSites = ["https://drakerecitalpraised.com/rpcghdc1?key=467d3e6001045bfb8860f44a30d2d18c"];

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

