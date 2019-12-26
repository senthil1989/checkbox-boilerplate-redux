import React from 'react';

import TableHead from './table_head';
import TableBody from './table_body';
import Captation from './captation';



function Table({
  captation,
  headers,
  data,
  className = '',
  children,
}) {
  if (data.length > 0) {
    return (
      <table className={className}>
        <Captation text={captation} />
        <TableHead headers={headers} />
        <TableBody data={data} row={children} />
      </table>
    );
  }
  return (
    <table className="table">
      <Captation text="No data found..." />
    </table>
  );
}


export default Table;
