

const myLibrary = [];

function Book(title,author,pages,info){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = info;
}


function addBookToLibrary(title,author,pages,info) {
  
  const newBook = new Book(title,author,pages,info);
  myLibrary.push(newBook);

  displayBook();

}

function displayBook() {

  //for each book, it will access each property//
  //display property in a div inside the main content//
  //change the html on the main content to accomodate for each div books//

  const bookShelf = document.querySelector('.main');
  bookShelf.innerText = '';

  myLibrary.forEach((book) => {

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    const bookTitle = document.createElement('h2');
    bookTitle.innerText = `${book.title}`;
    bookContainer.classList.add('book-title');
    bookContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = `${book.author}`;
    bookAuthor.classList.add('book-author');
    bookContainer.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.innerText = `${book.pages}`;
    bookPages.classList.add('book-pages');
    bookContainer.appendChild(bookPages);

    const bookInfo = document.createElement('p');
    bookInfo.innerText = `${book.info}`;
    bookInfo.classList.add('book-info');
    bookContainer.appendChild(bookInfo);
    

    bookShelf.appendChild(bookContainer);

  })
}



addBookToLibrary("Man's Search for Meaning","Victor Frankl",200,"Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp. The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences.");

addBookToLibrary("Man's Search for Meaning","Victor Frankl",200,"Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp. The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences.");



console.log(myLibrary);
