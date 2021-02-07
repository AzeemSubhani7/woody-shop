import './App.css';
import HomePage from "./components/homepage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HatsPage from './components/page/hatspage';

function App() {
    return (
        <div>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path='/hats' component={HatsPage}/>
            </Switch>
        </Router>
        </div>
    );
}


export default App;
