const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const {updateBook, createBook, deleteBook, getBook, getBooks} = require('./storageFunctions.js');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// ------------------------------------//

//get all books
app.get('/books', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
	res.send(getBooks())

})
// ------------------------------------//

//add book (has body)
app.post('/book', (req, res) => {

  console.dir(req.body);

  let book = req.body
  createBook(book)
	res.send("I love Ali")
})
// ------------------------------------//

//get book by id
app.get('/book/:id', (req, res) => {

  console.log(req.params.id)

  let id =  req.params.id
  let newBook =  getBook(id)

  if (newBook) {
    res.send(newBook)
  }
  else {
    res.send("Id not found " + id)
    res.status(404).end()
  }
})
// ------------------------------------//

//update book by id (has body)
app.put('/book/:id', (req, res) => {

  console.log(req.params.id)
  console.dir(req.body);

  let id =  req.params.id
  let book = req.body

  let newBook =  updateBook(id,book)
  if (newBook) {
    res.send(newBook)
  }
  else {
    res.send("Id not found " + id)
    res.status(404).end()
  }
})
// ------------------------------------//

//delete book by id
app.delete('/book/:id', (req, res) => {

	console.log(req.params.id)

  let id =  req.params.id

  if (!deleteBook(id)) {
    res.send("Id not found " + id)
    res.status(404).end()
  }
  else {
    res.send("I love Ali")
  }
})
// ------------------------------------//

const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
