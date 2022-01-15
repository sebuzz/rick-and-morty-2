import React from "react";
import Card from "../molecules/card";

import create from "zustand";

import { useStore } from "../src/store";

const Main = () => {
	const characters = useStore(state => state.characters);
	console.log("characters--> ", characters);
	return (
		<main>
			<div>
				{characters.map(character => {
					console.log(character.name);
					// return <Card key={character.id} character={character} />;
					return (
						<div key={character.id}>
							{/* Grid Wrapper*/}
							{/*{console.log(character.name)}*/}
							<div>
								{/* Card Wrapper*/}
								{/* Card Image*/}
								<img src={character.image} alt="Picture of {character.name}" />
								<div>
									{/* Card Title*/}
									{character.name}
								</div>
								{/* Card Button*/}
								<button>add to favourites</button>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default Main;
