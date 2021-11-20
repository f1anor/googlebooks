const { default: axios } = require("axios");

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: {
    filter: "ebooks",
    maxResults: "30",
    key: "AIzaSyArXIknhvjKZID-L3myOelJJg-viMoL0vg",
  },
});

export const instanceBook = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes/",
  params: {
    key: "AIzaSyArXIknhvjKZID-L3myOelJJg-viMoL0vg",
  },
});
