import getTimeNow from './modules/timeNow.js';
import toggleSectionVisibility from './modules/toggleSection.js';
import getStoredBooks from './modules/getStoredBooks.js';
import showBooks from './modules/showBooks.js';
import addBook from './modules/addBook.js';

const myBooks = [];
// const navigation = document.querySelector('nav');
const addBtn = document.getElementById('add-btn');
const currentTime = document.getElementById('current-time');
const addBooksLink = document.getElementById('add-books-link');
const listBooksLink = document.getElementById('list-books-link');
const contactLink = document.getElementById('contact-link');

// navigation.addEventListener('click', (event) => {
//   const { target } = event;
//   if (target.tagName === 'A') {
//     event.preventDefault();
//     const sectionId = target.getAttribute('href');
//     toggleSectionVisibility(sectionId);
//   }
// });

addBtn.addEventListener('click', () => {
  addBook(myBooks);
});

listBooksLink.addEventListener('click', () => {
  toggleSectionVisibility('list-books-section');
});

addBooksLink.addEventListener('click', () => {
  toggleSectionVisibility('add-books-section');
});

contactLink.addEventListener('click', () => {
  toggleSectionVisibility('contact-section');
});

currentTime.textContent = getTimeNow();
getStoredBooks(myBooks);
showBooks(myBooks);