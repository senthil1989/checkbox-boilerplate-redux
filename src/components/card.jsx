import React from 'react';
import Cell from './cell';


function Card({ title, children, tools }) {
  return (
    <Cell>
      <div className="card">
        <div>
          <h4>
            {title}
          </h4>
          <div className="tool">{tools}</div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </Cell>
  );
}


export default Card;
