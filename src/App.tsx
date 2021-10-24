import React from 'react';
import './App.css';
import GlobalNavigation from "./pages/GlobalNavigation/GlobalNavigation";
import {
    Switch,
    Route, Redirect
} from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import PhoneboxPage from "./pages/PhoneboxPage/PhoneboxPage";

const App = () => {
    return (
        <div className='app_all_pages'>
            <GlobalNavigation/>
            <main>
                <Switch>
                    <Redirect exact from="/" to="/dashboard"/>
                    <Route path="/dashboard">
                        <DashboardPage/>
                    </Route>
                    <Route path="/phonebox">
                        <PhoneboxPage/>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}


export default App;