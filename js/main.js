function togglePage() {
  const currentURL = window.location.href;
  const weatherAppURL = 'weather.html';
  const landingPageURL = 'index.html'; // Change this to the actual URL or path of the landing page

  if (currentURL.includes('weather.html')) {
    window.location.href = landingPageURL;
  } else {
    window.location.href = weatherAppURL;
  }
}

// function togglePage() {
//   const currentURL = window.location.href;
//   const weatherAppURL = 'weather-app.html';
//   const landingPageURL = 'landing-page.html'; // Change this to the actual URL or path of the landing page

//   if (currentURL.includes('weather-app.html')) {
//     window.location.href = landingPageURL;
//   } else {
//     window.location.href = weatherAppURL;
//   }
// }
