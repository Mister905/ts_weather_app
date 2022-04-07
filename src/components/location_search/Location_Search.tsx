import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { get_location_weather } from "../../action_creators/location_actions";

let auto_complete: any;

const load_script = (url: any, callback: any) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if ((script as any).readyState) {
    (script as any).onreadystatechange = function () {
      if (
        (script as any).readyState === "loaded" ||
        (script as any).readyState === "complete"
      ) {
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

function handle_script_load(auto_complete_ref: any, setFieldValue: any) {
  auto_complete = new (window as any).google.maps.places.Autocomplete(
    auto_complete_ref.current,
    { types: ["(cities)"] }
  );
  auto_complete.setFields(["formatted_address", "geometry"]);
  auto_complete.addListener("place_changed", () =>
    handle_place_select(setFieldValue)
  );
}

async function handle_place_select(setFieldValue: any) {
  const address_object = auto_complete.getPlace();
  const location = address_object.formatted_address;
  setFieldValue("location", location);
  setFieldValue("lat", address_object.geometry.location.lat());
  setFieldValue("lng", address_object.geometry.location.lng());
}

function Location_Search() {
  const dispatch = useDispatch();

  const auto_complete_ref = useRef(null);

  useEffect(() => {
    load_script(
      `https://maps.googleapis.com/maps/api/js?key=${process.env
        .REACT_APP_GOOGLE_API_KEY!}&libraries=places`,
      () => handle_script_load(auto_complete_ref, setFieldValue)
    );
  }, []);

  const { handleSubmit, getFieldProps, setFieldValue } = useFormik({
    initialValues: {
      location: "",
      lat: 0,
      lng: 0,
    },
    onSubmit: ({ location, lat, lng }) => {
      dispatch(get_location_weather(location, lat, lng));
    },
  });

  return (
    <div className="container">
      <div className="row mt-50">
        <div className="col m4 offset-m4 center-align">
          <h1 className="location-heading">Enter a Location</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mt-50">
          <div className="input-field col m4 offset-m4">
            <label htmlFor="location" className="active custom-label">
              Location
            </label>
            <input
              id="location"
              {...getFieldProps("location")}
              ref={auto_complete_ref}
              placeholder="Enter a City"
            />
          </div>
        </div>
        <div className="row">
          <div className="col m4 offset-m4">
            <button type="submit" className="btn right">
              Enter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Location_Search;
