import getTimeNow from './modules/timeNow.js';
import toggleSectionVisibility from './modules/toggleSection.js';
import getStoredBooks from './modules/getStoredBooks.js';
import showBooks from './modules/showBooks.js';
import addBook from './modules/addBook.js';

const myBooks = [];
const navigation = document.querySelector('nav');
const addBtn = document.getElementById('add-btn');
const currentTime = document.getElementById('current-time');

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.tagName === 'A') {
    event.preventDefault();
    const sectionId = target.getAttribute('href');
    toggleSectionVisibility(sectionId);
  }
});

addBtn.addEventListener('click', () => {
  addBook(myBooks);
});

currentTime.textContent = getTimeNow();
getStoredBooks(myBooks);
showBooks(myBooks);