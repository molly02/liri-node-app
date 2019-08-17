require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment");
// this spotify or one above?
var spotify = require("node-spotify-api");
var command = process.argv[2];
var params = [];

//

for (var i = 3; < process.argv.length; i++) {
  params.push(process.argv[i]);
  //everything inside this for loop
}

switch (command) {
  case "movie-this":
    console.log("");
    break;
  case "correct-comman":
    console.log(" ");
    break;

    default: 
    console.log("whoops..testput in something that dalls outside of these ");
}

console.log(params);
console.log(command);

//var bands = function(){
  // call each one in a switch statement
    
    var bandName = process.argv[2];
    var queryBandURL = "https://rest.bandsintown.com/artists/"+ bandName +"/events?app_id=codingbootcamp";
    axios.get(queryBandURL).then(
        function(response) {
            console.log(queryBandURL);
            console.log("Venue: " + response.data.venue.name);
            console.log("Location: " + response.data.venue.country);
            console.log("Date: " + response.data.datetime);
       }
   
      )
//};
//how to make string again, so if band has 2 words it still goes through



//SPOTIFY STARTS HERE
/*


var songs = function () {
    var songTitle = process.argv[2];
    var querySongURL = "https://developer.spotify.com/dashboard/applications/" + spotify;
    console.log(querySongURL);
}
*/




//MOVIE STARTS HERE 


//var MovieThis = function() {
/*
    var movieName = process.argv[2];
    var queryMovieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    
    //if (movieName === undefined){
     //   movieName = "mr. nobody";
  //  }

    axios.get(queryMovieURL).then(
        function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Starring: " + response.data.Actors);
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

          //MovieThis[command][movieName]();

//}

     
    


*/


  




// Make it so liri.js can take in one of the following commands:

   //* `concert-this`
 //  * `spotify-this-song`
 //  * `movie-this`
 //  * `do-what-it-says`
