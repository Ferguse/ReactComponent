import React from 'react';
import ReactDOM from 'react-dom';
import Wrapp from './Components/Wrapp';

const App = (props) => {
    return (
        <Wrapp/>
    );
}

ReactDOM.render(
    <App />,  document.getElementById('root')
);