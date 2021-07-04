const initialState = []
const items = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL_ITEMS':
      return action.payload
    default:
      return state
  }
}

export default items;