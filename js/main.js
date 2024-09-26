// book class: represents a book
class Book {
  constructor(title, aouthor, isbn) {
    this.title = title;
    this.aouthor = aouthor;
    this.isbn = isbn;
  }
}
// UI class: handles UI tasks
class UI {
  static displayBlook() {
    const storeBooks = [
      { title: "book one", aouthor: "shaaban", isbn: "1234567" },
      { title: "book one", aouthor: "mohamed", isbn: "846445" },
      { title: "book one", aouthor: "ahmed", isbn: "837364" },
    ];
    const books = storeBooks;
    books.forEach((book) => UI.addToBookList(book));
  }
  static addToBookList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.aouthor}</td>
            <td>${book.isbn}</td>
            <td><a class="btn btn-danger delete" href="">X</a></td>
        
        `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  // validition
  static showElert(masseg, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(masseg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  // fanish in 3 seconds

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbm").value = "";
  }
}

// event: display books
document.addEventListener("DOMContentLoaded", UI.displayBlook());
// event: add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbm = document.querySelector("#isbm").value;
  if (title === "" || author === "" || isbm === "") {
    UI.showElert("place fill in all fields ", "danger");
  } else {
    const book = new Book(title, author, isbm);
    UI.addToBookList(book);
    UI.showElert('Book added','success');
    UI.clearFields();
  }
});

// event: remove book
document.querySelector("#book-list").addEventListener("click", (e) => {
  e.preventDefault();
  UI.deleteBook(e.target);
  UI.showElert('Book Removed','success');

});
