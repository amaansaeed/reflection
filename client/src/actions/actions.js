export const selectWidget = widget => {
  return {
    type: "SELECT_WIDGET",
    widget
  }
}

export const unselectWidget = {
  type: "UNSELECT_WIDGET"
}
