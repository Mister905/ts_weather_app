import React, { useState, useEffect, useRef } from "react";

let auto_complete: any;

const loadScript = (url: any, callback: any) => {

  let script = document.createElement("script");
  script.type = "text/javascript";

  if ((script as any).readyState) {
    (script as any).onreadystatechange = function () {
      if ((script as any).readyState === "loaded" || (script as any).readyState === "complete") {
        (script as any).onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery: any, auto_completeRef: any) {
  auto_complete = new (window as any).google.maps.places.Autocomplete(
    auto_completeRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  auto_complete.setFields(["address_components", "formatted_address"]);
  auto_complete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery: any) {
  const addressObject = auto_complete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function Location_Search() {
  const [query, setQuery] = useState("");
  const auto_completeRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY!}&libraries=places`,
      () => handleScriptLoad(setQuery, auto_completeRef)
    );
  }, []);


  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="search-location-input">
      <input
        ref={auto_completeRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
}

export default Location_Search;
