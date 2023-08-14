import generateUniqueId from './node_modules/generate-unique-id/generateUniqueId.js';
import getTimeNow from './modules/timeNow.js';
import toggleSectionVisibility from './modules/toggleSection.js';
import getStoredBooks from './modules/getStoredBooks.js';

const myBooks = [];
const addBtn = document.getElementById('add-btn');
const listBooks = document.getElementById('list-books');
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

const showBooks = () => {
  listBooks.innerHTML = '';

  myBooks.forEach((myBook) => {
    const myBookDiv = document.createElement('div');
    myBookDiv.classList.add('row');

    const bookDetails = document.createElement('h4');
    bookDetails.textContent = `${myBook.bookTitle} by ${myBook.bookAuthor}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    // inline function for the event listener
    removeBtn.addEventListener('click', () => {
      const bookIDToRemove = myBook.bookID;
      const myBooksUpdated = myBooks.filter((myBook) => myBook.bookID !== bookIDToRemove);
      localStorage.setItem('myBooks', JSON.stringify(myBooksUpdated));
      myBooks.length = 0;
      myBooks.push(...myBooksUpdated);
      // Call the showBooks function to update the displayed books
      showBooks();
    });

    myBookDiv.appendChild(bookDetails);
    myBookDiv.appendChild(removeBtn);
    listBooks.appendChild(myBookDiv);
  });
};

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

  showBooks();

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
showBooks();