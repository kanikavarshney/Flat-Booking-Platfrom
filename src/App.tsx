import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import SearchResultPage from './Pages/SearchResultPage';
import SignupPage from './Pages/SignupPage';
import WelcomePage from './Pages/WelcomePage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/home">
                        <HomePage></HomePage>
                    </Route>
                    <Route path="/signup">
                        <SignupPage></SignupPage>
                    </Route>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                    <Route path="/search">
                        <SearchPage></SearchPage>
                    </Route>
                    <Route path="/searchResult">
                        <SearchResultPage></SearchResultPage>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default App;