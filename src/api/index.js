const { default: axios } = require("axios");

// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// const TARGET_URL = 'https://www.googleapis.com/books/v1/'
// const URL = PROXY_URL + TARGET_URL

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    key: "AIzaSyArXIknhvjKZID-L3myOelJJg-viMoL0vg",
  },
});
