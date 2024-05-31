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


/////////////////////////////////// weather Scripts
 //Function to handle the form submission
      function handleFormSubmission(event) {
        event.preventDefault(); //Prevent the default form submission

        // Capture the user input
        let city = document.getElementById('city-input').value;
        // console.log(city);

        // Construct the API URL
        let apiKey = 'b69a33291f51af70f905t53b1o4a330b';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        // console.log(apiUrl);

        // STEP#4: Make the API request
        axios
          .get(apiUrl)
          .then(function (response) {
            // console.log(response.data);

            // STEP#5: Extract the necessary data from the API response
            let cityName = response.data.city;
            let currentTemp = Math.round(response.data.temperature.current);
            // let currentTemp = response.data.temperature.current;
            // console.log('City:', cityName);
            // console.log('Current Temperature:', currentTemp);

            // Update the DOM with the extracted data
            document.getElementById('city-name').innerText = cityName;
            document.querySelector('.temp-now').innerText = currentTemp;
          })
          .catch(function (error) {
            // Log any errors to the console
            console.log(error);
          });
      }

       // Adding the event listener to the form
      document
        .getElementById('city-form')
        .addEventListener('submit', handleFormSubmission);

        
      let currentDate = document.querySelector('#current-date');
      let currentTime = new Date();
      let minutes = currentTime.getMinutes();
      let hours = currentTime.getHours();
      let day = currentTime.getDay();

      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednedsy',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      let formattedDay = days[day];

      currentDate.innerHTML = `${formattedDay} ${minutes}:${hours}`;
    