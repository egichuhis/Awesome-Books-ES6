import generateUniqueId from './node_modules/generate-unique-id/generateUniqueId.js';
import getTimeNow from './modules/timeNow.js';
import toggleSectionVisibility from './modules/toggleSection.js';
import getStoredBooks from './modules/getStoredBooks.js';
import showBooks from './modules/showBooks.js';

const myBooks = [];
const addBtn = document.getElementById('add-btn');
const addBooksLink = document.getElementById('add-books-link');
const listBooksLink = document.getElementById('list-books-link');
const contactLink = document.getElementById('contact-link');
const currentTime = document.getElementById('current-time');

// const removeBook = (bookIDToRemove) => {
//   const myBooksUpdated = myBooks.filter((myBook) => myBook.bookID !== bookIDToRemove);
//   localStorage.setItem('myBooks', JSON.stringify(myBooksUpdated));
//   myBooks.length = 0;
//   myBooks.push(...myBooksUpdated);
//   window.location.reload();
// };

const addBook = () => {
  const bookID = generateUniqueId();
  const bookTitle = document.getElementById('title').value.trim();
  const bookAuthor = document.getElementById('author').value.trim();
  const errorSpan = document.getElementById('error-msg');
  const errorMsg = 'Both Title and Author must be filled out!';

  if (!bookTitle || !bookAuthor) {
    errorSpan.textContent = errorMsg;
    return;
  }

  myBooks.push({ bookID, bookTitle, bookAuthor });
  localStorage.setItem('myBooks', JSON.stringify(myBooks));

  showBooks(myBooks);

  // Clear the input fields values
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

addBtn.addEventListener('click', addBook);

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