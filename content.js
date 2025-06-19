(function autoInteract() {
  if (window.location.href.includes('search_query')) {
    // We're on a search results page
    setTimeout(() => {
      const video = document.querySelector('ytd-video-renderer a#thumbnail');
      if (video) video.click();
    }, 4000); // Click first video
  }

  if (window.location.href.includes('watch')) {
    // We're watching a video
    setTimeout(() => {
      const likeBtn = document.querySelector('ytd-toggle-button-renderer button');
      if (likeBtn && likeBtn.getAttribute('aria-pressed') === 'false') {
        likeBtn.click();
      }
    }, 15000); // Like after 15s

    setTimeout(() => {
      window.close(); // Close after 30s
    }, 30000);
  }
})();
