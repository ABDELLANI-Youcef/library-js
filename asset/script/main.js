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
  book = new Book(title , author, page_nums, read);
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
  }
}

addBookToLibrary("Livre", "splinter", 154, true);

dispalybooks(myLibrary);

// Adding Book button

let addBookBtn = document.querySelector('#addbook_btn');
addBookBtn.addEventListener("click", function() {
  let addBookForm = document.querySelector('#addbook_form');
  addBookForm.classList.toggle('hide_element');
})