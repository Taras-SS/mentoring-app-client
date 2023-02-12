import "./App.css";
import React, { useEffect, useState } from "react";
// import {
//   allSettledFulfilled,
//   allSettledFiltering,
//   promiseAllFulfilled,
//   promiseAllIfOneFails,
// } from "./promises";
// import { sendCorsRequests } from "./cors";
//import { combineArrays, combineObjects } from "./reduce";
// import LazyloadedComponent from "./LazyloadedComponent";

const LazyloadedComponent = React.lazy(() => import("./LazyloadedComponent"));

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
      <button
        className="button"
        onClick={() => setShowLazyComponent((prevValue) => !prevValue)}
      >
        Click Me
      </button>
      {showLazyComponent && (
        <React.Suspense fallback="Loading...">
          <LazyloadedComponent />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
