import React from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
import SearchAppBar from '../../components/UI/SearchAppBar';
import Movies from "../../components/Movies/Movies";

const App: React.FC = () => {
	return (
		<div className="App">
			<SearchAppBar />
			<Movies />
		</div>
	);
}

export default App;
