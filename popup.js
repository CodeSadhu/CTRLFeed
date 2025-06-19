document.getElementById('cleanse').addEventListener('click', () => {
  const raw = document.getElementById('keywords').value;
  const keywords = raw.split(',').map(k => k.trim()).filter(k => k);
  chrome.storage.local.set({ keywords }); // Save keywords
  chrome.runtime.sendMessage({ action: 'startCleansing' }); // Trigger background.js
});
