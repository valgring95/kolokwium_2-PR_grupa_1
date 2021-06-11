
import './App.css';
import { Route, Switch } from "react-router-dom";
import Posts from "./components/posts";
import Ddhome from "./components/ddhome";

function App() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                               component={Posts} />
                        <Route path="/" exact component={Posts} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
