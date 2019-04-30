export const getSidebarData = () => {
  return { type: 'GET_SIDEBAR_DATA' }
}

export const updateSidebarData = (newData) => {
  return { type: 'UPDATE_SIDEBAR_DATA', payload: newData }
}

