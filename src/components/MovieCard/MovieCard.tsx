import * as React from 'react';
import { IMovieCardState } from './IMovieCardState';
import { IMovieCardProps } from './IMovieCardProps';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieUtils from "../../utils/MovieUtils";

class MovieCard extends React.Component<IMovieCardProps, IMovieCardState> {

	constructor(props: IMovieCardProps) {
		super(props);
		this.state = {
			modalOpen: false
		};
	}

	makeImageUrl = (url: string): string => new MovieUtils().makePosterUrl(url); 

	handleOpen = () => {
		this.setState({ modalOpen: true });
	};

	handleClose = () => {
		this.setState({ modalOpen: false });
	};

	render = (): JSX.Element => {
		return (
			<div className="MovieCard">
				<Card onClick={this.handleOpen}>
					<CardActionArea>
						<CardMedia
							component="img"
							className="card-media-image"
							image={this.makeImageUrl(this.props.item.poster_path)}
							title={this.props.item.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className="MovieCard-title">
								{this.props.item.title}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.modalOpen}
					onClose={this.handleClose}
				>
					<MovieDetails item={this.props.item} />
				</Modal>
			</div>
		);
	}
}

export default MovieCard;
