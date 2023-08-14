const showBooks = (myBooks) => {
  const listBooks = document.getElementById('list-books');

  listBooks.innerHTML = '';

  const handleRemove = (bookIDToRemove) => {
    const myBooksUpdated = myBooks.filter((myBook) => myBook.bookID !== bookIDToRemove);
    localStorage.setItem('myBooks', JSON.stringify(myBooksUpdated));
    myBooks.length = 0;
    myBooks.push(...myBooksUpdated);
    showBooks(myBooks);
  };

  myBooks.forEach((book) => {
    const myBookDiv = document.createElement('div');
    myBookDiv.classList.add('row');

    const bookDetails = document.createElement('h4');
    bookDetails.textContent = `${book.bookTitle} by ${book.bookAuthor}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
      handleRemove(book.bookID);
    });

    myBookDiv.appendChild(bookDetails);
    myBookDiv.appendChild(removeBtn);
    listBooks.appendChild(myBookDiv);
  });
};

export default showBooks;