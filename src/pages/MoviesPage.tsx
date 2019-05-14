import React from 'react';
import Movies from "../components/Movies/Movies";

interface IMoviesPageState {

}

class MoviesPage extends React.Component<IMoviesPageState> {

	render = () => {
		return (
			<div className="MoviesPage">
				<h1>Movies Page</h1>
				<Movies />
			</div>
		);
	}

}

export default MoviesPage;