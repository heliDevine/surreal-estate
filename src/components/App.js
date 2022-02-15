import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <h2 className="title">Surreal Estate</h2>

            <Switch>
                <Route exact path="/" component={Properties} />
                <Route exact path="/add-property" component={AddProperty} />
            </Switch>
        </div>
    );
};

export default App;
