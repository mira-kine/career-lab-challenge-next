import React from 'react';

export default function ImageDetailsPage({
	id,
	isSelected = true,
	setIsSelected,
}) {
	// TODO: new view when user clicks a result.
	//  this page will render a back button that returns the user to the list view
	// without React Router (conditional rendering)
	// and has the artwork whose title the user just clicke don

	// render image according to art.id or art.title
	// when click Back button, set isSeleced back to false

	function handleBack() {
		setIsSelected(false);
	}

	return (
		<div>
			<h1>Image Details</h1>
			<button onClick={() => handleBack()}>Back</button>
		</div>
	);
}
