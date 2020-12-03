let myLibrary = [];
let count = 0

function Book(title , author, page_nums, read = false) {
  this.title = title;
  this.author = author;
  this.page_nums = page_nums;
  this.read = read;
  this.count = count;
  count++
}

Book.prototype.addBookToPage = function() {
  const table = document.querySelector("table");
  let row = document.createElement('tr');
  row.setAttribute('id' , `row_${this.count}`);
  let title_td = document.createElement('td');
  title_td.textContent = this.title;
  row.appendChild(title_td);

  let author_td = document.createElement('td');
  author_td.textContent = this.author;
  row.appendChild(author_td);

  let page_nums_td = document.createElement('td');
  page_nums_td.textContent = this.page_nums;
  row.appendChild(page_nums_td);

  let read_td = document.createElement('td');
  read_td.textContent = this.read;
  row.appendChild(read_td);

  let remove_td = document.createElement('td');
  let remove_btn = document.createElement('button');
  remove_btn.classList.add('remove_book');
  remove_btn.textContent = 'Delete Book';
  remove_td.appendChild(remove_btn);
  row.appendChild(remove_td);
  table.appendChild(row);

  remove_btn.setAttribute('id' , `delete_${this.count}`);
  remove_btn.dataset.indexNumber = this.count;
  remove_btn.addEventListener('click', function(e) {
    let index = e.target.dataset.indexNumber;
    console.log(`addrow ${parseInt(index)}`);
    let i = find_book(index);
    myLibrary.splice(index, 1);
    const table = document.querySelector("table");
    const target = document.querySelector(`#row_${index}`);
    table.removeChild(target);
  });
}

function addBookToLibrary(title , author, page_nums, read = false) {
  let book = new Book(title , author, page_nums, read);
  myLibrary.push(book);
}

function dispalybooks(arr) {
  const table = document.querySelector("table");
  for (let i = 0 ; i < arr.length; i++)
  {
      arr[i].addBookToPage();
  }
}

function find_book(index) {
  let min = 0;
  let max = myLibrary.length-1;
  let i = Math.floor((min + max)/2);
  let found = false;
  while (min <= max && !found){
    console.log(`find loop ${i}`);
    found = myLibrary[i].count == index;
    if (!found) {
      if (myLibrary[i].count > index)
      {
        max = i-1
      }
      else
      {
        min = i+1
      }
      i = Math.floor((min + max)/2);
    }
  }
  console.log(`find returen ${i}`);
  return i;
}

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
  addBookToLibrary(title , author, pagesnum, read);
  addBookToPage(title , author, pagesnum, read);
  // dispalybooks(myLibrary);
  let addBookForm = document.querySelector('#addbook_form');
  addBookForm.classList.toggle('hide_element');
})

addBookToLibrary("Livre", "splinter", 154, true);
addBookToLibrary("Livre1", "splinter", 154, true);
addBookToLibrary("Livre2", "splinter", 154, true);
addBookToLibrary("Livre3", "splinter", 154, true);
dispalybooks(myLibrary);
