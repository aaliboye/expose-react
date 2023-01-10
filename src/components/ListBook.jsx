import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Book from './Book';

function ListBook(){
    const [books, setBooks] = useState([])

    async function getData() {
        try {
          const response = await fetch('http://localhost:8700/books');
          const  books = await response.json();
          setBooks(books)
          console.log(books);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        getData();
      }, [])





    

    return(
    <div>
      <Row style={{padding: '2rem'}}>

      {books.map(book => (
        <Col key={book._id}  style={{padding: '10px'}} sm={3}>
        

        {/* <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="./Livre_couverture_01.jpg" />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}

        <Book key={book._id} id={book._id} title={book.title} author={book.author} price={book.price} publishingDate={book.publishingDate} />
        
        </Col>
      ))}

      </Row>

     
        {/* {books.map((book)=>{
          <Col xs={6} md={4} key={book._id} >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./Livre_couverture_01.jpg" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>

        })} */}
    
    </div>
        
    )

}

export default ListBook;