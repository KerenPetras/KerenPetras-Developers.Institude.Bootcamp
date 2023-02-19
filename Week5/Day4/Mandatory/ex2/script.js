
// 🌟 Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

const base_url = "https://api.giphy.com/v1/gifs/search"
const search =  "sun"
const rating = "g";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const limit = 10;
const offset = 2;
let xhr = new XMLHttpRequest();

const url = `${base_url}?q=${search}&rating=${rating}&apiKey=${apiKey}&limit=${limit}&offset=${offset}`;

xhr.addEventListener("load", logReqest)
//const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";
xhr.open("GET",url);
xhr.send();

function logReqest(e) {
    const response = JSON.parse(xhr.response);
    console.log("response", response)
}
