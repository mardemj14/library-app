'use strict';

const table = document.querySelector('.table');
const btnNewBook = document.querySelector('.btn-newbook');
const btnAdd = document.querySelector('.btn-add');
const btnCancel = document.querySelector('.btn-cancel');

const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pageInput = document.querySelector('.page-input');
const statusInput = document.querySelector('.read-status');

const library = [];

class Book {
  constructor(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary() {
  if (titleInput.value === '' || authorInput.value === '' || pageInput.value === '') {
    alert('Please fill in all fields');
  } else {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      statusInput.checked
    );

    library.push(newBook);

    clearForm();
    closeForm();

    // clear page before loading again
    table.innerHTML = '';

    // load page
    addBooksToPage(library);
  }
}

function addBooksToPage(library) {
  for (let i = 0; i < library.length; i++) {
    createBookElements(library[i], i);
  }
  loadBtnsTrash();
  loadtBtnsStatus();
}

function createBookElements(book, index) {
  table.innerHTML += `
    <div class="book-container row" data-index="${index}">
      <p class="title">${book.title}</p>
      <p class="author">${book.author}</p>
      <p class="pages">${book.pages}</p>
      <input class="status-btn" type="button" value="${book.isRead ? 'Read' : 'Un-Read'}">
      <input class="delete-btn" type="button" value="Remove">
    </div>
  `;
}

const openForm = () => {
  const form = document.querySelector('.form');
  form.classList.remove('hidden');
};

const closeForm = () => {
  const form = document.querySelector('.form');
  form.classList.add('hidden');
};

const clearForm = () => {
  titleInput.value = '';
  authorInput.value = '';
  pageInput.value = '';
  statusInput.checked = false;
};

btnNewBook.addEventListener('click', openForm);
btnAdd.addEventListener('click', addBookToLibrary);
btnCancel.addEventListener('click', () => {
  clearForm();
  closeForm();
});

const loadBtnsTrash = () => {
  const btnsTrash = document.querySelectorAll('.delete-btn');

  btnsTrash.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = e.target.parentElement.dataset.index;
      library.splice(index, 1);
      e.target.parentElement.remove();

      // re-render the UI
      table.innerHTML = '';
      addBooksToPage(library);
    });
  });
};

const loadtBtnsStatus = () => {
  const btnsStatus = document.querySelectorAll('.status-btn');

  btnsStatus.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const index = e.target.parentElement.dataset.index;
      library[index].isRead = !library[index].isRead;

      table.innerHTML = '';
      addBooksToPage(library);
    });
  });
};
