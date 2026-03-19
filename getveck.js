const siteConfig = {
  "veck.io": {
    mainScript: "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/mytheory@main/veck.js",
    metadata: "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata39fixed67hehe"
  },
  "smashkarts.io": {
    mainScript: "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/mytheory@main/sk.js",
    metadata: "https://raw.githubusercontent.com/TJGTA3/filehostalskdfjkalsjflaksdjf/refs/heads/main/metadata31fixed5"
  }
};
const website = window.location.hostname;
const config = siteConfig[website];

if (!config) {
  console.warn("No cheat found for this site:", website);
} else {
  const versionUrl = `${config.metadata}?t=${Date.now()}`;
  const mainUrl = `${config.mainScript}?t=${Date.now()}`;

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      console.log(`Loaded script: ${url}`);
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

(async () => {
  await loadScript(versionUrl);
  await loadScript(mainUrl);
})();

