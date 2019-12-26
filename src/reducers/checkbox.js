import { SELECTED_ALL, SELECTED_EACH } from "../actions/const";
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
const INITIAL_STATE = {
  selectAll: [],
  checkedItems: new Map(),
};

export default function updateCheckbox(state = INITIAL_STATE, action) {
  console.log(action.isChecked);
  switch (action.type) {
    case SELECTED_ALL:
        data.forEach((user)=>state.checkedItems.set(user.id,action.payload.value));
      return { ...state, checkedItems: state.checkedItems };
    case SELECTED_EACH:
        return { ...state, checkedItems: state.checkedItems.set(action.payload.name, action.payload.value) };
    default:
      return state;
  }
}
