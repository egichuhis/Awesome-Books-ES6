import getTimeNow from './modules/timeNow.js';
import toggleSectionVisibility from './modules/toggleSection.js';
import getStoredBooks from './modules/getStoredBooks.js';
import showBooks from './modules/showBooks.js';
import addBook from './modules/addBook.js';

const myBooks = [];
const addBtn = document.getElementById('add-btn');
const addBooksLink = document.getElementById('add-books-link');
const listBooksLink = document.getElementById('list-books-link');
const contactLink = document.getElementById('contact-link');
const currentTime = document.getElementById('current-time');

addBtn.addEventListener('click', () => {
  addBook(myBooks);
});

currentTime.textContent = getTimeNow();

listBooksLink.addEventListener('click', () => {
  toggleSectionVisibility('list-books-section');
});

addBooksLink.addEventListener('click', () => {
  toggleSectionVisibility('add-books-section');
});

contactLink.addEventListener('click', () => {
  toggleSectionVisibility('contact-section');
});

// Initial display of books
getStoredBooks(myBooks);
showBooks(myBooks);