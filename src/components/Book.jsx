import { Button, Card } from "react-bootstrap";
import ListBook from "./ListBook";



function Book({id, title, author, price, description, publishingDate}){

    async function deleteBook() {
        // Default options are marked with *
        fetch(`http://localhost:8700/books/${id}`, {
            method: 'DELETE',
          })
          .then(res =>{
            res.text()
            window.location.reload(false);
          } ) // or res.json()
          .then(res => console.log(res))// parses JSON response into native JavaScript objects
      }


    return(

       
        <Card key={id} style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>ecrit par {author}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>publié le {publishingDate}</Card.Text>
          
          <a href={`/detail/${id}`}> <Button variant="primary"> Modifier</Button></a> 
          <Button variant="danger" onClick={deleteBook}>Delete</Button>

        </Card.Body>
      </Card>
    )
}

export default Book;