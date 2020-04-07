import React from "react";
import { Switch, Route } from "react-router-dom";

/* import pages */
import Start from "./pages/Start";
import Experience from "./pages/Experience";
import Visionary from "./pages/Visionary";
import Architect from "./pages/Architect";
import End from "./pages/End";

/* test */
import MapTest from "./components/MapTest";

/* css */
import "./App.css";
import "./App.sass";

/* context */
import FormContextProvider from "./contexts/FormContext";
import StepContextProvider from "./contexts/StepContext";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FormContextProvider>
          <StepContextProvider>
            <Switch>
              {/* real */}
              <Route exact path="/" component={Start} />

              <Route exact path="/experience" component={Experience} />

              <Route exact path="/visionary" component={Visionary} />
              <Route exact path="/architect" component={Architect} />
              <Route exact path="/end" component={End} />

              {/* test */}
              <Route path="/maptest" component={MapTest} />
            </Switch>{" "}
          </StepContextProvider>
        </FormContextProvider>
      </div>
    );
  }
}

export default App;
