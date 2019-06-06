import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

// const NewComponent = () => {
//   return (
//     <div>
//       <p>New Component</p>
//     </div>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* If We don't specify path by default it takes to error  */}
        <Route component={Error} exact />
      </Switch>
      {/* <Route path="/new" component={NewComponent} /> */}
    </BrowserRouter>
  );
}

export default App;
