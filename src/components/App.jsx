import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [artwork, setArtwork] = useState();
	const [isSelected, setIsSelected] = useState(false);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setArtwork(json.data);
		});
	}
	function handleDetail(id) {
		// when result is clicked, takes to ImageDetail Component that renders according to
		// id
		setIsSelected(true);
	}

	console.log('isSelected', isSelected);
	// conditional rendering of components

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!artwork && <SearchForm onSearchSubmit={onSearchSubmit} />}
			{artwork &&
				!isSelected &&
				artwork.map((art) => (
					<>
						<label key={art.id}>
							<h3>{art.title}</h3>
							<h4>{art.artist_title}</h4>
							<button onClick={() => handleDetail(art.id)}>Details?</button>
						</label>
					</>
				))}
			{isSelected && (
				<ImageDetailsPage isSelected={true} setIsSelected={setIsSelected} />
			)}
			<Footer />
		</div>
	);
}
