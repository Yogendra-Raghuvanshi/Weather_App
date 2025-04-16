const apiKey = "6bc55888b30b4e2d9ba144003251604";

function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");
  const errorP = document.getElementById("error");

  resultDiv.classList.add("hidden");
  errorP.classList.add("hidden");

  if (!location) {
    errorP.textContent = "Please enter a city name.";
    errorP.classList.remove("hidden");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("weatherIcon").src = "https:" + data.current.condition.icon;
      resultDiv.classList.remove("hidden");
    })
    .catch((error) => {
      errorP.textContent = error.message;
      errorP.classList.remove("hidden");
    });
}
