//React
import { Route, Switch } from "react-router";
//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>

     <Route exact path="/">
        <Home />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
