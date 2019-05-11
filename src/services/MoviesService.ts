const Urls: any = {
	movies: 'discover/movie',
	search: 'search?query='
  };

const ServiceHelper: any = {
	endpoint: "https://api.themoviedb.org/3/",
	apiKey: "ec100598eff80eb95917837627303bb3",
	makeUrl: (url: string) => `${ServiceHelper.endpoint}${url}?api_key=${ServiceHelper.apiKey}`,
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
