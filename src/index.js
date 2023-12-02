import React from 'react';
import ReactDOM from 'react-dom/client';
// import OldWay from './OldWay';
import WithHooks from './WithHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OldWay /> */}
    <WithHooks />
  </React.StrictMode>
);


