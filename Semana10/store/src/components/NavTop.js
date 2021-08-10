import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { AuthContext } from "../context/authContext";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export default function NavTop() {
	const { carrito } = useContext(CarritoContext);
	const { userState, signOut } = useContext(AuthContext);

	const totalCarrito = carrito.reduce((total, item) => {
		return total + item.cantidad;
	}, 0);

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>CodiStore</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/">Inicio</Link>

						<Link to="/productos">Productos</Link>
					</Nav>

					<Link to="/carrito">
						Carrito
						<Badge badgeContent={totalCarrito} color="primary">
							<ShoppingCartIcon />
						</Badge>
					</Link>

					<Link to="/checkout">Comprar!</Link>

					{userState ? (
						<NavDropdown
							title={
								<div className="d-inline">
									<img
										src={userState.photoURL}
										className="me-2"
										style={{ borderRadius: "50%", width: "30px" }}
										alt="avatar"
									/>
									<span>{userState.displayName}</span>
								</div>
							}
						>
							<NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
						</NavDropdown>
					) : (
						<Link to="/login">Ingresar</Link>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
