import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                {/* <h2 className="title">Surreal Estate</h2> */}

                <Switch>
                    <Route exact path="/" component={Properties} />
                    <Route exact path="/add-property" component={AddProperty} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
