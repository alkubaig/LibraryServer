// for unique ids
const { uuid } = require('uuidv4');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./books');

//
// let books = [
//      { id: uuid(), serialNum: 1, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 2, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 3, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 4, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 5, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 6, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 7, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 8, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 9, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 10, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
//      { id: uuid(), serialNum: 11, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"}
//   ];

function getBooks () {
     let books = JSON.parse(localStorage.getItem('books'))
     return books
}

function setBooks(books){
  localStorage.setItem('books', JSON.stringify(books))
}

function createBook(newBook){

  let books = getBooks()
  newBook["id"] = uuid()
  books.push(newBook)
  setBooks(books)
}

function getBook(id){
  let books = getBooks()
  var idx = books.findIndex(book => book.id == id);
  if (idx >= 0){
    return books[idx]
  }
  return false
}

function deleteBook(id){

  let books = getBooks()
  var idx = books.findIndex(book => book.id ==id);
  if (idx >= 0){
    books =  books.filter(book => (book.id != id))
    setBooks(books)
    return true
  }
  return false
}

function updateBook(id, newBook){

  let books = getBooks()
  var idx = books.findIndex(book => book.id ==id);
  if (idx >= 0){
    newBook.id = id
    books[idx] = newBook
    setBooks(books)
    return newBook
  }
  return false
}


module.exports = {updateBook, createBook, deleteBook, getBook, getBooks};
