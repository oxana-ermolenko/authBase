import React, { Suspense } from 'react'
import { Route, Switch } from "react-router-dom"
import About from "./views/about"
import NavBar from "./views/NavBar/NavBar"
import Footer from "./views/Footer/Footer"

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
