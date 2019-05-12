export default class MovieUtils {
	makePosterUrl = (url: string): string => {
		return `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${url}`;
	};

	makeBackdropUrl = (url: string): string => {
		return `https://image.tmdb.org/t/p/w1400_and_h450_face/${url}`;
	}
}