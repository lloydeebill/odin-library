

const myLibrary = [];

class Book {
  
  constructor(title,author,pages,info,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = info;
    this.readStatus = readStatus;
  }
  
}

// function Book(title,author,pages,info,readStatus){
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.info = info;
//   this.readStatus = readStatus;
// }


function addBookToLibrary(title,author,pages,info,readStatus) {
  
  const newBook = new Book(title,author,pages,info,readStatus);
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

    const bookTitleAuthorPageContainer = document.createElement('div');
    bookTitleAuthorPageContainer.classList.add('book-titleAuthorPageContainer');

    const bookTitle = document.createElement('h2');
    bookTitle.innerText = `${book.title}`;
    bookTitle.classList.add('book-title');
    bookTitleAuthorPageContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = `by ${book.author}`;
    bookAuthor.classList.add('book-author');

    bookTitleAuthorPageContainer.appendChild(bookAuthor);


    const bookPages = document.createElement('p');
    bookPages.innerText = `${book.pages} pages`;
    bookPages.classList.add('book-pages');
    bookTitleAuthorPageContainer.appendChild(bookPages);

    bookContainer.appendChild(bookTitleAuthorPageContainer);


    const bookInfo = document.createElement('p');
    bookInfo.innerText = `${book.info}`;
    bookInfo.classList.add('book-info');
    bookContainer.appendChild(bookInfo);

    const bookStatus = document.createElement('button');
    bookStatus.classList.add('book-button');
    bookStatus.innerText = `${book.readStatus}`;
    
    bookStatus.classList.add(book.readStatus.toLowerCase() === 'on-going' ? 'on-going-status' : 'finished-status');


    bookStatus.addEventListener('click', () => {
      book.readStatus = book.readStatus === 'On-going' ? 'Finished' : 'On-going'
      bookStatus.innerText = book.readStatus;
      bookStatus.classList.toggle('on-going-status');
      bookStatus.classList.toggle('finished-status');
    });




    bookContainer.appendChild(bookStatus);

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
  const readStatusSelect = document.querySelector('#read-status');
  const readStatus = readStatusSelect.value; 

  addBookToLibrary(title,author,pages,info,readStatus);


  displayBook();


  bookformModal.style.display = 'none';

  form.reset();
})



addBookToLibrary(
  "1984",
  "George Orwell",
  328,
  "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism, written by the English writer George Orwell.",
  "On-going"
);

addBookToLibrary(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  "A 1925 novel that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.",
  "Finished"
);

