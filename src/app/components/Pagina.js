import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/filmes">inicío</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/series">Séries</Nav.Link>
            <Nav.Link href="/atores">Atores</Nav.Link>
            <Nav.Link href="/filmes">filmes</Nav.Link>
            <NavDropdown title="Filmes" id="filmes">
              <NavDropdown.Item href="/">populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/">em cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/">tabela</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      
      <Container>

      <div className=" text-black text-left p-1">
        <h1 className="page-title">{props.titulo}</h1>
      </div>
      </Container>

      <Container>{props.children}</Container>
    </>
  );
}
