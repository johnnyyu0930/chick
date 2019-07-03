export const SHOW_FILTER = 'SHOW_FILTER';
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
}

export const showFilter = ({filter}) => (dispatch) => {
  dispatch({type:SHOW_FILTER, filter})
}
