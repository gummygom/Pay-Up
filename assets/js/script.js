var formEl = document.querySelector("#bill-form");
var tasksToDoEl = document.querySelector("#bill-to-calc");
var billIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");
var APIkeyWeather = "0ed751aee02b60e3e3109adbed6b18e3"
var city;
console.log("HELLO!")

function getWeather(city) {
  //  Using saved city name, execute a current condition get request from open weather map api
          let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0ed751aee02b60e3e3109adbed6b18e3"
          axios.get(queryURL)
          .then(function(response){
              console.log(response)
        });
}


var billFormHandler = function(event) {
  event.preventDefault();
  var billNameInput = document.querySelector("input[name='bill-name'").value;
  var peopleAmountInput = document.querySelector("input[name='peopleamount']").value;

//   i know we cant use alerts, this is a temporary placeholder
  if (billNameInput === "" || peopleAmountInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  formEl.reset();

  document.querySelector("input[name='bill-name']").value = "";
  document.querySelector("input[name='bill-type']").selectedIndex = 0;

  var billDataObj = {
    name: billNameInput,
    type: peopleAmountInput
  };
  };

// var index_current_location_json = localStorage.getItem("location");

// if (!index_current_location_json) {
//     window.location = "./welcome.html";
// }

// var index_location = JSON.parse(index_current_location_json);

// $("#index-current-location").html(index_location.name + "<br>" + index_location.vicinity);

// function LoadContent(path, target) {
//     fetch(path)
//         .then(function(response) {
//             if (response.ok) {
//                 response.text()
//                     .then(function(text) {
//                         $(target).html(text);
//                     })
//             }
//     })
// }

// LoadContent("./content/contacts.html", "#contacts-content");
// LoadContent("./content/tasks.html", "#tasks-content");
// LoadContent("./content/shoppinglist.html", "#shopping-list-content");
// LoadContent("./content/weather.html", "#weather-content");
// LoadContent("./content/myarea.html", "#my-area-content");

var searchBox;
var addressInput = document.getElementById("address");

async function initAutocomplete() {

    console.log("init script")

    searchBox = new google.maps.places.SearchBox(addressInput);

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        console.log(places)
        
        if (places.length < 1) {
            return;
        }

        var placeObj = JSON.parse(JSON.stringify(places[0]))
        console.log(placeObj.geometry.location)
        var lat = placeObj.geometry.location.lat
        var lon = placeObj.geometry.location.lng

        // Call weather API

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=0ed751aee02b60e3e3109adbed6b18e3`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            console.log(data.main.temp)
    // display current temp
        })
      //  fetch(console.log(data.main.temp))
      //  .then(console.log)

        localStorage.setItem("location", JSON.stringify(places[0]));

        // window.location = "./index.html";
    });
}

// set endpoint and your API key
endpoint = 'convert';
access_key = 'API_KEY';

// define from currency, to currency, and amount
from = 'USD';
to = 'EUR';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'http://data.fixer.io/api/' + endpoint + 'b6d6bd11c216fde32ce76aa0901ad736' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
        console.log();
                
    }
});