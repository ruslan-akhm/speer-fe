import Navbar from "./components/navbar/Navbar";
import Mainpage from "./components/mainpage/Mainpage";
import Pricing from "./components/pricing/Pricing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/" component={Mainpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
