import React,{useState, useEffect} from "react";
import { connect } from 'react-redux';
import { updateCheckboxAll,updateCheckboxEach } from '../actions/checkbox';
import Checkbox from "./checkbox";
const data = [
  {
    id: "1",
    color: "red",
    value: "#f00"
  },
  {
    id: "2",
    color: "green",
    value: "#0f0"
  },
  {
    id: "3",
    color: "blue",
    value: "#00f"
  },
  {
    id: "4",
    color: "cyan",
    value: "#0ff"
  },
  {
    id: "5",
    color: "magenta",
    value: "#f0f"
  },
  {
    id: "6",
    color: "yellow",
    value: "#ff0"
  },
  {
    id: "7",
    color: "black",
    value: "#000"
  }
];

function CheckboxContainertainer(props) {
const {updateCheckboxAll,updateCheckboxEach}=props;

useEffect(()=>{this.forceUpdate()},[])
  
  console.log(props);
  return (
    <div className="grid-flex-container">
      <div>
        <input type="checkbox" name="selectAll" onChange={updateCheckboxAll} />
      </div>
      <div>
        {data.map(user=><Checkbox key={user.id} checked={props.isChecked} user={user} updateCheckboxEach={updateCheckboxEach} />)}
      </div>
    </div>
  );
}

const mapStateToProps=state=> {
    console.log(state);
    return {isChecked:state.checkbox.checkedItems};
  }

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      updateCheckboxAll: (event) => dispatch(updateCheckboxAll(event)),
      updateCheckboxEach: (event) => dispatch(updateCheckboxEach(event)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(CheckboxContainertainer);
