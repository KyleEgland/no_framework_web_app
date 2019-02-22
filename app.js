/*jshint esversion: 6 */
// This application was created by following the YouTube video:
// https://youtu.be/JaMCxVWtW58
// JavaScript BookList App | No Frameworks
// from channel Traversy Media
//
// The intention of this code is to write an application without using a framework
// such as node or angular etc.
//
// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    // Making all the methods static so that the class
    // does not need to be instantiated
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        // const list = document.getElementById('book-list');
        const list = document.querySelector("#book-list");

        const row = document.createElement('tr');

        // Usign 'back-ticks' below so that variables
        //can be passed through
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }

    static showAlert(message, className) {
      const div = document.createElement('div');
      // Pass in the className variable
      div.className = `alert alert-${className}`;
      // Add the message
      div.appendChild(document.createTextNode(message));
      // Insert the alert
      // 'container' is the "Parent Element" for the alert
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      // insert div before form
      container.insertBefore(div, form);

      // Clear alert after 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Sotrage
class Store {

  static getBooks() {
    let books;
    if(localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return  books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn == isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate information
  if(title == '' || author == '' || isbn == '') {
    UI.showAlert('Please fill in all fileds', 'danger');
  } else{
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Show output in browser console
    // console.log(book);

    // Call addBookToList to add the book entered in the form
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show removal message
  UI.showAlert('Book removed', 'success');
});
