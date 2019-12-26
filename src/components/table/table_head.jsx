import React} from 'react';

function TableHead({ headers }) {
  if (headers.length > 0) {
    return (
      <thead>
        <tr>
          {headers.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
    );
  }
}


export default TableHead;
