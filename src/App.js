import "./App.css";
import React, { useEffect, useState } from "react";
// import {
//   allSettledFulfilled,
//   allSettledFiltering,
//   promiseAllFulfilled,
//   promiseAllIfOneFails,
// } from "./lesson-topics/promises";
// import { sendCorsRequests } from "./lesson-topics/cors";
//import { combineArrays, combineObjects } from "./lesson-topics/reduce";
//import LazyloadedComponent from "./components/LazyloadedComponent";
import CookieButtons from "./components/CookieButtons";

const LazyloadedComponent = React.lazy(() =>
  import("./components/LazyloadedComponent")
);

function App() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  useEffect(() => {
    //allSettledFulfilled();
    //allSettledFiltering();
    //promiseAllFulfilled();
    //promiseAllIfOneFails();
    //sendCorsRequests();
    //combineArrays();
    //combineObjects();
  }, []);

  return (
    <div className="App">
      {/* <button
        className="button"
        onClick={() => setShowLazyComponent((prevValue) => !prevValue)}
      >
        Click Me
      </button>
      {showLazyComponent && (
        <React.Suspense fallback="Loading...">
          <LazyloadedComponent />
        </React.Suspense>
      )} */}
      <CookieButtons />
    </div>
  );
}

export default App;
