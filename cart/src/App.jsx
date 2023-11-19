import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function ColorSchemesExample() {
  return (
    <>
  
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className='one'>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{padding:"9px",marginLeft:'150px',fontSize:"20px" , color:"black" , fontWeight:"bold"} }>Home</Nav.Link>
            <Nav.Link href="#features"  style={{padding:"9px",marginLeft:'290px',fontSize:"20px" , color:"black" , fontWeight:"bold"}}>About</Nav.Link>
            <Nav.Link href="#pricing"  style={{padding:"9px",marginLeft:'350px',fontSize:"20px" , color:"black" , fontWeight:"bold"}}>Tour</Nav.Link>
          </Nav>
        </Container>
     
      </Navbar>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="./image/2.jpg" style={{height:'278px'}} />
        <Card.Body>
          <Card.Title style={{color:'green'}}>LONDON</Card.Title>
          <Card.Text>
            TNATURE OF PIECES.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./image/OIP.jpg"style={{width:"100%"}}  />
        <Card.Body>
          <Card.Title style={{color:'green'}}>PARIS</Card.Title>
          <Card.Text>
          EASY TO FEEL THE PLACE
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./image/R.jpg" />
        <Card.Body>
          <Card.Title style={{color:'green'}}>TOKIYO</Card.Title>
          <Card.Text>
           NATURE OF THE EARTH
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
     
    </>
  );
}

export default ColorSchemesExample;