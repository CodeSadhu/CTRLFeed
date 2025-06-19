chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'startCleansing') {
    chrome.storage.local.get('keywords', ({ keywords }) => {
      keywords.forEach((kw, i) => {
        setTimeout(() => {
          chrome.tabs.create({
            url: `https://www.youtube.com/results?search_query=${encodeURIComponent(kw)}`
          });
        }, i * 8000); // Space out openings
      });
    });
  }
});
