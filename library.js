

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


const newBookButton = document.querySelector('.add-book-button');
const bookformModal = document.querySelector('.book-form-modal');
const closeButton = document.querySelector('.close-button');
const form = document.querySelector('.book-form')


newBookButton.addEventListener("click", () => {
  bookformModal.style.display = 'block';
  
});

closeButton.addEventListener("click",() => {
  bookformModal.style.display = 'none';

});


form.addEventListener("submit",(event) => {
  event.preventDefault();


  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const info = document.querySelector('#info').value;

  addBookToLibrary(title,author,pages,info);

  bookformModal.style.display = 'none';

  form.reset();
})




console.log(myLibrary);
