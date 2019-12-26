import React from 'react';

function Container({ children }) {
  return (
    <div className="grid-flex-container">
      {children}
    </div>
  );
}


export default Container;
