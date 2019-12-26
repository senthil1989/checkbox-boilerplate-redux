import { SELECTED_ALL, SELECTED_EACH } from './const';

export function updateCheckboxAll(e) {
    const name=e.target.name;
    const value = e.target.checked;
  return {
    type: SELECTED_ALL,
    payload: { 'value':value }
  };
}
export function updateCheckboxEach(e) {
    console.log(e.target.checked);
    const name=e.target.name;
    const value = e.target.checked;
  return {
    type: SELECTED_EACH,
    payload: { 'name': name,'value':value },
  };
}
