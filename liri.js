require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

var axios = require("axios");
// moment?
//var moment = require("moment");
// this spotify or one above?
//var spotify = require("node-spotify-api");
var command = process.argv[2];
var params = [];

for (var i = 3; i < process.argv.length; i++) {
 params.push(process.argv[i]);

  switch (command) {
    case "movie-this":
      movieThis(params);
      //default: ("call mr. nobody here");
      break;
    case "concert-this":
      bands(params);
      break;
    case "spotify-this-song":
      spotifySong(params);
      break;
    case "do-what-it-says":
      console.log("");
      break;
  
    default: 
      console.log("whoops.. try again");
  };

  //console.log(params);
  //console.log(command);


  function movieThis() {
    var movieName = process.argv[3];
    var queryMovieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    // console.log(params);
    if (!movieName) {
         movieName = "mr. nobody";
    }
    axios.get(queryMovieURL).then(
      function(response) {
          console.log("Title: " + response.data.Title + "\nYear Released: " + response.data.Year + "\nIMDB Rating: " +
                      response.data.Ratings[0].Value + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                      "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " +
                      response.data.Plot + "\nStarring: " + response.data.Actors);
      })
      .catch(function(error) {
          if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
  
  };

    
  function bands() {
    var bandName = process.argv[3];
      var queryBandURL = "https://rest.bandsintown.com/artists/"+ bandName +"/events?app_id=codingbootcamp";
      axios.get(queryBandURL).then(
        function(response) {
          var jsonData = response.data[0];
              console.log(queryBandURL);
              console.log("Artist: " + bandName + "\nVenue: " + jsonData.venue.name + 
              "\nLocation: " + jsonData.venue.country + "\nDate: " + jsonData.datetime);
         })
         .catch(function(error) {
          if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
  
  };
      
  //how to make string again, so if band has 2 words it still goes through
  
  function spotifySong() {
      var songTitle = process.argv[3];
      var querySongURL = "https://developer.spotify.com/dashboard/applications/" + spotify;
      console.log(querySongURL);
      //connect to keys.js, need to finish coding this portion
  
  };
  
  
};