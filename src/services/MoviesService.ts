import config from '../configs/config.json';

const Urls: any = {
	movies: 'discover/movie',
	search: 'search?query='
  };

const ServiceHelper: any = {
	makeUrl: (url: string) => `${config.movieDb.endpoint}${url}?api_key=${config.movieDb.apiKey}`,
	validate: (res: any) => {
		if (res.status >= 400) {
		  throw new Error("Bad response from server");
		}
		return res.json();
	  }
}

export default class MoviesService {
	discoverMovies = async () => {
		return await fetch(ServiceHelper.makeUrl(Urls.movies))
			.then((res) => ServiceHelper.validate(res))
			.then((data) => data.results);
	}
}
