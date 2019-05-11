import * as React from 'react';
import { IMoviesState } from './IMoviesState';
import { IMoviesProps } from './IMoviesProps';
import MoviesService from '../../services/MoviesService';
import MovieCard from '../MovieCard/MovieCard';
import { tempMovie } from '../../definitions/tempMovie';
import { IMovie } from "../interfaces/IMovie";

class Movies extends React.Component<IMoviesProps, IMoviesState> {

	constructor(props: IMoviesProps) {
		super(props);
		this.state = { items: [tempMovie] };
	}

	discover = () => {
		let mService = new MoviesService();
		mService.discoverMovies().then((data: [IMovie]) => {
			console.warn(data);
			this.setState({
				items: data
			});
		});
	}

	componentWillMount = () => this.discover();

	render = (): JSX.Element => {
		return (
			<div className="Movies">
				<h2>Movies</h2>
				<ul className="Movies-list">
					{this.state.items.map( (item: IMovie) => (
						<li className="Movies-list_item">
							<MovieCard item={item} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Movies;
