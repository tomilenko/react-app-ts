import * as React from 'react';
import { IMovieCardState } from './IMovieCardState';
import { IMovieCardProps } from './IMovieCardProps';
import { tempMovie } from "../../definitions/tempMovie";


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class MovieCard extends React.Component<IMovieCardProps, IMovieCardState> {

	constructor(props: IMovieCardProps) {
		super(props);
		this.state = {};
	}

	makeImageUrl = (url: string): string => {
		return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${url}`;
	}

	render = (): JSX.Element => {
		return (
			<Card className="MovieCard">
				<CardActionArea>
					<CardMedia
						component="img"
						className="card-media-image"
						image={this.makeImageUrl(this.props.item.poster_path)}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2" className="MovieCard-title">
							{this.props.item.title}
          				</Typography>
						{/* <Typography component="p" className="MovieCard-overview">
							{this.props.item.overview}
          				</Typography> */}
					</CardContent>
				</CardActionArea>
				{/* <CardActions>
					<Button size="small" color="primary">
						Share
        			</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions> */}
			</Card>
		);
	}
}

export default MovieCard;
