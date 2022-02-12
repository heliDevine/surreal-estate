import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <h2 className="title">Surreal Estate</h2>

            <Routes>
                <Route exact path="/" component={Properties} />
                <Route exact path="/add-property" component={AddProperty} />
            </Routes>
        </div>
    );
};

export default App;
