import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import NavTop from "./components/NavTop";
import CarritoContextProvider from "./context/carritoContext";

export default function App() {
	return (
		<Router>
			<CarritoContextProvider>
				<NavTop />
				<Switch>
					<Routes />
				</Switch>
			</CarritoContextProvider>
		</Router>
	);
}
