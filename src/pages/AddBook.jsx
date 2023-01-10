import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function AddBook() {

    async function addBook(url = '', data = {}) {
        // Default options are marked with *
        fetch(url, {
            method: 'POST', // or 'PUT'
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



const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title: event.target.title.value,
            author: event.target.author.value,
            description: event.target.description.value,
            price: event.target.price.value,
        }
        addBook('http://localhost:8700/create-book', newBook)
        .then((data) => {
            console.log(data); 
            window.location.reload(false);// JSON data parsed by `data.json()` call
          });
        // alert(`The name you entered was: ${event.target.title.value}`)
        console.log(newBook);
      }

      
  return (
    <Container className="justify-content-md-center">
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>title</Form.Label>
        <Form.Control name='title' type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>author</Form.Label>
        <Form.Control name='author' type="text" placeholder="auteur" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>description</Form.Label>
        <Form.Control name='description' type="text" placeholder="description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>price</Form.Label>
        <Form.Control name='price' type='number' placeholder="price" />
      </Form.Group>
    <Button variant="primary" type="submit">
        Ajouter
    </Button>
    </Form>
    </Container>
 
  );
}

export default AddBook;