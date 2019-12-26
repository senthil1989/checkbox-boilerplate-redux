import React from 'react';

function TableBody({ data, row }) {
  if (data.length > 0) {
    return (
      <tbody>
        {data.map((item) => (
          <row.type {...row.props} item={item} key={item.key}> {row.children} </row.type>
        ))}
      </tbody>
    );
  }
}


export default TableBody;
