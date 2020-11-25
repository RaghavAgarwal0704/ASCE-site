import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index.page";
import Event from "./pages/event.page";
import About from "./pages/about.page";
import Navbar from "./components/navbar.component";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/event' component={Event} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;
