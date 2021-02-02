import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index.page";
import Event from "./pages/event.page";
import About from "./pages/about.page";
import Sponsor from "./pages/sponsor.page";
import Contact from "./pages/contactUs.page";
import BecomeSponsor from "./pages/becomeSponsor.page";
import InhouseEvent from "./pages/inhouseEvent.page";
import NationalEvent from "./pages/nationalEvent.page";
import WorkshopEvent from "./pages/workshopEvent.page";

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/event' exact component={Event} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/event/national' component={NationalEvent} />
                    <Route path='/event/workshop' component={WorkshopEvent} />
                    <Route path='/event/inhouse' component={InhouseEvent} />
                    <Route path='/sponsors' exact component={Sponsor} />
                    <Route path='/sponsors/become' component={BecomeSponsor} />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
