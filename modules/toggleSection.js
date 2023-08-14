const toggleSectionVisibility = (sectionId) => {
  const listBookSection = document.getElementById('list-books-section');
  const addBooksSection = document.getElementById('add-books-section');
  const contactSection = document.getElementById('contact-section');
  const sections = [listBookSection, addBooksSection, contactSection];

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
};

export default toggleSectionVisibility;