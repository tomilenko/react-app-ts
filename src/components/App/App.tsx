import React from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
import SearchAppBar from '../UI/SearchAppBar';
import Movies from "../Movies/Movies";

const App: React.FC = () => {
	return (
		<div className="App">
			<SearchAppBar />
			<Movies />
		</div>
	);
}

export default App;
