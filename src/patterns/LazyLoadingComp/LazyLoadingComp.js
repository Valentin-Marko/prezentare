/* Lazy loading is a technique used to improve the performance of web applications by loading only the
 essential resources or components required for the initial rendering and deferring the loading of non-essential 
 or large resources until they are needed. In React, you can use code splitting and React's built-in lazy and Suspense components 
 to achieve lazy loading.*/

import React, { Suspense, lazy } from "react";

// Lazy-loaded component
const LazyComponent = lazy(() => import("./LazyComponent"));

// Component with lazy loading
const Lazy = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Lazy;
