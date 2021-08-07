import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

export default function NavTop() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>CodiStore</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/">
								Inicio
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/carrito">
								Carrito
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
