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

//

switch (command) {
  case "movie-this":
    MovieThis();
    //default: ("call mr. nobody here");
    break;
  case "concert-this":
    bands();
    break;
  case "spotify-this-song":
    spotifySong();
    break;
  case "do-what-it-says":
    console.log("");
    break;

  default: 
    console.log("whoops..testput in something that calls outside of these ");
}

// <
// what is wrong here??
for (var i = 3; i < process.argv.length; i++) {
 params.push(process.argv[i]);
  //everything inside this for loop

  console.log(params);
  console.log(command);
  
    // call each one in a switch statement
  
  function bands() {
    var bandName = process.argv[3];
      var queryBandURL = "https://rest.bandsintown.com/artists/"+ bandName +"/events?app_id=codingbootcamp";
      axios.get(queryBandURL).then(
          function(response) {
              console.log(queryBandURL);
              console.log("Venue: " + response.data.venue.name + 
              "\nLocation: " + response.data.venue.country + "\nDate: " + response.data.datetime);
         }
     
        )
  
  }
      
    
  //how to make string again, so if band has 2 words it still goes through
  
  function spotifySong() {
      var songTitle = process.argv[3];
      var querySongURL = "https://developer.spotify.com/dashboard/applications/" + spotify;
      console.log(querySongURL);
  
  };
  

  function MovieThis() {
    var movieName = process.argv[3];
    var queryMovieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    
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
     
      //if (movieName === undefined){
       //   movieName = "mr. nobody";
    //  }
  
   
  
            //MovieThis[command][movieName]();
  
  
  
       



};



    
// example
function programmer(name, job, age, favorite) {
  this.name = name;
  this.job = job;
  this.age = age;
  this.favorite = favorite;
  
  this.print = function() {
      console.log("Name: " + this.name + "\nJob: " + this.job
                  + "\nAge: " + this.age + "\nFavorite: " + this.favorite);
  }
  
  }
  
  var program = new programmer("Molly", "Programmer", "26", "Javascript");
  program.print();

