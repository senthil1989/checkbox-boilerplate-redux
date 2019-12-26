import React from 'react';

function Checkbox({user,checked,updateCheckboxEach}) {
  console.log(checked);
  return(
  <div>
   <input type="checkbox" name={user.id} key={user.id} checked={checked.get(user.id)}  onChange={(event)=>updateCheckboxEach(event)}/>
   <span>{user.color}</span>
   <span>{user.value}</span>
   </div>
  )
}

export default Checkbox;
