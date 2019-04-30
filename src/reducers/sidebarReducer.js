const initState = {
  sidebarData: [
    { key: '1', name: 'Coco' },
    { key: '2', name: 'Loco' },
    { key: '3', name: 'Moco' }
  ],
}

const sidebarReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SIDEBAR_DATA':
      return { ...state }

    case 'UPDATE_SIDEBAR_DATA':
      console.warn('update');     
      return {...state, sidebarData: [...state.sidebarData, action.payload]}

    default:
      return { ...state }
  }
}

export default sidebarReducer