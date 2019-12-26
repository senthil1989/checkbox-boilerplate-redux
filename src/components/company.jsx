import React from 'react';


function Company({ item, activeCompany, clickHandler }) {
  const isActive = activeCompany != null && item.id === activeCompany.id;
  return (
    <tr className={isActive ? 'table-cell-alert' : ''} onClick={() => clickHandler(item)}>
      <th>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.owner}</td>
    </tr>
  );
}



export default Company;
