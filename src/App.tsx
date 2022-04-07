import React from "react";
import Location_Search from "./components/location_search/Location_Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col m12">
            <Location_Search />
          </div>
        </div>

        <div className="row mt-50">
          <div className="col m12 center-align">
            <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
