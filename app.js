let myLibrary = [];

function Book(title, author, readStatus) {
  // the constructor...
    this.title = title
    this.author = author
    this.readStatus = readStatus //this is a bool that is true for read, false for not read
}

function addBookToLibrary() {
  // do stuff here


}

// the below is saying that our favoriteBook is Macbeth, William Shakespeare is the author, and that we have read it
let favoriteBook = Book('Macbeth', 'William Shakespeare', true)
