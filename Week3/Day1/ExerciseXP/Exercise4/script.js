// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: "https://picsum.photos/200.jpg",
      alreadyRead: true
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://picsum.photos/200.jpg",
      alreadyRead: false
    }
  ];
  
  const listBooks = document.querySelector('.listBooks');
  
  const booksTable = document.createElement('table');
  booksTable.border = "1";
  listBooks.appendChild(booksTable);
  
  allBooks.forEach(book => {
    const bookRow = document.createElement('tr');
    bookRow.border = "1";
    booksTable.appendChild(bookRow);
  
    const bookTitle = document.createElement('td');
    bookTitle.textContent = book.title;
    bookTitle.border = "1";
    bookRow.appendChild(bookTitle);
  
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = `written by ${book.author}`;
    bookAuthor.border = "1";
    bookRow.appendChild(bookAuthor);
  
    const bookImage = document.createElement('td');
    bookImage.innerHTML = `<img src="${book.image}" width="100px">`;
    bookImage.border = "1";
    bookRow.appendChild(bookImage);
  
    if (book.alreadyRead) {
      bookTitle.style.color = 'red';
      bookAuthor.style.color = 'red';
    }
  });
  