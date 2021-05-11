import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "../src/pages/Products";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Product />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
