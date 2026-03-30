const siteConfig = {
  "veck.io": {
    mainScript: "https://raw.githubusercontent.com/TJGTA3/rectehoststuff/refs/heads/main/veck.js",
  },
  "smashkarts.io": {
    mainScript: "https://raw.githubusercontent.com/TJGTA3/rectehoststuff/refs/heads/main/sk.js",
  },
  "kour.io": {
    mainScript: "https://raw.githubusercontent.com/TJGTA3/rectehoststuff/refs/heads/main/kour.js",
  },
  "narrow.one": {
    mainScript: "https://raw.githubusercontent.com/TJGTA3/rectehoststuff/refs/heads/main/narrowone.js",
  },
  "buildnow-gg.game-files.crazygames.com" : {
mainScript: "https://raw.githubusercontent.com/TJGTA3/rectehoststuff/refs/heads/main/bngg.js", 
}
};

const website = window.location.hostname;
const config = siteConfig[website];

if (!config) {
  console.warn("No cheat found for this site:", website);
} else {
  const mainUrl = `${config.mainScript}?t=${Date.now()}`;

  async function loadScript(url) {
    try {
      const res = await fetch(url);
      const code = await res.text();
      (0, eval)(code);
  
      console.log("Loaded script:", url);
    } catch (err) {
      console.error("Failed to load script:", url, err);
    }
  }

  (async () => {
    await loadScript(mainUrl);
  })();
}
