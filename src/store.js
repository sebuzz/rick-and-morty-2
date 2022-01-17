import create from "zustand";


// const characters = useStore(state => state.characters);
// const store = set => ({
export const useStore = create(set => ({
	characters: [
		{
			id: 0,
			name: "Rick Sanchez jr",
			image: "#",
			favorite: false,
		},
	],

	setCharacters: characters => {
		console.log("attempting to setCharacters");
		set(state => ({
			characters: [...state.characters, ...characters],
		}));
	},
	toggleFavorite: (character) => {

		console.log("toggling character favorite: ", character);
		character.favorite = (!character.favorite);
		console.log("character",character.name,"is favorite: ", character.favorite);
	},
	setFavorite: (character, bool) => {
		console.log("setting character favorite: ", character);
		character.favorite = bool;
	},
	counter: 0,
	increment: () => {
		set((state) => ({
			counter: state.counter + 1,
		}));
	},
	decrement: () => {
		// No return
		// Side effect  (update)
		set((state) => {
			// Returns a partial (new state)
			return {
				counter: state.counter - 1,
			};
		});
	},

}));

// const useStore = create(devtools(store));
// const useStore = create(store);

// export default useStore;
