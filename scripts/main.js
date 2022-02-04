'use strict';

const table = document.querySelector('.table');

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

function addBookToLibrary() {}

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
  container.appendChild(faTrashIcon);

  table.appendChild(container);
}

addBooksToPage(library);
