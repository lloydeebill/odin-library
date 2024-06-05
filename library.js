

const myLibrary = [];

function Book(title,author,pages,info){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = info;
}

// const book1 = new Book("Man's Search for Meaning","Victor Frankl",200,"Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp. The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences.");



// let bookTitle = document.querySelector(".book-title");
// let bookAuthor = document.querySelector(".book-author");
// let bookPages = document.querySelector(".book-pages");
// let bookInfo = document.querySelector(".book-info");



// bookTitle.innerText = `${book1.title}`
// bookAuthor.innerText = `${book1.author}`
// bookPages.innerText = `${book1.pages}`
// bookInfo.innerText = `${book1.info}`




function addBookToLibrary(title,author,pages,info) {
  const newBook = new Book(title,author,pages,info);
  
  myLibrary.push(newBook);

}

addBookToLibrary("Man's Search for Meaning","Victor Frankl",200,"Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp. The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences.");

console.log(typeof(myLibrary[0]));