import * as React from 'react';
import { IMovieDetailsState } from './IMovieDetailsState';
import { IMovieDetailsProps } from './IMovieDetailsProps';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MovieUtils from "../../utils/MovieUtils";

class MovieDetails extends React.Component<IMovieDetailsProps, IMovieDetailsState> {

	constructor(props: IMovieDetailsProps) {
		super(props);
		this.state = {};
	}

	makePosterUrl = (url: string): string => new MovieUtils().makePosterUrl(url); 
	makeBackdropUrl = (url: string): string => new MovieUtils().makeBackdropUrl(url); 

	render = (): JSX.Element => {
		return (
			<div className="MovieDetails">
				<Paper className="MovieDetails-paper">
					<Typography variant="h5" component="h2" className="MovieDetails-title">
						<b>{this.props.item.title}</b>
					</Typography>
					<Divider />
					<div className="MovieDetails-overview">
						<div className="MovieDetails-overview-image">
							<img src={this.makePosterUrl(this.props.item.poster_path)} />
						</div>
						<div className="MovieDetails-overview-description">
							<Typography component="p" className="MovieDetails-rating">
								Rating: <i>{this.props.item.vote_average}</i> 
							</Typography>
							<Divider />
							<Typography component="p" className="MovieDetails-release">
								Release date: <b>{this.props.item.release_date}</b>
							</Typography>
							<Divider />
							<Typography component="p" className="MovieDetails-overview-text">
								{this.props.item.overview}
							</Typography>
						</div>
						
					</div>
					<Divider />
					<div className="MovieDetails-backdrop">
						<img src={this.makeBackdropUrl(this.props.item.backdrop_path)} alt="backdrop" />
					</div>
					<Divider />
				</Paper>
			</div>
		);
	}
}

export default MovieDetails;
