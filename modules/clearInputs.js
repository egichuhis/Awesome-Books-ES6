const clearInputs = () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const errorSpan = document.getElementById('error-msg');

  titleInput.value = '';
  authorInput.value = '';
  errorSpan.textContent = '';
};

export default clearInputs;