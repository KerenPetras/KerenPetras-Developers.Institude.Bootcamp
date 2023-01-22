// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


//Part 1.1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = ["game of thrones", "the witcher", "the last of us"]
console.log(myWatchedSeries);

//checked if the length are the same
console.log(myWatchedSeries.length);
console.log(myWatchedSeriesLength.length);

//Part 1.2
//Exmaple I watched 3 series: "black mirror, money heist, and the big bang theory";
const myWatchedSeriesSentence = `I watched 3 series: ${myWatchedSeriesLength}`;

//Part 1.3
console.log(myWatchedSeriesSentence);

//Part 2.1 made a new val to save the new data
const updatedWatchedSeries = myWatchedSeries.splice(0,2);
console.log(updatedWatchedSeries);
updatedWatchedSeries.push('friends');
console.log(updatedWatchedSeries);

//Part 2.2 added new series at the end of the array
updatedWatchedSeries.push("the walking dead ");
console.log(updatedWatchedSeries);

//Part 2.3 added a new series at the beginning of the array
updatedWatchedSeries.unshift('arcane');
console.log(updatedWatchedSeries);

//Part 2.4 deleted a specific index 'black mirror'
updatedWatchedSeries.splice(1,1);
console.log(updatedWatchedSeries);

//Part 2.5 console.log results
console.log(updatedWatchedSeries);
