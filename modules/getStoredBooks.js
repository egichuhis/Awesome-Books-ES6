const getStoredBooks = (myBooks) => {
  const storedBooks = localStorage.getItem('myBooks');
  if (storedBooks) {
    myBooks.push(...JSON.parse(storedBooks));
  }
};

export default getStoredBooks;