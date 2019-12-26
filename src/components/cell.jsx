import React from 'react';


function Cell({ children }) {
  return (
    <div className="grid-flex-cell">
      {children}
    </div>
  );
}


export default Cell;
