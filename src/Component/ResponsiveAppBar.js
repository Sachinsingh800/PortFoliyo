import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./ResponsiveAppBar.module.css"

function ResponsiveAppBar() {
  return (
    <Navbar className={style.nav} expand="lg">
      <Container >
        <Navbar.Brand  href="#home"><img className={style.img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq8SV71H_zog4q6pSXpPA-XZsH7sL-vsHOg&usqp=CAU"} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/" style={{color:"red"}}>Home</Nav.Link>
            <Nav.Link href="/About" style={{color:"red"}}>About</Nav.Link>
            <Nav.Link href="/Project" style={{color:"red"}}>Project</Nav.Link>
            <Nav.Link href="/Contact" style={{color:"red"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveAppBar;