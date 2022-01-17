import React from "react";
import {useStore} from "../src/store";

const Header = () => {
	const counter = useStore((state) => state.counter);
	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);
	return (
		<header>
			<div>Rick and Morty</div>
			<div>
				<button>Characters</button>
				{counter}
				<br />
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<button>Favorites</button>
			</div>
		</header>
	);
};

export default Header;
