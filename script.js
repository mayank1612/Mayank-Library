class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
  }
}
class Display {
  add(book) {
    let tablebody = document.getElementById("tablebody");
    let html = "";
    html = `
            <tr>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.category}</td>
            </tr>

          `;
    tablebody.innerHTML += html;
  }

  clear() {
    let libraryForm = document.getElementById("form");
    libraryForm.reset();
  }
  validate(book) {
    if (book.title.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById("message");
    let boldText;
    if (type === "success") {
      boldText = "Success";
    } else {
      boldText = "Error!";
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 5000);
  }
}

let btn = document.getElementById("btn");

btn.addEventListener("click", addBook);

function addBook(e) {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let category1 = document.getElementById("Biographies");
  let category2 = document.getElementById("Business");
  let category3 = document.getElementById("Comics");
  let category;

  if (category1.checked) {
    category = category1.value;
  } else if (category2.checked) {
    category = category2.value;
  } else if (category.checked) {
    category = category3.value;
  }

  let book = new Book(title, author, category);
  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book has been successfully added");
  } else {
    display.show(
      "danger",
      "Book title and author name should be greather than 2 characters"
    );
  }

  e.preventDefault();
}
