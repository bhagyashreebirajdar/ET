import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppStyledComponent from "../../AppStyledComponent";
import SignIn from "../pages/SignIn";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/appstyledcomponent" component={AppStyledComponent}></Route>
                <Route path="/login" component={SignIn}></Route>
            </Switch>
        )
    }
}

export default App;
