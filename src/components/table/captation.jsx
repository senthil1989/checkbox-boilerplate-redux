import React from 'react';

function Captation({ text }) {
  if (text) {
    return (
      <caption>
        {text}
      </caption>
    );
  }
  return null;
}


export default Captation;
