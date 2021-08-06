import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavTop() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>CodiStore</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>Link</Nav.Link>
				
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
