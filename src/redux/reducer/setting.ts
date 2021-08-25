const setting =  function(state={}, action: any) {
  switch(action.type){
    case 'ADD_TODO': {
      return Object.assign({}, action.userInfo)
    }
    default: {
      return {}
    }
  }
}

export default setting