import generateUniqueId from '../node_modules/generate-unique-id/generateUniqueId.js';
import showBooks from './showBooks.js';
import clearInputs from './clearInputs.js';

const addBook = (myBooks) => {
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
  clearInputs();
};

export default addBook;