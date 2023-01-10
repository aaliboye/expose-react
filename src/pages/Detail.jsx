import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail({id, title, author, price, description, publishingDate}){

  const { idBook } = useParams()
  const [book, setBook] = useState({})

  console.log(idBook);

  async function getData() {
    try {
      const response = await fetch(`http://localhost:8700/books/${idBook}`);
      const  book = await response.json();
      setBook(book)
      console.log(book);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
        title: event.target.title.value,
        author: event.target.author.value,
        description: event.target.description.value,
        price: event.target.price.value,
    }
    updateBook(`http://localhost:8700/books/${idBook}`, newBook)
    .then((data) => {
        console.log(data); 
        window.location.reload(false);// JSON data parsed by `data.json()` call
      });
    // alert(`The name you entered was: ${event.target.title.value}`)
    console.log(newBook);
  }

  
  async function updateBook(url = '', data = {}) {
    // Default options are marked with *
    fetch(url, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        }); // parses JSON response into native JavaScript objects
  }




    return(
    <div>

    <Container style={{padding:"30px"}} className="justify-content-md-center">
    
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>title</Form.Label>
              <Form.Control name='title' type="text" placeholder="title" alt={book.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>author</Form.Label>
              <Form.Control name='author' type="text" placeholder="auteur" alt={book.author} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>description</Form.Label>
              <Form.Control name='description' type="text" placeholder="description" alt={book.description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail" >
              <Form.Label>price</Form.Label>
              <Form.Control name='price' type='number' placeholder="price" alt={book.price}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Modifier
            </Button>
        </Form>
    </Container>
    </div>
    )
}

export default Detail