import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index.page";
import EventPage from "./pages/event.page";
import About from "./pages/about.page";
import Sponsor from "./pages/sponsor.page";
import Judge from "./pages/judge.page";
import Contact from "./pages/contactUs.page";
import BecomeSponsor from "./pages/becomeSponsor.page";
import InhouseEvent from "./pages/inhouseEvent.page";
import NationalEvent from "./pages/nationalEvent.page";
import WorkshopEvent from "./pages/workshopEvent.page";

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Event from "./components/event.component";
function App() {
    return (
        <HashRouter>
            <Navbar />
            <main>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/event' exact component={EventPage} />
                    <Route path='/contact' exact component={Contact} />
                    <Route
                        path='/event/national'
                        exact
                        component={NationalEvent}
                    />
                    <Route
                        path='/event/workshop'
                        exact
                        component={WorkshopEvent}
                    />
                    <Route
                        path='/event/inhouse'
                        exact
                        component={InhouseEvent}
                    />
                    <Route path='/event/:type/:event' exact component={Event} />
                    <Route path='/judges' exact component={Judge} />
                    <Route path='/sponsors' exact component={Sponsor} />
                    <Route path='/sponsors/become' component={BecomeSponsor} />
                </Switch>
            </main>
            <Footer />
        </HashRouter>
    );
}

export default App;
