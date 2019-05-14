import * as React from 'react';
import { IMoviesState } from './IMoviesState';
import { IMoviesProps } from './IMoviesProps';
import MoviesAPI from '../../api/MoviesAPI';
import MovieCard from '../MovieCard/MovieCard';
import { tempMovie } from '../../definitions/tempMovie';
import { IMovie } from "../../interfaces/IMovie";

class Movies extends React.Component<IMoviesProps, IMoviesState> {

	constructor(props: IMoviesProps) {
		super(props);
		this.state = { items: [tempMovie] };
	}

	discover = () => {
		let mService = new MoviesAPI();
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
