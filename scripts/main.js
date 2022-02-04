'use strict';

const table = document.querySelector('.table');
const btnNewBook = document.querySelector('.btn-newbook');
const btnAdd = document.querySelector('.btn-add');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pageInput = document.querySelector('.page-input');
const statusInput = document.querySelector('.read-status');

const library = [
  new Book('Javascript', 'Jon Duckett', 614, true),
  new Book('Linux Pocket Guide', 'Daniel J. Barrett', 167, false),
];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead ? 'Read' : 'Un-Read';
}

function addBookToLibrary() {
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pageInput.value,
    statusInput.checked
  );

  library.push(newBook);
  clearForm();
  closeForm();

  table.innerHTML = '';

  addBooksToPage(library);
}

// write a funtion that
// loops through the array
// and display each book on the page
function addBooksToPage(library) {
  // for each book in the library
  library.forEach(function (book) {
    // create their html elements and classes
    createBookElements(book);
  });
}

function createBookElements(book) {
  const container = document.createElement('div');
  container.classList.add('book-container', 'row');
  const faBookIcon = document.createElement('i');
  faBookIcon.classList.add('fas', 'fa-book');
  const taContainer = document.createElement('div');
  taContainer.classList.add('title-author-container');
  const title = document.createElement('h2');
  title.classList.add('title');
  const author = document.createElement('p');
  author.classList.add('author');
  const pages = document.createElement('p');
  pages.classList.add('pages');
  const readStatus = document.createElement('p');
  readStatus.classList.add('status');
  const faTrashIcon = document.createElement('i');
  faTrashIcon.classList.add('fas', 'fa-trash');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  readStatus.textContent = book.isRead;

  taContainer.appendChild(title);
  taContainer.appendChild(author);

  container.appendChild(faBookIcon);
  container.appendChild(taContainer);
  container.appendChild(pages);
  container.appendChild(readStatus);
  container.appendChild(faTrashIcon);

  table.appendChild(container);
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
