import React from 'react';
import './App.css';
import SearchAppBar from '../../components/UI/SearchAppBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import MoviesPage from '../../pages/MoviesPage';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<SearchAppBar />

				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/movies" component={MoviesPage} />
			</Router>
		</div>
	);
}

export default App;
