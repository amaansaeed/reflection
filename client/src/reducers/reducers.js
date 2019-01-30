const stateInit = {
  activeWidget: null
}

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case "SELECT_WIDGET":
      return {
        ...state,
        activeWidget: action.widget
      }
    case "UNSELECT_WIDGET":
      return {
        ...state,
        activeWidget: null
      }
    default:
      return state
  }
}

export default reducer
