let myLibrary = [];

function Book(title , author, page_nums, read = false) {
  this.title = title;
  this.author = author;
  this.page_nums = page_nums;
  this.read = read;
}

// Book.prototype.info = ()=>{
//   result = `${this.title} by ${this.author}, ${this.page_nums} pages, `
//   result += this.read ? "read" : 'not read yet'
//   return result;
// }

function addBookToLibrary(title , author, page_nums, read = false) {
  let book = new Book(title , author, page_nums, read);
  myLibrary.push(book);
}

function dispalybooks(arr) {
  const table = document.querySelector("table");
  for (let i = 0 ; i < arr.length; i++)
  {
    let row = document.createElement('tr');

    let title_td = document.createElement('td');
    title_td.textContent = arr[i].title;
    row.appendChild(title_td);

    let author_td = document.createElement('td');
    author_td.textContent = arr[i].author;
    row.appendChild(author_td);

    let page_nums_td = document.createElement('td');
    page_nums_td.textContent = arr[i].page_nums;
    row.appendChild(page_nums_td);

    let read_td = document.createElement('td');
    read_td.textContent = arr[i].read;
    row.appendChild(read_td);
    table.appendChild(row);

    let remove_td = document.createElement('td');
    let remove_btn = document.createElement('button');
    remove_btn.classList.add('remove_book');
    remove_btn.textContent = 'Delete Book';
    remove_btn.dataset.indexNumber = i;
    remove_td.appendChild(remove_btn);
    row.appendChild(remove_td);
  }
}

addBookToLibrary("Livre", "splinter", 154, true);

dispalybooks(myLibrary);

let removeBook = document.querySelector('.remove_book');

removeBook = document.addEventListener('click', function() {
  let inx = removeBook.dataset.indexNumber;
  myLibrary.splice(inx, 1);
  dispalybooks(myLibrary);
});


// Adding Book button

let addBookBtn = document.querySelector('#addbook_btn');
addBookBtn.addEventListener("click", function() {
  let addBookForm = document.querySelector('#addbook_form');
  addBookForm.classList.toggle('hide_element');
});

let cancelBookBtn = document.querySelector('#cancel_book_data');
cancelBookBtn.addEventListener("click", function() {
  let addBookForm = document.querySelector('#addbook_form');
  addBookForm.classList.toggle('hide_element');
});

let submitBtn = document.querySelector("#submit_book_data");
submitBtn.addEventListener('click', function () {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pagesnum = document.querySelector("#pagesnum").value;
  pagesnum = parseInt(pagesnum);
  let read = document.querySelector('input[name="read"]:checked').value;
  read = read == "true"
  console.log(read);
  addBookToLibrary(title , author, pagesnum, read);
  // addBookToPage(title , author, pagesnum, read);
  dispalybooks(myLibrary);
  let addBookForm = document.querySelector('#addbook_form');
  addBookForm.classList.toggle('hide_element');
})

function addBookToPage(title , author, pagesnum, read) {
  const table = document.querySelector("table");
  let row = document.createElement('tr');

  let title_td = document.createElement('td');
  title_td.textContent = title;
  row.appendChild(title_td);

  let author_td = document.createElement('td');
  author_td.textContent = author;
  row.appendChild(author_td);

  let page_nums_td = document.createElement('td');
  page_nums_td.textContent = pagesnum;
  row.appendChild(page_nums_td);

  let read_td = document.createElement('td');
  read_td.textContent = read;
  row.appendChild(read_td);
  table.appendChild(row);
}