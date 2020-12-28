import React from "react";
// @ts-ignore
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";


const Routes = () => {
    return (
        <Router>
            <Switch>
                {/*<Route path="/memo" component={Memo}/>*/}
                <Route path="/about" component={About}/>
                <Route exact path="/" component={Home}/>
                <Route path="/main" component={Main}/>
            </Switch>
        </Router>
    )
}

// const PublicRoute = ({component: Component, ...rest}: any) => {
//     return <Route {...rest} render ={()=>
// }

export default Routes
