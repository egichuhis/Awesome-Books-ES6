import getTimeNow from './modules/timeNow.js';
import getStoredBooks from './modules/getStoredBooks.js';
import showBooks from './modules/showBooks.js';
import addBook from './modules/addBook.js';

const myBooks = [];
const addBtn = document.getElementById('add-btn');
const currentTime = document.getElementById('current-time');
const listBookSection = document.getElementById('list-books-section');
const addBooksSection = document.getElementById('add-books-section');
const contactSection = document.getElementById('contact-section');
const addBooksLink = document.getElementById('add-books-link');
const listBooksLink = document.getElementById('list-books-link');
const contactLink = document.getElementById('contact-link');

addBtn.addEventListener('click', () => {
  addBook(myBooks);
});

const toggleSectionVisibility = (sectionId) => {
  const sections = [listBookSection, addBooksSection, contactSection];

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
};

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