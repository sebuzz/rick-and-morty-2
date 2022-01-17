import React, {useCallback} from "react";


import { useStore } from "../src/store";
import { v4 } from "uuid";

const Main = () => {
	const characters = useStore(state => state.characters);
	const update = useStore((state) => state.toggleFavorite);
	const save = useCallback((character) => {
		console.log("saving: ",character);
		const storageKey = "rick-morty-" + character.id;
		window.localStorage.setItem(storageKey, JSON.stringify(character));
	}, []);
	console.log("characters--> ", characters);
	return (
		<main>
			<div>
				{characters.map((character, index) => {
					console.log(character.name);
					const myId = v4();
					// return <Card key={character.id} character={character} />;
					return (
						// eslint-disable-next-line react/jsx-key
						//<form>
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
									<form>
										{/* Card Button*/}
										<button onClick={()=>{
											// cardForm.favorite.checked = !(cardForm.favorite.checked);
										}}>add to favourites</button>
										<input id={myId} type="checkbox" name="favorite" checked={character.favorite} onChange={() => {
											// character.favorite = (!character.favorite);
											update(character);
											save(character);
											console.log(document.getElementById(myId).checked);
											console.log(character.favorite);
											document.getElementById(myId).checked = !document.getElementById(myId).checked;
											// const nextState = [...characters];
											// nextState[index].isChecked = !nextState[index].isChecked;

										}}/>
									</form>
								</div>
							</div>
						//</form>
					);
				})}
			</div>
		</main>
	);
};

export default Main;
