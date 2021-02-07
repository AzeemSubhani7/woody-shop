import './App.css';
import HomePage from "./components/homepage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HatsPage from './components/page/hatspage';
import ShopPage from './components/page/shoppage';
import Header from './components/header';
import SignInAndSignUp from './components/page/signinsignup'

function App() {
    return (
        <div>
        <Router>
            <Header />
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


export default App;
