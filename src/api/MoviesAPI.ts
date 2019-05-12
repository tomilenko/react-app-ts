import { MovieDB } from '../configs/config';

const Urls: any = {
	movies: 'discover/movie',
	search: 'search?query='
  };

const ServiceHelper: any = {
	makeUrl: (url: string) => `${MovieDB.endpoint}${url}?api_key=${MovieDB.apiKey}`,
	validate: (res: any) => {
		if (res.status >= 400) {
		  throw new Error("Bad response from server");
		}
		return res.json();
	  }
}

export default class MoviesAPI {
	discoverMovies = async () => {
		return await fetch(ServiceHelper.makeUrl(Urls.movies))
			.then((res) => ServiceHelper.validate(res))
			.then((data) => data.results);
	}
}
