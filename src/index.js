import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCKita7k2ybQNOXEInWhj7wXZg1DhKlCzQ';

/*Create a new component. It should produce some html*/
const App = () => {
    return <div><SearchBar /></div>;
};

/*Take this component's generated HTML an put it on the page (in the DOM)*/
ReactDOM.render(<App />, document.querySelector('.container'));
