import React from 'react';
import './App.css';
import HomePage from "./components/homepage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HatsPage from './components/page/hatspage';
import ShopPage from './components/page/shoppage';
import Header from './components/header';
import SignInAndSignUp from './components/page/signinsignup';
import { auth } from './components/firebase/firebase.util';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }
    unsubscribedFromAuth = null;
    
    componentDidMount(){
        this.unsubscribedFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        })
    }
    componentWillUnmount(){
        this.unsubscribedFromAuth();
    }

    render(){
        return(
            <div>
                <Router>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path='/hats' component={HatsPage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" component={SignInAndSignUp}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
