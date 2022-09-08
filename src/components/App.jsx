import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [artwork, setArtwork] = useState();

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
	console.log('artwork', artwork);
	return (
		<div className="App">
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<h1>TCL Career Lab Art Finder</h1>
			{artwork &&
				artwork.map((art) => (
					<>
						<h3 key={art.id}>{art.title}</h3>
						<h4>{art.artist_title}</h4>
					</>
				))}
			<Footer />
		</div>
	);
}
