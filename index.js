const express = require('express')
const bodyParser = require('body-parser');
const {updateBook, createBook, deleteBook, getBook, getBooks} = require('./storageFunctions.js');
const cors = require('cors') //cross origin
const app = express()

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// ------------------------------------//

//get all books
app.get('/books', (req, res) => {
	res.send(getBooks())

})
// ------------------------------------//

//add book (has body)
app.post('/book', (req, res) => {

  console.dir("body: ", req.body);

  let book = req.body
  if (isEmpty(book)) {
    res.status(404)
    res.send("Empty body")
  }
  else {
    res.send(createBook(book))
  }

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
    res.status(404)
    res.send("Id not found " + id)
  }
})
// ------------------------------------//

//update book by id (has body)
app.put('/book/:id', (req, res) => {

  console.log(req.params.id)
  console.dir(req.body);

  let id =  req.params.id
  let book = req.body

  if (isEmpty(book)) {
    res.status(404)
    res.send("Empty body")
    // res.send({})
  }

  let newBook =  updateBook(id,book)
  if (newBook) {
    res.send(newBook)
  }
  else {
    res.status(404)
    res.send("Id not found " + id)
    // res.send({})

  }
})
// ------------------------------------//

//delete book by id
app.delete('/book/:id', (req, res) => {

	console.log(req.params.id)

  let id =  req.params.id

  if (!deleteBook(id)) {
    res.status(404)
    res.send("Id not found " + id)
  }
  else {
    res.send({})
    res.send("I love Ali")
  }
})
// ------------------------------------//

const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
